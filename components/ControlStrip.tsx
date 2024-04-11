import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ControlStrip = () => {
  return (
    <View style={styles.controlStrip}>
      <Image
        style={[styles.iconEmoji, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon--emoji.png")}
      />
      <Image
        style={[styles.iconDictation, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon--dictation.png")}
      />
      <View style={[styles.homeIndicator, styles.keysPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <View style={[styles.keys, styles.keysPosition]}>
        <View style={styles.key}>
          <Text style={[styles.letter, styles.letterTypo]}>123</Text>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <View style={[styles.key1, styles.keyShadowBox]}>
          <Text style={[styles.letter1, styles.letterTypo]}>space</Text>
          <Image
            style={[styles.icon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <View style={[styles.returnKey, styles.keyShadowBox]}>
          <Text style={[styles.letter2, styles.letterTypo]}>return</Text>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    height: 32,
    width: 32,
    top: 67,
    position: "absolute",
  },
  keysPosition: {
    left: 0,
    position: "absolute",
  },
  letterTypo: {
    textAlign: "center",
    color: Color.lightText,
    fontFamily: FontFamily.textSmall,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.textSmall_size,
    top: "50%",
    marginTop: -10,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    marginTop: -16,
    top: "50%",
    left: "50%",
    overflow: "hidden",
    height: 32,
    width: 32,
    position: "absolute",
  },
  keyShadowBox: {
    marginLeft: 6,
    height: 42,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs,
  },
  iconEmoji: {
    left: 26,
  },
  iconDictation: {
    left: 317,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightText,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    top: 90,
    height: 34,
    width: 375,
  },
  letter: {
    left: 31,
  },
  icon: {
    marginLeft: -15.75,
  },
  key: {
    height: 42,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs,
    width: 88,
    backgroundColor: Color.lightSecondaryKeyBackground,
  },
  letter1: {
    left: 69,
  },
  icon1: {
    marginLeft: -16,
  },
  key1: {
    backgroundColor: Color.white,
    width: 182,
  },
  letter2: {
    left: 21,
  },
  returnKey: {
    width: 88,
    backgroundColor: Color.lightSecondaryKeyBackground,
    marginLeft: 6,
  },
  keys: {
    top: 0,
    flexDirection: "row",
    padding: Padding.p_10xs,
  },
  controlStrip: {
    height: 124,
    marginTop: 6,
    width: 375,
  },
});

export default ControlStrip;
