import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Showroom1 from "../components/Showroom1";
import Showroom from "../components/Showroom";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.body}>
        <View style={[styles.search, styles.searchLayout]}>
          <Showroom1
            toyotaPic={require("../assets/toyota-pic.png")}
            aED99000="AED 99,000"
            lamborghiniAventadorV1="Lamborghini • Aventador • V1. "
            km12kmAway="2023 • 0 km                       1.2km away"
          />
          <Showroom />
          <Showroom1
            toyotaPic={require("../assets/toyota-pic2.png")}
            aED99000="AED 15,000"
            lamborghiniAventadorV1="Number Plate • Dubai Plate • "
            km12kmAway="O 31141                            1.2km away"
            lamborghiniAventadorLeft={328}
            propWidth={139}
          />
        </View>
        <View style={[styles.plates, styles.salesPosition]}>
          <Showroom1
            toyotaPic={require("../assets/toyota-pic.png")}
            aED99000="AED 99,000"
            lamborghiniAventadorV1="Lamborghini • Aventador • V1. "
            km12kmAway="2023 • 0 km          1.2km away"
            lamborghiniAventadorLeft={328}
            propWidth={139}
          />
          <Showroom1
            toyotaPic={require("../assets/toyota-pic.png")}
            aED99000="AED 99,000"
            lamborghiniAventadorV1="Lamborghini • Aventador • V1. "
            km12kmAway="2023 • 0 km          1.2km away"
            lamborghiniAventadorLeft={492}
            propWidth={139}
          />
          <Showroom1
            toyotaPic={require("../assets/toyota-pic.png")}
            aED99000="AED 99,000"
            lamborghiniAventadorV1="Lamborghini • Aventador • V1. "
            km12kmAway="2023 • 0 km                       1.2km away"
            lamborghiniAventadorLeft={164}
            propWidth={139}
          />
          <Showroom1
            toyotaPic={require("../assets/toyota-pic.png")}
            aED99000="AED 99,000"
            lamborghiniAventadorV1="Lamborghini • Aventador • V1. "
            km12kmAway="2023 • 0 km                        1.2km away"
            lamborghiniAventadorLeft={0}
            lamborghiniAventadorTop={-1}
            propWidth={143}
          />
        </View>
        <View style={[styles.sales, styles.salesPosition]}>
          <Showroom1
            toyotaPic={require("../assets/toyota-pic2.png")}
            aED99000="AED 15,000"
            lamborghiniAventadorV1="Number Plate • Dubai Plate • "
            km12kmAway="O 31141                            1.2km away"
            lamborghiniAventadorLeft={492}
            propWidth={139}
          />
          <Showroom1
            toyotaPic={require("../assets/toyota-pic2.png")}
            aED99000="AED 15,000"
            lamborghiniAventadorV1="Number Plate • Dubai Plate • "
            km12kmAway="O 31141                            1.2km away"
            lamborghiniAventadorLeft={328}
            propWidth={139}
          />
          <Showroom1
            toyotaPic={require("../assets/toyota-pic2.png")}
            aED99000="AED 15,000"
            lamborghiniAventadorV1="Number Plate • Dubai Plate • "
            km12kmAway="O 31141                            1.2km away"
            lamborghiniAventadorLeft={164}
            propWidth={139}
          />
          <Showroom1
            toyotaPic={require("../assets/toyota-pic2.png")}
            aED99000="AED 15,000"
            lamborghiniAventadorV1="Number Plate • Dubai Plate • "
            km12kmAway="O 31141                            1.2km away"
            lamborghiniAventadorLeft={0}
            lamborghiniAventadorTop={-1}
            propWidth={139}
          />
        </View>
        <View style={[styles.topShowroomsViewAll, styles.topViewLayout]}>
          <Text style={styles.topSales}>Top Sales</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>
        <View style={[styles.topShowroomsViewAll1, styles.topViewLayout]}>
          <Text style={styles.topPlateNumbers}>Top Plate Numbers</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>
        <View style={[styles.topShowroomsViewAll2, styles.topViewLayout]}>
          <Text style={styles.topPlateNumbers}>Previous Search</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>
        <View style={[styles.showroom, styles.searchLayout]}>
          <Showroom propLeft={492} />
          <Showroom propLeft={328} />
          <Showroom propLeft={164} />
          <Showroom />
        </View>
        <View style={[styles.topShowroomsViewAll3, styles.topViewLayout]}>
          <Text style={styles.topShowrooms}>Top Showrooms</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>
        <Image
          style={[styles.slideIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/slide.png")}
        />
        <View style={[styles.mainCategories, styles.navbarLayout]}>
          <View style={[styles.boats, styles.boatsLayout]}>
            <View style={[styles.boatsChild, styles.childShadowBox]} />
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/9-7.png")}
            />
            <Text style={[styles.boats1, styles.boats1Typo]}>Boats</Text>
          </View>
          <View style={styles.carRecovery}>
            <View style={[styles.carRecoveryChild, styles.childShadowBox]} />
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/8-1.png")}
            />
            <Text style={[styles.carRecovery1, styles.boats1Typo]}>
              Car Recovery
            </Text>
          </View>
          <View style={[styles.carWash, styles.boatsLayout]}>
            <View style={[styles.carWashChild, styles.childShadowBox]} />
            <Image
              style={[styles.icon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/7-1.png")}
            />
            <Text style={[styles.carWash1, styles.carTypo]}>Car Wash</Text>
          </View>
          <View style={[styles.carService, styles.motorsLayout]}>
            <View style={[styles.carServiceChild, styles.childShadowBox]} />
            <Image
              style={[styles.icon3, styles.iconPosition3]}
              contentFit="cover"
              source={require("../assets/6-1.png")}
            />
            <Text style={[styles.carService1, styles.carTypo]}>
              Car Service
            </Text>
          </View>
          <View style={[styles.numberPlates, styles.motorsLayout]}>
            <View style={[styles.numberPlatesChild, styles.childShadowBox]} />
            <Image
              style={[styles.icon4, styles.iconPosition3]}
              contentFit="cover"
              source={require("../assets/5-1.png")}
            />
            <Text style={[styles.numberPlates1, styles.carTypo]}>
              Number Plates
            </Text>
          </View>
          <View style={[styles.partsAndAccesories, styles.motors1Position]}>
            <View
              style={[styles.partsAndAccesoriesChild, styles.childShadowBox]}
            />
            <Image
              style={[styles.icon5, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/4-73114451.png")}
            />
          </View>
          <Text
            style={[styles.partsAccessories, styles.boats1Typo]}
          >{`Parts & Accessories`}</Text>
          <View style={[styles.motors, styles.motorsLayout]}>
            <View style={[styles.motorsChild, styles.childShadowBox]} />
            <Image
              style={[styles.icon6, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/3-1.png")}
            />
            <Text style={[styles.showrooms, styles.motors2Typo]}>
              Showrooms
            </Text>
          </View>
          <View style={[styles.motorbikes, styles.motorsLayout]}>
            <View style={[styles.motorbikesChild, styles.childShadowBox]} />
            <Image
              style={[styles.icon7, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/2-1.png")}
            />
            <Text style={[styles.motorbikes1, styles.motors2Typo]}>
              Motorbikes
            </Text>
          </View>
          <View style={[styles.motors1, styles.motors1Position]}>
            <View style={[styles.motorsItem, styles.childShadowBox]} />
            <Image
              style={[styles.icon8, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/1-1.png")}
            />
            <Image
              style={[styles.cinemxticxlly2711Icon, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/cinemxticxlly--271-1.png")}
            />
            <Text style={[styles.motors2, styles.motors2Typo]}>Motors</Text>
          </View>
        </View>
      </View>
      <View style={[styles.header, styles.topViewLayout]}>
        <Image
          style={[styles.searchDuotoneIcon, styles.searchDuotoneIconLayout]}
          contentFit="cover"
          source={require("../assets/search-duotone.png")}
        />
        <View style={styles.iconexfilledlocationParent}>
          <Image
            style={styles.searchDuotoneIconLayout}
            contentFit="cover"
            source={require("../assets/iconexfilledlocation.png")}
          />
          <Text style={styles.dubai}>Dubai</Text>
          <Image
            style={styles.arrowDropDownIcon}
            contentFit="cover"
            source={require("../assets/arrow-drop-down.png")}
          />
        </View>
      </View>
      <View style={styles.statusBar}>
        <Image
          style={[styles.notchIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
      </View>
      <View style={[styles.navbar, styles.navbarLayout]}>
        <View style={[styles.profile, styles.postPosition]}>
          <Text style={[styles.user, styles.userTypo]}>User</Text>
          <Image
            style={[styles.userAltIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/user-alt.png")}
          />
        </View>
        <View style={[styles.chats, styles.postPosition]}>
          <Text style={[styles.chat, styles.userTypo]}>Chat</Text>
          <Image
            style={[styles.messageCircleIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/messagecircle.png")}
          />
        </View>
        <View style={[styles.post, styles.postPosition]}>
          <Text style={[styles.post1, styles.post1Typo]}>Post</Text>
          <Image
            style={styles.addRingIcon}
            contentFit="cover"
            source={require("../assets/add-ring.png")}
          />
        </View>
        <View style={[styles.activity, styles.postPosition]}>
          <Text style={[styles.activity1, styles.userTypo]}>Activity</Text>
          <Image
            style={[styles.bellIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/bell.png")}
          />
        </View>
        <View style={[styles.home1, styles.postPosition]}>
          <Text style={[styles.home2, styles.post1Typo]}>Home</Text>
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <LinearGradient
            style={styles.homeChild}
            locations={[0, 1]}
            colors={["#fd312c", "#fc6242"]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 160,
    width: 377,
    position: "absolute",
  },
  salesPosition: {
    width: 376,
    left: 16,
    position: "absolute",
  },
  topViewLayout: {
    height: 24,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  navbarLayout: {
    width: 392,
    position: "absolute",
  },
  boatsLayout: {
    height: 88,
    width: 92,
    position: "absolute",
  },
  childShadowBox: {
    width: 116,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 88,
    borderRadius: Border.br_5xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: 80,
    width: 80,
  },
  boats1Typo: {
    height: 8,
    fontSize: FontSize.paragraphXSLight_size,
    color: Color.gray900,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  carTypo: {
    top: 72,
    height: 8,
    color: Color.gray900,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraphXSLight_size,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  motorsLayout: {
    height: 92,
    width: 92,
    position: "absolute",
  },
  iconPosition3: {
    marginTop: -46,
    top: "50%",
    height: 80,
    width: 80,
    position: "absolute",
  },
  motors1Position: {
    left: 14,
    position: "absolute",
  },
  iconPosition2: {
    left: 20,
    height: 80,
    width: 80,
    position: "absolute",
  },
  motors2Typo: {
    top: 69,
    height: 8,
    color: Color.gray900,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraphXSLight_size,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  iconPosition1: {
    display: "none",
    position: "absolute",
  },
  searchDuotoneIconLayout: {
    width: 24,
    height: 24,
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
  postPosition: {
    backgroundColor: Color.colorGray_200,
    bottom: "0%",
    top: "0%",
    width: "20.06%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  userTypo: {
    top: 40,
    color: Color.gray900,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    left: "50%",
    textAlign: "center",
    fontSize: FontSize.paragraphSMRegular_size,
    position: "absolute",
  },
  iconPosition: {
    top: 15,
    width: 24,
    left: "50%",
    height: 24,
    position: "absolute",
  },
  post1Typo: {
    fontFamily: FontFamily.nunitoBlack,
    fontWeight: "900",
    left: "50%",
    textAlign: "center",
    color: Color.statusDanger500,
    fontSize: FontSize.paragraphSMRegular_size,
    position: "absolute",
  },
  search: {
    top: 1216,
    left: 17,
  },
  plates: {
    top: 729,
    height: 182,
  },
  sales: {
    top: 969,
    height: 183,
  },
  topSales: {
    width: 123,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.gray800,
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    fontSize: FontSize.textSmall_size,
    top: 0,
    left: 0,
    position: "absolute",
  },
  viewAll: {
    left: 314,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    textAlign: "center",
    color: Color.statusDanger500,
    fontSize: FontSize.paragraphSMRegular_size,
    top: 3,
    position: "absolute",
  },
  topShowroomsViewAll: {
    top: 696,
    width: 359,
    height: 24,
    left: 18,
  },
  topPlateNumbers: {
    width: 168,
    top: 1,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.gray800,
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    fontSize: FontSize.textSmall_size,
    left: 0,
    position: "absolute",
  },
  topShowroomsViewAll1: {
    top: 928,
    width: 359,
    height: 24,
    left: 17,
  },
  topShowroomsViewAll2: {
    top: 1168,
    width: 359,
    height: 24,
    left: 16,
  },
  showroom: {
    top: 520,
    left: 16,
  },
  topShowrooms: {
    justifyContent: "center",
    left: 2,
    textAlign: "center",
    width: 123,
    alignItems: "center",
    display: "flex",
    color: Color.gray800,
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    fontSize: FontSize.textSmall_size,
    top: 0,
    position: "absolute",
  },
  topShowroomsViewAll3: {
    top: 488,
    width: 359,
    height: 24,
    left: 17,
  },
  slideIcon: {
    top: 327,
    right: 17,
    bottom: 209,
    borderRadius: Border.br_5xs,
    left: 16,
    position: "absolute",
  },
  boatsChild: {
    left: -20,
    top: -12,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  icon: {
    right: 14,
    bottom: 20,
    position: "absolute",
  },
  boats1: {
    top: 60,
    left: 24,
    width: 27,
  },
  boats: {
    left: 281,
    top: 219,
  },
  carRecoveryChild: {
    left: -14,
    top: -12,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  icon1: {
    marginLeft: -46.5,
    bottom: 7,
    left: "50%",
    position: "absolute",
  },
  carRecovery1: {
    top: 61,
    left: 13,
    width: 62,
  },
  carRecovery: {
    left: 153,
    width: 101,
    height: 76,
    top: 219,
    position: "absolute",
  },
  carWashChild: {
    top: 0,
    left: 0,
  },
  icon2: {
    bottom: 8,
    left: 18,
    position: "absolute",
  },
  carWash1: {
    left: 35,
    width: 46,
  },
  carWash: {
    top: 208,
    left: 16,
  },
  carServiceChild: {
    top: 0,
    left: 0,
  },
  icon3: {
    right: -6,
    top: "50%",
  },
  carService1: {
    left: 32,
    width: 52,
  },
  carService: {
    left: 261,
    top: 104,
  },
  numberPlatesChild: {
    marginLeft: -66,
    left: "50%",
    top: 0,
  },
  icon4: {
    marginLeft: -48,
    top: "50%",
    left: "50%",
  },
  numberPlates1: {
    left: 3,
    width: 69,
  },
  numberPlates: {
    left: 158,
    top: 104,
  },
  partsAndAccesoriesChild: {
    top: -7,
    left: 2,
  },
  icon5: {
    marginTop: -47.5,
    top: "50%",
  },
  partsAndAccesories: {
    top: 111,
    width: 85,
    height: 81,
  },
  partsAccessories: {
    top: 176,
    left: 29,
    width: 90,
  },
  motorsChild: {
    left: -39,
    top: -3,
  },
  icon6: {
    right: 33,
    top: -3,
    position: "absolute",
  },
  showrooms: {
    left: -9,
    width: 56,
  },
  motors: {
    right: 0,
    top: 3,
  },
  motorbikesChild: {
    marginLeft: -58,
    top: -3,
    left: "50%",
  },
  icon7: {
    marginLeft: -40,
    top: -3,
    left: "50%",
    position: "absolute",
  },
  motorbikes1: {
    marginLeft: -26,
    width: 51,
    left: "50%",
  },
  motorbikes: {
    marginLeft: -46,
    left: "50%",
    top: 3,
  },
  motorsItem: {
    top: -3,
    left: 2,
  },
  icon8: {
    right: 19,
    top: -3,
    height: 80,
    width: 80,
    borderRadius: Border.br_5xs,
  },
  cinemxticxlly2711Icon: {
    top: 1,
  },
  motors2: {
    left: 43,
    width: 33,
  },
  motors1: {
    width: 118,
    height: 85,
    top: 3,
  },
  mainCategories: {
    marginLeft: -197,
    height: 304,
    left: "50%",
    top: 0,
    overflow: "hidden",
  },
  body: {
    width: 394,
    height: 673,
    left: 0,
    top: 104,
    position: "absolute",
  },
  searchDuotoneIcon: {
    left: 323,
    top: 0,
    position: "absolute",
  },
  dubai: {
    fontSize: FontSize.paragraphMDRegular_size,
    lineHeight: 20,
    color: Color.lightText,
    marginLeft: 4,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  arrowDropDownIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  iconexfilledlocationParent: {
    flexDirection: "row",
    alignItems: "flex-end",
    top: 0,
    left: 0,
    position: "absolute",
  },
  header: {
    top: 56,
    width: 360,
    left: 17,
  },
  notchIcon: {
    height: "70.21%",
    width: "40%",
    top: "-4.26%",
    right: "30%",
    bottom: "34.04%",
    left: "30%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  time: {
    marginLeft: -27,
    fontSize: FontSize.textAutoSuggestion_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.paragraphMDSemibold,
    color: Color.gray900,
    width: 54,
    fontWeight: "600",
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
    width: 18,
    height: 12,
    left: "50%",
    top: 1,
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
    width: 390,
    height: 47,
    left: 2,
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
  },
  profile: {
    right: "-0.31%",
    left: "80.25%",
    borderTopRightRadius: Border.br_9xl,
    borderBottomRightRadius: Border.br_9xl,
  },
  chat: {
    marginLeft: -12.9,
  },
  messageCircleIcon: {
    marginLeft: -11.9,
    overflow: "hidden",
  },
  chats: {
    right: "19.75%",
    left: "60.18%",
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
    right: "39.82%",
    left: "40.12%",
  },
  activity1: {
    marginLeft: -21.3,
  },
  bellIcon: {
    marginLeft: -12.3,
  },
  activity: {
    right: "59.88%",
    left: "20.06%",
  },
  home2: {
    marginLeft: -18.3,
    top: 46,
  },
  homeIcon: {
    marginLeft: -16.3,
    top: 13,
    width: 32,
    height: 32,
    left: "50%",
    position: "absolute",
  },
  homeChild: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    width: 78,
    height: 4,
    backgroundColor: Color.zonesso3,
    top: 0,
    left: 0,
    position: "absolute",
  },
  home1: {
    right: "79.94%",
    left: "0%",
    borderTopLeftRadius: Border.br_9xl,
    borderBottomLeftRadius: Border.br_9xl,
  },
  navbar: {
    top: 777,
    borderRadius: Border.br_9xl,
    height: 74,
    left: 0,
    backgroundColor: Color.white,
  },
  home: {
    borderRadius: Border.br_13xl,
    width: 393,
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Home;
