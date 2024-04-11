import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const ZonessoAssemsentTest = () => {
  return (
    <Text style={styles.zonessoAssemsentTest}>Zonesso Assemsent Test</Text>
  );
};

const styles = StyleSheet.create({
  zonessoAssemsentTest: {
    fontSize: 128,
    lineHeight: 38,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.white,
    textAlign: "center",
  },
});

export default ZonessoAssemsentTest;
