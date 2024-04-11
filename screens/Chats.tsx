import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Search from "../components/Search";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";


const Chats = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();


  return (
    <View style={styles.chats}>
      <View style={[styles.chatsChild, styles.chatsPosition]} />
      <View style={[styles.chatsItem, styles.chatsPosition]} />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Messenger")}
      >
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("../assets/avatar.png")}
        />
        <Text style={[styles.arthurPascua1hContainer, styles.chats1Position]}>
          <Text
            style={[styles.arthurPascua, styles.arthurTypo]}
          >{`Arthur Pascua  `}</Text>
          <Text style={styles.h}>{`1h
`}</Text>
          <Text
            style={[styles.lamborghiniAventador, styles.chats1Typo]}
          >{`Lamborghini Aventador
`}</Text>
          <Text style={[styles.youIMade, styles.home1Typo]}>
            You: I made an offer!
          </Text>
        </Text>
        <Image
          style={[styles.toyotaPicIcon, styles.chatsInnerLayout]}
          contentFit="cover"
          source={require("../assets/toyota-pic7.png")}
        />
      </Pressable>
      <Pressable
        style={styles.pressable1}
        onPress={() => navigation.navigate("Messenger")}
      >
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("../assets/avatar.png")}
        />
        <Text style={[styles.arthurPascua1hContainer, styles.chats1Position]}>
          <Text style={styles.arthurTypo}>
            <Text style={styles.arthurPascua2}>Arthur Pascua</Text>
            <Text style={styles.text}>{`  `}</Text>
          </Text>
          <Text style={styles.h}>{`1h
`}</Text>
          <Text
            style={[styles.lamborghiniAventador, styles.chats1Typo]}
          >{`Lamborghini Aventador
`}</Text>
          <Text style={[styles.youIMade, styles.home1Typo]}>
            You: I made an offer!
          </Text>
        </Text>
        <Image
          style={[styles.toyotaPicIcon, styles.chatsInnerLayout]}
          contentFit="cover"
          source={require("../assets/toyota-pic7.png")}
        />
      </Pressable>
      <Search searchKeywords="Search" propTop={112} />
      <View style={[styles.head, styles.headLayout]}>
        <Text style={[styles.chats1, styles.chats1Typo]}>Chats</Text>
        <Image
          style={[styles.headChild, styles.headLayout]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
      </View>
      <View style={styles.statusBar}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftContainer, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
        <View style={[styles.rightContainer, styles.batteryIconLayout]}>
          <Image
            style={[styles.batteryIcon, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobilesignal.png")}
          />
        </View>
      </View>
      <View style={styles.navbar}>
        <View style={[styles.profile, styles.postPosition]}>
          <Text style={[styles.user, styles.userTypo]}>User</Text>
          <Image
            style={styles.userAltIcon}
            contentFit="cover"
            source={require("../assets/user-alt1.png")}
          />
        </View>
        <View style={[styles.chats2, styles.postPosition]}>
          <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
          <Image
            style={styles.messageCircleIcon}
            contentFit="cover"
            source={require("../assets/messagecircle1.png")}
          />
          <LinearGradient
            style={[styles.chatsInner, styles.chatsInnerLayout]}
            locations={[0, 1]}
            colors={["#fd312c", "#fc6242"]}
          />
        </View>
        <View style={[styles.post, styles.postPosition]}>
          <Text style={[styles.post1, styles.chatTypo]}>Post</Text>
          <Image
            style={styles.addRingIcon}
            contentFit="cover"
            source={require("../assets/add-ring1.png")}
          />
        </View>
        <View style={[styles.activity, styles.postPosition]}>
          <Text style={[styles.activity1, styles.userTypo]}>Activity</Text>
          <Image
            style={[styles.bellIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/bell2.png")}
          />
        </View>
        <View style={[styles.home, styles.postPosition]}>
          <Text style={[styles.home1, styles.timeTypo]}>Home</Text>
          <Image
            style={[styles.homeIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/home1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatsPosition: {
    top: 244,
    position: "absolute",
  },
  chats1Position: {
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  arthurTypo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  chats1Typo: {
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
  },
  home1Typo: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontSize: FontSize.paragraphSMRegular_size,
  },
  chatsInnerLayout: {
    width: 78,
    position: "absolute",
  },
  headLayout: {
    height: 40,
    position: "absolute",
  },
  timeLayout: {
    height: 20,
    width: 54,
  },
  timeTypo: {
    textAlign: "center",
    color: Color.gray900,
    left: "50%",
    fontWeight: "600",
    position: "absolute",
  },
  batteryIconLayout: {
    height: 13,
    position: "absolute",
  },
  postPosition: {
    bottom: "0%",
    top: "0%",
    width: "20.06%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  userTypo: {
    top: 40,
    textAlign: "center",
    color: Color.gray900,
    left: "50%",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraphSMRegular_size,
    position: "absolute",
  },
  chatTypo: {
    color: Color.statusDanger500,
    fontFamily: FontFamily.nunitoBlack,
    fontWeight: "900",
    textAlign: "center",
    left: "50%",
    fontSize: FontSize.paragraphSMRegular_size,
    position: "absolute",
  },
  iconPosition: {
    marginLeft: -12.3,
    height: 24,
    width: 24,
    left: "50%",
    position: "absolute",
  },
  chatsChild: {
    backgroundColor: Color.statusDanger100,
    height: 88,
    left: 0,
    width: 393,
  },
  chatsItem: {
    borderStyle: "solid",
    borderColor: Color.gray200,
    borderTopWidth: 1,
    width: 362,
    height: 1,
    left: 16,
  },
  avatarIcon: {
    top: 10,
    left: 9,
    borderRadius: Border.br_181xl,
    width: 60,
    height: 60,
    position: "absolute",
    overflow: "hidden",
  },
  arthurPascua: {
    fontSize: FontSize.paragraphSMRegular_size,
  },
  h: {
    fontSize: FontSize.paragraphXSLight_size,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.gray400,
  },
  lamborghiniAventador: {
    fontSize: FontSize.paragraphMDRegular_size,
  },
  youIMade: {
    color: Color.gray500,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
  },
  arthurPascua1hContainer: {
    left: 95,
    lineHeight: 24,
    width: 172,
    height: 80,
  },
  toyotaPicIcon: {
    top: 9,
    left: 283,
    borderRadius: Border.br_5xs,
    height: 62,
  },
  pressable: {
    top: 248,
    height: 80,
    width: 361,
    left: 16,
    position: "absolute",
  },
  arthurPascua2: {
    fontSize: FontSize.paragraphMDRegular_size,
  },
  text: {
    fontSize: FontSize.paragraphSMRegular_size,
  },
  pressable1: {
    top: 160,
    height: 80,
    width: 361,
    left: 16,
    position: "absolute",
  },
  chats1: {
    fontSize: FontSize.size_5xl,
    lineHeight: 38,
    color: Color.colorGray_100,
    textAlign: "left",
    top: 0,
    position: "absolute",
    width: 361,
    left: 0,
  },
  headChild: {
    left: 316,
    width: 40,
    top: 0,
  },
  head: {
    top: 56,
    width: 361,
    left: 16,
  },
  notchIcon: {
    height: "70.21%",
    width: "40%",
    top: "-4.26%",
    right: "30%",
    bottom: "34.04%",
    left: "30%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  time: {
    marginLeft: -27,
    fontSize: FontSize.textAutoSuggestion_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.paragraphMDSemibold,
    height: 20,
    width: 54,
    top: 0,
  },
  leftContainer: {
    marginTop: -8.5,
    left: 27,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  batteryIcon: {
    marginLeft: 11.3,
    width: 27,
    left: "50%",
    top: 0,
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  mobileSignalIcon: {
    marginLeft: -38.7,
    top: 1,
    width: 18,
    height: 12,
    left: "50%",
    position: "absolute",
  },
  rightContainer: {
    marginTop: -4.5,
    right: 27,
    width: 77,
    top: "50%",
    overflow: "hidden",
  },
  statusBar: {
    left: 2,
    width: 390,
    height: 47,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  user: {
    marginLeft: -13.5,
  },
  userAltIcon: {
    marginLeft: -12.5,
    height: 24,
    width: 24,
    top: 15,
    left: "50%",
    position: "absolute",
  },
  profile: {
    right: "0%",
    left: "79.94%",
    borderTopRightRadius: Border.br_9xl,
    borderBottomRightRadius: Border.br_9xl,
  },
  chat: {
    top: 46,
    marginLeft: -15.9,
  },
  messageCircleIcon: {
    top: 13,
    width: 32,
    height: 32,
    marginLeft: -15.9,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  chatsInner: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    height: 4,
    backgroundColor: Color.zonesso3,
    top: 0,
    left: 0,
  },
  chats2: {
    right: "20.06%",
    left: "59.88%",
  },
  post1: {
    marginLeft: -13.3,
    top: 54,
  },
  addRingIcon: {
    marginLeft: -24.3,
    top: 5,
    width: 48,
    height: 48,
    left: "50%",
    position: "absolute",
  },
  post: {
    right: "40.12%",
    left: "39.82%",
  },
  activity1: {
    marginLeft: -21.3,
  },
  bellIcon: {
    top: 15,
    marginLeft: -12.3,
  },
  activity: {
    right: "60.03%",
    left: "19.91%",
  },
  home1: {
    marginLeft: -17.3,
    top: 41,
    fontFamily: FontFamily.nunitoSemiBold,
    fontSize: FontSize.paragraphSMRegular_size,
  },
  homeIcon: {
    top: 16,
  },
  home: {
    right: "79.94%",
    left: "0%",
    borderTopLeftRadius: Border.br_9xl,
    borderBottomLeftRadius: Border.br_9xl,
  },
  navbar: {
    top: 777,
    borderRadius: Border.br_9xl,
    width: 392,
    height: 74,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  chats: {
    borderRadius: Border.br_13xl,
    height: 852,
    overflow: "hidden",
    width: 393,
    backgroundColor: Color.white,
  },
});

export default Chats;
