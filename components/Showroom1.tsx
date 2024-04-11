import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

export type Showroom1Type = {
  toyotaPic?: ImageSourcePropType;
  aED99000?: string;
  lamborghiniAventadorV1?: string;
  km12kmAway?: string;

  /** Style props */
  lamborghiniAventadorLeft?: number | string;
  lamborghiniAventadorTop?: number | string;
  propWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Showroom1 = ({
  toyotaPic,
  aED99000,
  lamborghiniAventadorV1,
  km12kmAway,
  lamborghiniAventadorLeft,
  lamborghiniAventadorTop,
  propWidth,
}: Showroom1Type) => {
  const showroom2Style = useMemo(() => {
    return {
      ...getStyleValue("left", lamborghiniAventadorLeft),
      ...getStyleValue("top", lamborghiniAventadorTop),
    };
  }, [lamborghiniAventadorLeft, lamborghiniAventadorTop]);

  const km12kmAwayStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.showroom2, styles.showroom2Position, showroom2Style]}>
      <Image
        style={[styles.toyotaPicIcon, styles.showroom2Position]}
        contentFit="cover"
        source={toyotaPic}
      />
      <Text style={styles.aed99000}>{aED99000}</Text>
      <Text style={[styles.lamborghiniAventador, styles.km12kmAwayFlexBox]}>
        {lamborghiniAventadorV1}
      </Text>
      <Text
        style={[styles.km12kmAway, styles.km12kmAwayFlexBox, km12kmAwayStyle]}
      >
        {km12kmAway}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  showroom2Position: {
    width: 152,
    top: 0,
    position: "absolute",
  },
  km12kmAwayFlexBox: {
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 7,
    position: "absolute",
  },
  toyotaPicIcon: {
    left: 0,
    borderRadius: Border.br_5xs,
    height: 120,
  },
  aed99000: {
    top: 128,
    fontSize: FontSize.paragraphSMRegular_size,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    textAlign: "left",
    left: 7,
    position: "absolute",
  },
  lamborghiniAventador: {
    top: 144,
    fontSize: FontSize.paragraphXSLight_size,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.gray800,
    width: 143,
  },
  km12kmAway: {
    top: 160,
    fontSize: FontSize.size_5xs,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.gray600,
    width: 139,
  },
  showroom2: {
    left: 164,
    height: 182,
  },
});

export default Showroom1;
