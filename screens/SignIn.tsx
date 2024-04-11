import React, { useCallback, useEffect } from "react";
import { TextInput } from "react-native-paper";
import { View, Text, Button, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Buttons, { Buttons2 } from "../components/Buttton";
import { useRouter } from "expo-router";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import BootLoader from "../components/BootLoader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { Login } from "../Fetches/services";
WebBrowser.maybeCompleteAuthSession();

const SignIn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const load = {
    email: email,
    password: password,
  };

  const Submit = useCallback(async () => {
    const res = await Login(load);
    console.log(`res`,res);
    if (res.status == true) {
      await AsyncStorage.setItem("@token", res.token);
      await AsyncStorage.setItem("@user", JSON.stringify(res.responseData));
      navigation.navigate("Home");
    } else {
      alert(`${res.error}`);
    }
  }, [load]);


  return (
    <ScrollView
      style={{
        marginTop: 50,
      }}
    >
      <View>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="flat"
          label="Email"
          style={{
            width: "100%",
            backgroundColor: "white",
          }}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="flat"
          label="Password"
          style={{
            width: "100%",
            backgroundColor: "white",
          }}
        />
      </View>
      <Buttons
        text="Sign In"
        width="100%"
        marginTop={30}
        backgroundColor="#990000"
        borderRadius={10}
        onPress={Submit}
      />
    </ScrollView>
  );
};

export default SignIn;
