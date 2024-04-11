import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type ButtonStatusType = {
  button?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonStatus = ({
  button,
  propTop,
  propLeft,
  propMarginLeft,
}: ButtonStatusType) => {
  const buttonStatusStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propTop, propLeft, propMarginLeft]);

  return (
    <LinearGradient
      style={[styles.buttonStatus, buttonStatusStyle]}
      locations={[0, 0.25, 0.5, 0.75, 1]}
      colors={["#f06100", "#f04900", "#f03000", "#f00030", "#f0006d"]}
    >
      <View style={styles.iconLayout}>
        <Text style={styles.icon}>grin</Text>
      </View>
      <Text style={styles.button}>{button}</Text>
      <View style={[styles.iconSolid1, styles.iconLayout]}>
        <Text style={styles.icon}>grin</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    display: "none",
    height: 12,
    width: 12,
  },
  icon: {
    marginTop: -7,
    marginLeft: -6,
    top: "50%",
    left: "50%",
    fontSize: FontSize.paragraphSMRegular_size,
    fontFamily: FontFamily.textSmall,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  button: {
    fontSize: FontSize.textSmall_size,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    textAlign: "left",
    marginLeft: 8,
    color: Color.white,
  },
  iconSolid1: {
    marginLeft: 8,
  },
  buttonStatus: {
    top: 441,
    left: 16,
    borderRadius: Border.br_5xs,
    width: 361,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_9xs,
    opacity: 0.85,
    // backgroundColor: Color.zonesso3,
    position: "absolute",
  },
});

export default ButtonStatus;
