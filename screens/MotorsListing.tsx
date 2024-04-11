import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MotorsListing = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [motorsList, setMotorList] = React.useState([
    {
      _id: "",
      name: "",
      price: "",
      location: "",
      createdBy: "",
      description: "",
      category: "",
      image: "",
      video: "",
      createdAt: "",
      updatedAt: "",
    },
  ]);

  const load = {
    page: 1,
    article: 10,
  };

  const FetchCars = React.useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem("@token");
      console.log(token);
      const submit = await fetch(
        `http://192.168.43.167:4200/api/allProducts/${load.page}/${load.article}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const submitted = await submit.json();
      let newMotorList = [];

      for (let motor of submitted.message) {
        newMotorList.push({
          _id: motor._id,
          name: motor.name,
          price: motor.price,
          location: motor.location,
          createdBy: motor.createdBy,
          description: motor.description,
          category: motor.category,
          image: motor.Image,
          video: motor.Video,
          createdAt: motor.createdAt,
          updatedAt: motor.updatedAt,
        });
      }
      setMotorList(newMotorList);
    } catch (err: any) {
      console.log(err.message);
    }
  }, []);

  React.useEffect(() => {
    FetchCars();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {motorsList.map(
        ({
          _id,
          name,
          price,
          location,
          createdBy,
          description,
          category,
          image,
          video,
          createdAt,
          updatedAt,
        }) => {
          return (
            <View key={_id} style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>Price: ${price}</Text>
                <Text style={styles.location}>Location: {location}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.description}>{category}</Text>
                <Text style={styles.description}>{createdBy}</Text>
              </View>
            </View>
          );
        }
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
    aspectRatio: 16 / 9,
  },
  detailsContainer: {
    flex: 1,
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
  },
});

export default MotorsListing;
