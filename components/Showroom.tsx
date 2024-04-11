import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

export type ShowroomType = {
  /** Style props */
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Showroom = ({ propLeft }: ShowroomType) => {
  const showroom1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.showroom1, styles.showroom1Position, showroom1Style]}>
      <Image
        style={styles.toyotaLogoIcon}
        contentFit="cover"
        source={require("../assets/toyota-logo.png")}
      />
      <Image
        style={[styles.toyotaPicIcon, styles.showroom1Position]}
        contentFit="cover"
        source={require("../assets/toyota-pic1.png")}
      />
      <Text style={[styles.toyotaMotors, styles.kmAwayPosition]}>
        Toyota Motors
      </Text>
      <Text style={[styles.kmAway, styles.kmAwayPosition]}>1.2 km away</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  showroom1Position: {
    width: 152,
    top: 0,
    left: 0,
    position: "absolute",
  },
  kmAwayPosition: {
    textAlign: "center",
    color: Color.gray800,
    left: 41,
    position: "absolute",
  },
  toyotaLogoIcon: {
    borderRadius: Border.br_9xs,
    width: 32,
    height: 32,
    top: 128,
    left: 0,
    position: "absolute",
  },
  toyotaPicIcon: {
    borderRadius: Border.br_5xs,
    height: 120,
  },
  toyotaMotors: {
    fontSize: FontSize.paragraphSMRegular_size,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    top: 128,
  },
  kmAway: {
    top: 146,
    fontSize: FontSize.paragraphXSLight_size,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
  },
  showroom1: {
    height: 160,
  },
});

export default Showroom;
