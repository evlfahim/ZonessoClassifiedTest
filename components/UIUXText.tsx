import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const UIUXText = () => {
  return <Text style={styles.uiux}>UI/UX</Text>;
};

const styles = StyleSheet.create({
  uiux: {
    fontSize: 96,
    lineHeight: 38,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.white,
    textAlign: "center",
  },
});

export default UIUXText;
