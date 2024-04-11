import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Showroom1 from "./Showroom1";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ListingDescription = () => {
  return (
    <View style={[styles.listingDescription, styles.statusBarBg]}>
      <View style={styles.body}>
        <View style={styles.report}>
          <Image
            style={[styles.reportChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-211.png")}
          />
          <Text style={[styles.reportThisAd, styles.reportThisAdFlexBox]}>
            Report this Ad
          </Text>
        </View>
        <View style={styles.similarAds}>
          <Text style={[styles.similarAds1, styles.lamborghiniFlexBox]}>
            Similar Ads
          </Text>
          <View style={[styles.plates, styles.platesPosition]}>
            <Showroom1
              toyotaPic={require("../assets/toyota-pic5.png")}
              aED99000="AED 99,000"
              lamborghiniAventadorV1="Lamborghini • Aventador • V1. "
              km12kmAway="2023 • 0 km          1.2km away"
              lamborghiniAventadorLeft={328}
              propWidth={139}
            />
            <Showroom1
              toyotaPic={require("../assets/toyota-pic5.png")}
              aED99000="AED 99,000"
              lamborghiniAventadorV1="Lamborghini • Aventador • V1. "
              km12kmAway="2023 • 0 km          1.2km away"
              lamborghiniAventadorLeft={492}
              propWidth={139}
            />
            <Showroom1
              toyotaPic={require("../assets/toyota-pic5.png")}
              aED99000="AED 99,000"
              lamborghiniAventadorV1="Lamborghini • Aventador • V1. "
              km12kmAway="2023 • 0 km                       1.2km away"
              lamborghiniAventadorLeft={164}
              propWidth={139}
            />
            <Showroom1
              toyotaPic={require("../assets/toyota-pic5.png")}
              aED99000="AED 99,000"
              lamborghiniAventadorV1="Lamborghini • Aventador • V1. "
              km12kmAway="2023 • 0 km                        1.2km away"
              lamborghiniAventadorLeft={0}
              lamborghiniAventadorTop={-1}
              propWidth={143}
            />
          </View>
        </View>
        <View style={[styles.postedBy, styles.postedByPosition]}>
          <Text style={[styles.similarAds1, styles.lamborghiniFlexBox]}>
            Posted By
          </Text>
          <Text style={styles.toyotaMotors}>Toyota Motors</Text>
          <Text style={styles.showroom}>Showroom</Text>
          <Image
            style={[styles.postedByChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-28.png")}
          />
          <Image
            style={[styles.image2Icon, styles.postedOnLayout]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
        </View>
        <View style={[styles.location, styles.postedByPosition]}>
          <Text style={[styles.location1, styles.lamborghiniFlexBox]}>
            Location
          </Text>
          <Image
            style={[styles.locationChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-28.png")}
          />
          <Text style={[styles.deiraDubaiUnited, styles.text2Layout]}>
            Deira, Dubai, United Arab Emirates
          </Text>
          <Image
            style={[styles.locationIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/location.png")}
          />
          <Image
            style={[styles.image1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
        </View>
        <View style={[styles.description, styles.postedByPosition]}>
          <Text style={[styles.similarAds1, styles.lamborghiniFlexBox]}>
            Description
          </Text>
          <Text style={[styles.lamborghiniAventadorSvj, styles.trimTypo]}>
            2020 LAMBORGHINI AVENTADOR SVJ ONE ONLY 600KM
          </Text>
          <Image
            style={[styles.descriptionChild, styles.detailsChildLayout]}
            contentFit="cover"
            source={require("../assets/line-28.png")}
          />
        </View>
        <View style={styles.details}>
          <Text style={[styles.aed99000, styles.aed99000Layout]}>
            AED 99,000
          </Text>
          <Text style={[styles.lamborghiniAventador, styles.callTypo]}>
            Lamborghini Aventador
          </Text>
          <Text style={[styles.details1, styles.lamborghiniFlexBox]}>
            Details
          </Text>
          <Text style={[styles.showMoreDetails, styles.detailsTypo]}>
            Show more details
          </Text>
          <Text style={[styles.trim, styles.jPosition]}>Trim</Text>
          <View style={styles.detailsChild} />
          <View style={[styles.detailsItem, styles.detailsLayout]} />
          <Text style={[styles.year, styles.yearPosition]}>Year</Text>
          <View style={[styles.detailsInner, styles.detailsLayout]} />
          <Text style={[styles.kilometers, styles.text1Position]}>
            Kilometers
          </Text>
          <Image
            style={[styles.lineIcon, styles.detailsChildLayout]}
            contentFit="cover"
            source={require("../assets/line-211.png")}
          />
          <Text style={[styles.regionalSpecs, styles.aed99000Layout]}>
            Regional Specs
          </Text>
          <View style={[styles.lineView, styles.detailsLayout]} />
          <Text style={[styles.doors, styles.doorPosition]}>Doors</Text>
          <View style={[styles.detailsChild1, styles.detailsLayout]} />
          <Text style={[styles.postedOn, styles.trimTypo]}>Posted On</Text>
          <Text style={[styles.j, styles.textTypo]}>J</Text>
          <Text style={[styles.text, styles.textTypo]}>2021</Text>
          <Text style={[styles.text1, styles.textTypo]}>600</Text>
          <Text style={[styles.europianSpecs, styles.textTypo]}>
            Europian Specs
          </Text>
          <Text style={[styles.door, styles.textTypo]}>2 Door</Text>
          <Text style={[styles.march232024, styles.textTypo]}>
            March 23, 2024
          </Text>
          <Image
            style={[styles.detailsChild2, styles.detailsChildLayout]}
            contentFit="cover"
            source={require("../assets/line-211.png")}
          />
          <Image
            style={[styles.detailsChild3, styles.detailsChildLayout]}
            contentFit="cover"
            source={require("../assets/line-28.png")}
          />
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.navbarItemBg]}
            locations={[0, 0.25, 0.5, 0.75, 1]}
            colors={["#f06100", "#f04900", "#f03000", "#f00030", "#f0006d"]}
          />
          <Text style={[styles.premium, styles.callFlexBox]}>Premium</Text>
        </View>
        <View style={[styles.head, styles.headLayout]}>
          <Image
            style={[styles.toyotaPicIcon, styles.headLayout]}
            contentFit="cover"
            source={require("../assets/toyota-pic6.png")}
          />
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
          <Image
            style={[styles.share2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/share2.png")}
          />
          <Image
            style={styles.headChild}
            contentFit="cover"
            source={require("../assets/rectangle-4201.png")}
          />
          <Image
            style={[styles.headItem, styles.headItemLayout]}
            contentFit="cover"
            source={require("../assets/vector-91.png")}
          />
          <View style={[styles.rectangleParent, styles.headInnerLayout]}>
            <View style={[styles.frameChild, styles.headInnerLayout]} />
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image.png")}
            />
            <Text style={[styles.text2, styles.callFlexBox]}>1 / 20</Text>
          </View>
          <Image
            style={[styles.headInner, styles.headInnerLayout]}
            contentFit="cover"
            source={require("../assets/frame-6.png")}
          />
        </View>
        <View style={styles.navbar}>
          <View style={[styles.navbarChild, styles.chatPosition]} />
          <LinearGradient
            style={[styles.navbarItem, styles.callPosition]}
            locations={[0, 0.25, 0.5, 0.75, 1]}
            colors={["#f06100", "#f04900", "#f03000", "#f00030", "#f0006d"]}
          />
          <Text style={[styles.chat, styles.chatPosition]}>Chat</Text>
          <Text style={[styles.call, styles.callPosition]}>Call</Text>
        </View>
      </View>
      <View style={[styles.statusBar, styles.statusBarBg]}>
        <Image
          style={[styles.notchIcon, styles.headItemLayout]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftContainer, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarBg: {
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  childLayout: {
    height: 0,
    width: 361,
    left: 0,
    position: "absolute",
  },
  reportThisAdFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    height: 24,
    fontSize: FontSize.paragraphMDRegular_size,
    width: 361,
    position: "absolute",
  },
  lamborghiniFlexBox: {
    textAlign: "left",
    alignItems: "center",
    display: "flex",
  },
  platesPosition: {
    top: 33,
    left: 1,
    position: "absolute",
  },
  postedByPosition: {
    width: 361,
    left: 16,
    position: "absolute",
  },
  postedOnLayout: {
    width: 78,
    position: "absolute",
  },
  text2Layout: {
    height: 16,
    position: "absolute",
  },
  iconPosition: {
    left: 8,
    position: "absolute",
  },
  trimTypo: {
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
  },
  detailsChildLayout: {
    maxHeight: "100%",
    width: 361,
    position: "absolute",
  },
  aed99000Layout: {
    width: 173,
    textAlign: "left",
    height: 24,
    alignItems: "center",
    display: "flex",
    left: 16,
    position: "absolute",
  },
  callTypo: {
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
  },
  detailsTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  jPosition: {
    top: 104,
    width: 78,
  },
  detailsLayout: {
    height: 2,
    width: 363,
    borderTopWidth: 2,
    left: 15,
    borderColor: Color.gray200,
    borderStyle: "solid",
    position: "absolute",
  },
  yearPosition: {
    top: 136,
    width: 78,
  },
  text1Position: {
    top: 168,
    width: 78,
  },
  doorPosition: {
    top: 232,
    width: 78,
  },
  textTypo: {
    left: 205,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
    height: 24,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.paragraphMDRegular_size,
    position: "absolute",
  },
  navbarItemBg: {
    backgroundColor: Color.zonesso3,
    opacity: 0.9,
  },
  callFlexBox: {
    color: Color.white,
    lineHeight: 38,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  headLayout: {
    height: 248,
    width: 392,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    top: 16,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  headItemLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  headInnerLayout: {
    width: 52,
    height: 16,
    position: "absolute",
  },
  chatPosition: {
    height: 40,
    top: 16,
    position: "absolute",
  },
  callPosition: {
    left: 204,
    height: 40,
    top: 16,
    width: 172,
    position: "absolute",
  },
  timeLayout: {
    height: 20,
    width: 54,
    position: "absolute",
  },
  batteryIconLayout: {
    height: 13,
    position: "absolute",
  },
  reportChild: {
    top: 0,
  },
  reportThisAd: {
    color: Color.statusDanger600,
    height: 24,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    left: 1,
    top: 12,
  },
  report: {
    top: 1308,
    width: 362,
    height: 36,
    left: 16,
    position: "absolute",
  },
  similarAds1: {
    width: 172,
    color: Color.gray800,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    height: 24,
    position: "absolute",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    top: 0,
    left: 0,
  },
  plates: {
    width: 376,
    height: 182,
  },
  similarAds: {
    top: 1089,
    width: 377,
    height: 215,
    left: 16,
    position: "absolute",
  },
  toyotaMotors: {
    width: 267,
    left: 94,
    top: 32,
    textAlign: "left",
    color: Color.gray800,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.textSmall_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  showroom: {
    fontFamily: FontFamily.nunitoRegular,
    top: 56,
    width: 267,
    left: 94,
    textAlign: "left",
    color: Color.gray800,
    height: 24,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.paragraphMDRegular_size,
    position: "absolute",
  },
  postedByChild: {
    top: 124,
  },
  image2Icon: {
    height: 78,
    borderRadius: Border.br_5xs,
    top: 32,
    left: 0,
  },
  postedBy: {
    top: 952,
    height: 124,
  },
  location1: {
    width: 172,
    color: Color.gray800,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    height: 24,
    position: "absolute",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    left: 1,
    top: 0,
  },
  locationChild: {
    top: 236,
  },
  deiraDubaiUnited: {
    left: 24,
    color: Color.gray600,
    width: 283,
    top: 32,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.paragraphMDRegular_size,
  },
  locationIcon: {
    top: 34,
    width: 9,
    height: 11,
  },
  image1Icon: {
    width: 344,
    height: 168,
    top: 56,
    left: 8,
  },
  location: {
    top: 704,
    height: 236,
  },
  lamborghiniAventadorSvj: {
    width: 360,
    height: 48,
    top: 33,
    left: 1,
    position: "absolute",
    textAlign: "left",
    alignItems: "center",
    display: "flex",
  },
  descriptionChild: {
    top: 92,
    left: 0,
  },
  description: {
    top: 600,
    height: 92,
  },
  aed99000: {
    fontSize: FontSize.size_xl,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    top: 0,
  },
  lamborghiniAventador: {
    top: 24,
    width: 188,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.gray800,
    fontSize: FontSize.textSmall_size,
    height: 24,
    position: "absolute",
    left: 16,
  },
  details1: {
    top: 72,
    left: 17,
    width: 77,
    color: Color.gray800,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    height: 24,
    position: "absolute",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  showMoreDetails: {
    marginLeft: -180.5,
    top: 296,
    left: "50%",
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.paragraphMDRegular_size,
    width: 361,
    position: "absolute",
  },
  trim: {
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    height: 24,
    left: 16,
    position: "absolute",
  },
  detailsChild: {
    top: 60,
    left: -2,
    borderTopWidth: 4,
    width: 397,
    height: 4,
    borderColor: Color.gray200,
    borderStyle: "solid",
    position: "absolute",
  },
  detailsItem: {
    top: 132,
  },
  year: {
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    height: 24,
    left: 16,
    position: "absolute",
  },
  detailsInner: {
    top: 164,
  },
  kilometers: {
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    height: 24,
    left: 16,
    position: "absolute",
  },
  lineIcon: {
    top: 196,
    left: 16,
  },
  regionalSpecs: {
    top: 200,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
  },
  lineView: {
    top: 228,
  },
  doors: {
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    height: 24,
    left: 16,
    position: "absolute",
  },
  detailsChild1: {
    top: 260,
  },
  postedOn: {
    top: 264,
    width: 78,
    position: "absolute",
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    height: 24,
    left: 16,
  },
  j: {
    top: 104,
    width: 78,
  },
  text: {
    top: 136,
    width: 78,
  },
  text1: {
    top: 168,
    width: 78,
  },
  europianSpecs: {
    top: 200,
    width: 172,
  },
  door: {
    top: 232,
    width: 78,
  },
  march232024: {
    top: 264,
    width: 172,
  },
  detailsChild2: {
    top: 292,
    left: 16,
  },
  detailsChild3: {
    top: 324,
    left: 16,
  },
  rectangleLineargradient: {
    height: 23,
    width: 94,
    left: 150,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_9xs,
  },
  premium: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    height: 23,
    width: 94,
    left: 150,
    top: 0,
    position: "absolute",
    fontSize: FontSize.paragraphMDRegular_size,
  },
  details: {
    height: 324,
    top: 264,
    left: 0,
    position: "absolute",
    width: 393,
  },
  toyotaPicIcon: {
    borderRadius: Border.br_5xs,
    left: 0,
  },
  heartIcon: {
    left: 346,
  },
  share2Icon: {
    left: 300,
  },
  headChild: {
    left: 20,
    borderRadius: Border.br_8xs,
    width: 32,
    height: 32,
    top: 12,
    position: "absolute",
  },
  headItem: {
    height: "6.69%",
    width: "3.83%",
    top: "8.1%",
    right: "89.03%",
    bottom: "85.2%",
    left: "7.14%",
  },
  frameChild: {
    backgroundColor: "#494949",
    borderRadius: Border.br_9xs,
    top: 0,
    left: 0,
  },
  imageIcon: {
    top: 2,
    left: 4,
    width: 12,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  text2: {
    left: 19,
    fontSize: FontSize.paragraphXSLight_size,
    width: 28,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    height: 16,
    position: "absolute",
    top: 0,
  },
  rectangleParent: {
    left: 28,
    top: 224,
    width: 52,
  },
  headInner: {
    left: 170,
    top: 224,
    width: 52,
  },
  head: {
    left: 1,
  },
  navbarChild: {
    backgroundColor: Color.statusDanger100,
    borderColor: Color.statusDanger500,
    borderWidth: 0.5,
    height: 40,
    left: 15,
    borderStyle: "solid",
    width: 173,
    borderRadius: Border.br_5xs,
  },
  navbarItem: {
    backgroundColor: Color.zonesso3,
    opacity: 0.9,
    borderRadius: Border.br_5xs,
  },
  chat: {
    color: Color.statusDanger500,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    lineHeight: 38,
    height: 40,
    width: 172,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.paragraphMDRegular_size,
    left: 16,
  },
  call: {
    color: Color.white,
    lineHeight: 38,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    fontSize: FontSize.paragraphMDRegular_size,
  },
  navbar: {
    top: 720,
    borderRadius: Border.br_9xl,
    height: 74,
    width: 392,
    left: 1,
    position: "absolute",
    backgroundColor: Color.white,
  },
  body: {
    top: 48,
    height: 736,
    left: 0,
    position: "absolute",
    width: 393,
  },
  notchIcon: {
    height: "70.21%",
    width: "40%",
    top: "-4.26%",
    right: "30%",
    bottom: "34.04%",
    left: "30%",
    display: "none",
  },
  time: {
    marginLeft: -27,
    fontSize: FontSize.textAutoSuggestion_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.paragraphMDSemibold,
    color: Color.gray900,
    fontWeight: "600",
    width: 54,
    left: "50%",
    textAlign: "center",
    top: 0,
  },
  leftContainer: {
    marginTop: -8.5,
    left: 27,
    top: "50%",
    overflow: "hidden",
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
    top: "50%",
    overflow: "hidden",
    width: 77,
  },
  statusBar: {
    left: 2,
    width: 390,
    height: 47,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  listingDescription: {
    borderRadius: Border.br_13xl,
    height: 852,
    overflow: "hidden",
    width: 393,
  },
});

export default ListingDescription;
