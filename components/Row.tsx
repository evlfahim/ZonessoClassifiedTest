import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type RowType = {
  letter?: string;
  icon?: ImageSourcePropType;
  letter1?: string;
  icon1?: ImageSourcePropType;
  letter2?: string;
  icon2?: ImageSourcePropType;
  letter3?: string;
  icon3?: ImageSourcePropType;
  letter4?: string;
  icon4?: ImageSourcePropType;
  letter5?: string;
  icon5?: ImageSourcePropType;
  letter6?: string;
  icon6?: ImageSourcePropType;
  letter7?: string;
  icon7?: ImageSourcePropType;
  letter8?: string;
  icon8?: ImageSourcePropType;
  letter9?: string;
  showKey?: boolean;
  showLetter?: boolean;
  icon11?: boolean;

  /** Style props */
  propMarginTop?: number | string;
  propTextTransform?: string;
  propTextTransform1?: string;
  propTextTransform2?: string;
  propTextTransform3?: string;
  propTextTransform4?: string;
  propTextTransform5?: string;
  propTextTransform6?: string;
  propTextTransform7?: string;
  propTextTransform8?: string;
  propTextTransform9?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Row = ({
  letter,
  icon,
  letter1,
  icon1,
  letter2,
  icon2,
  letter3,
  icon3,
  letter4,
  icon4,
  letter5,
  icon5,
  letter6,
  icon6,
  letter7,
  icon7,
  letter8,
  icon8,
  letter9,
  showKey,
  propMarginTop,
  propTextTransform,
  propTextTransform1,
  propTextTransform2,
  propTextTransform3,
  propTextTransform4,
  propTextTransform5,
  propTextTransform6,
  propTextTransform7,
  propTextTransform8,
  propTextTransform9,
  showLetter,
  icon11,
}: RowType) => {
  const row1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const letterStyle = useMemo(() => {
    return {
      ...getStyleValue("textTransform", propTextTransform),
    };
  }, [propTextTransform]);

  const letter1Style = useMemo(() => {
    return {
      ...getStyleValue("textTransform", propTextTransform1),
    };
  }, [propTextTransform1]);

  const letter2Style = useMemo(() => {
    return {
      ...getStyleValue("textTransform", propTextTransform2),
    };
  }, [propTextTransform2]);

  const letter3Style = useMemo(() => {
    return {
      ...getStyleValue("textTransform", propTextTransform3),
    };
  }, [propTextTransform3]);

  const letter4Style = useMemo(() => {
    return {
      ...getStyleValue("textTransform", propTextTransform4),
    };
  }, [propTextTransform4]);

  const letter5Style = useMemo(() => {
    return {
      ...getStyleValue("textTransform", propTextTransform5),
    };
  }, [propTextTransform5]);

  const letter6Style = useMemo(() => {
    return {
      ...getStyleValue("textTransform", propTextTransform6),
    };
  }, [propTextTransform6]);

  const letter7Style = useMemo(() => {
    return {
      ...getStyleValue("textTransform", propTextTransform7),
    };
  }, [propTextTransform7]);

  const letter8Style = useMemo(() => {
    return {
      ...getStyleValue("textTransform", propTextTransform8),
    };
  }, [propTextTransform8]);

  const letter9Style = useMemo(() => {
    return {
      ...getStyleValue("textTransform", propTextTransform9),
    };
  }, [propTextTransform9]);

  return (
    <View style={[styles.row1, row1Style]}>
      <View style={styles.key}>
        <Text style={[styles.letter, styles.iconPosition, letterStyle]}>
          {letter}
        </Text>
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={icon}
        />
      </View>
      <View style={styles.keyShadowBox}>
        <Text style={[styles.letter, styles.iconPosition, letter1Style]}>
          {letter1}
        </Text>
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={icon1}
        />
      </View>
      <View style={styles.keyShadowBox}>
        <Text style={[styles.letter, styles.iconPosition, letter2Style]}>
          {letter2}
        </Text>
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={icon2}
        />
      </View>
      <View style={styles.keyShadowBox}>
        <Text style={[styles.letter, styles.iconPosition, letter3Style]}>
          {letter3}
        </Text>
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={icon3}
        />
      </View>
      <View style={styles.keyShadowBox}>
        <Text style={[styles.letter, styles.iconPosition, letter4Style]}>
          {letter4}
        </Text>
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={icon4}
        />
      </View>
      <View style={styles.keyShadowBox}>
        <Text style={[styles.letter, styles.iconPosition, letter5Style]}>
          {letter5}
        </Text>
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={icon5}
        />
      </View>
      <View style={styles.keyShadowBox}>
        <Text style={[styles.letter, styles.iconPosition, letter6Style]}>
          {letter6}
        </Text>
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={icon6}
        />
      </View>
      <View style={styles.keyShadowBox}>
        <Text style={[styles.letter, styles.iconPosition, letter7Style]}>
          {letter7}
        </Text>
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={icon7}
        />
      </View>
      <View style={styles.keyShadowBox}>
        <Text style={[styles.letter, styles.iconPosition, letter8Style]}>
          {letter8}
        </Text>
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={icon8}
        />
      </View>
      {showKey && (
        <View style={styles.keyShadowBox}>
          <Text style={[styles.letter, styles.iconPosition, letter9Style]}>
            {letter9}
          </Text>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: "50%",
    position: "absolute",
    width: 32,
  },
  letter: {
    marginTop: -22,
    left: 0,
    fontSize: FontSize.textRegularLowercase_size,
    fontFamily: FontFamily.textSmall,
    color: Color.lightText,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 41,
  },
  icon: {
    marginTop: -16,
    marginLeft: -15.75,
    left: "50%",
    height: 32,
    overflow: "hidden",
    display: "none",
  },
  key: {
    height: 42,
    width: 32,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
  },
  keyShadowBox: {
    marginLeft: 6,
    height: 42,
    width: 32,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
  },
  row1: {
    flexDirection: "row",
  },
});

export default Row;
