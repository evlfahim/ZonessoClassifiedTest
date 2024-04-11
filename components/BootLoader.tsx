import * as React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const BootLoader = () => (
  <View style={styles.container}>
    <ActivityIndicator animating={true} color={MD2Colors.red800} size={50} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    height: 250,
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
    // position:"absolute",
    zIndex: 5,
    // backgroundColor: "black",
    // opacity:0.6
  },
});

export default BootLoader;
