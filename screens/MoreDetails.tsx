import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MoreDetails = () => {
  return (
    <View style={styles.moreDetails}>
      <View style={styles.moreDetailsChild} />
      <Text style={styles.aed99000}>AED 99,000</Text>
      <Text style={[styles.lamborghiniAventador, styles.detailsTypo]}>
        Lamborghini Aventador
      </Text>
      <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
      <Text style={[styles.trim, styles.jTypo]}>Trim</Text>
      <View style={styles.moreDetailsItem} />
      <View style={[styles.moreDetailsInner, styles.moreChildLayout1]} />
      <Text style={[styles.year, styles.yearTypo]}>Year</Text>
      <View style={[styles.lineView, styles.moreChildLayout1]} />
      <Text style={[styles.kilometers, styles.text1Typo]}>Kilometers</Text>
      <Image
        style={[styles.lineIcon, styles.moreChildLayout]}
        contentFit="cover"
        source={require("../assets/line-211.png")}
      />
      <Text style={[styles.regionalSpecs, styles.specsTypo]}>
        Regional Specs
      </Text>
      <View style={[styles.moreDetailsChild1, styles.moreChildLayout1]} />
      <Text style={[styles.doors, styles.doorTypo]}>Doors</Text>
      <View style={[styles.moreDetailsChild2, styles.moreChildLayout1]} />
      <Text style={[styles.postedOn, styles.postedOnTypo]}>Posted On</Text>
      <Text style={[styles.j, styles.jTypo]}>J</Text>
      <Text style={[styles.text, styles.yearTypo]}>2021</Text>
      <Text style={[styles.text1, styles.text1Typo]}>600</Text>
      <Text style={[styles.europianSpecs, styles.uaeLayout]}>
        Europian Specs
      </Text>
      <Text style={[styles.door, styles.doorTypo]}>2 Door</Text>
      <Text style={[styles.march232024, styles.uaeLayout]}>March 23, 2024</Text>
      <Image
        style={[styles.moreDetailsChild3, styles.moreChildLayout]}
        contentFit="cover"
        source={require("../assets/line-211.png")}
      />
      <Text style={[styles.bodyType, styles.bodyTypeTypo]}>Body Type</Text>
      <View style={[styles.moreDetailsChild4, styles.moreChildLayout1]} />
      <Text style={[styles.fuelType, styles.petrolTypo]}>Fuel Type</Text>
      <View style={[styles.moreDetailsChild5, styles.moreChildLayout1]} />
      <Text style={[styles.sellerType, styles.showroomTypo]}>Seller Type</Text>
      <Image
        style={[styles.moreDetailsChild6, styles.moreChildLayout]}
        contentFit="cover"
        source={require("../assets/line-211.png")}
      />
      <Text style={[styles.transmissionType, styles.transmissionTypo]}>
        Transmission Type
      </Text>
      <View style={[styles.moreDetailsChild7, styles.moreChildLayout1]} />
      <Text style={[styles.horsepower, styles.hpTypo]}>Horsepower</Text>
      <View style={[styles.moreDetailsChild8, styles.moreChildLayout1]} />
      <Text style={[styles.noOfCylinders, styles.text2Typo]}>
        No. of Cylinders
      </Text>
      <Text style={[styles.sportsCar, styles.bodyTypeTypo]}>Sports Car</Text>
      <Text style={[styles.petrol, styles.petrolTypo]}>Petrol</Text>
      <Text style={[styles.showroom, styles.showroomTypo]}>Showroom</Text>
      <Text style={[styles.automaticTransmission, styles.transmissionTypo]}>
        Automatic Transmission
      </Text>
      <Text style={[styles.hp, styles.hpTypo]}>700-799 HP</Text>
      <Text style={[styles.text2, styles.text2Typo]}>12</Text>
      <Text style={[styles.no, styles.noTypo]}>No</Text>
      <Text style={[styles.blue, styles.blueTypo]}>Blue</Text>
      <Text style={[styles.black, styles.blackTypo]}>Black</Text>
      <Text style={[styles.uae, styles.uaeTypo]}>UAE</Text>
      <Image
        style={[styles.moreDetailsChild9, styles.moreChildLayout]}
        contentFit="cover"
        source={require("../assets/line-211.png")}
      />
      <Text style={[styles.warranty, styles.noTypo]}>Warranty</Text>
      <Image
        style={[styles.moreDetailsChild10, styles.moreChildLayout]}
        contentFit="cover"
        source={require("../assets/line-211.png")}
      />
      <Text style={[styles.exteriorColor, styles.blueTypo]}>
        Exterior Color
      </Text>
      <View style={[styles.moreDetailsChild11, styles.moreChildLayout1]} />
      <Text style={[styles.interiorColor, styles.blackTypo]}>
        Interior Color
      </Text>
      <View style={[styles.moreDetailsChild12, styles.moreChildLayout1]} />
      <Text style={[styles.targetMarket, styles.uaeTypo]}>Target Market</Text>
      <Image
        style={[styles.moreDetailsChild13, styles.moreChildLayout]}
        contentFit="cover"
        source={require("../assets/line-211.png")}
      />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.premiumPosition]}
        locations={[0, 0.25, 0.5, 0.75, 1]}
        colors={["#f06100", "#f04900", "#f03000", "#f00030", "#f0006d"]}
      />
      <Text style={[styles.premium, styles.premiumPosition]}>Premium</Text>
      <View style={styles.moreDetailsChild14} />
    </View>
  );
};

const styles = StyleSheet.create({
  detailsTypo: {
    color: Color.gray800,
    fontSize: FontSize.textSmall_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  jTypo: {
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    top: 149,
    width: 78,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  moreChildLayout1: {
    height: 2,
    width: 363,
    borderTopWidth: 2,
    borderColor: Color.gray200,
    borderStyle: "solid",
    position: "absolute",
  },
  yearTypo: {
    top: 181,
    width: 78,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  text1Typo: {
    top: 213,
    width: 78,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  moreChildLayout: {
    width: 361,
    maxHeight: "100%",
    position: "absolute",
  },
  specsTypo: {
    top: 245,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  doorTypo: {
    top: 277,
    width: 78,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  postedOnTypo: {
    top: 309,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  uaeLayout: {
    width: 172,
    left: 205,
  },
  bodyTypeTypo: {
    top: 345,
    width: 78,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  petrolTypo: {
    top: 377,
    width: 78,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  showroomTypo: {
    top: 409,
    width: 78,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  transmissionTypo: {
    top: 441,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  hpTypo: {
    top: 473,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  text2Typo: {
    top: 505,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  noTypo: {
    top: 541,
    width: 78,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  blueTypo: {
    top: 573,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  blackTypo: {
    top: 605,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  uaeTypo: {
    top: 637,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  premiumPosition: {
    height: 23,
    width: 94,
    left: 150,
    top: 45,
    position: "absolute",
  },
  moreDetailsChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    position: "absolute",
    height: 710,
    width: 393,
  },
  aed99000: {
    fontSize: FontSize.size_xl,
    fontWeight: "900",
    fontFamily: FontFamily.nunitoBlack,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    top: 45,
    width: 173,
    left: 16,
    position: "absolute",
  },
  lamborghiniAventador: {
    top: 69,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    width: 188,
    left: 16,
  },
  details: {
    top: 117,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    width: 77,
    left: 17,
  },
  trim: {
    width: 78,
    left: 16,
  },
  moreDetailsItem: {
    top: 105,
    left: -2,
    borderTopWidth: 4,
    width: 397,
    height: 4,
    borderColor: Color.gray200,
    borderStyle: "solid",
    position: "absolute",
  },
  moreDetailsInner: {
    top: 177,
    left: 15,
    width: 363,
    borderTopWidth: 2,
  },
  year: {
    left: 16,
  },
  lineView: {
    top: 209,
    left: 15,
    width: 363,
    borderTopWidth: 2,
  },
  kilometers: {
    left: 16,
  },
  lineIcon: {
    top: 241,
    left: 16,
  },
  regionalSpecs: {
    width: 173,
    left: 16,
  },
  moreDetailsChild1: {
    top: 273,
    left: 15,
    width: 363,
    borderTopWidth: 2,
  },
  doors: {
    left: 16,
  },
  moreDetailsChild2: {
    top: 305,
    left: 15,
    width: 363,
    borderTopWidth: 2,
  },
  postedOn: {
    width: 78,
    left: 16,
  },
  j: {
    left: 205,
    width: 78,
  },
  text: {
    left: 205,
  },
  text1: {
    left: 205,
  },
  europianSpecs: {
    top: 245,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  door: {
    left: 205,
  },
  march232024: {
    top: 309,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  moreDetailsChild3: {
    top: 337,
    left: 16,
  },
  bodyType: {
    left: 16,
  },
  moreDetailsChild4: {
    top: 373,
    left: 15,
    width: 363,
    borderTopWidth: 2,
  },
  fuelType: {
    left: 16,
  },
  moreDetailsChild5: {
    top: 405,
    left: 15,
    width: 363,
    borderTopWidth: 2,
  },
  sellerType: {
    left: 16,
  },
  moreDetailsChild6: {
    top: 437,
    left: 16,
  },
  transmissionType: {
    width: 173,
    left: 16,
  },
  moreDetailsChild7: {
    top: 469,
    left: 15,
    width: 363,
    borderTopWidth: 2,
  },
  horsepower: {
    width: 78,
    left: 16,
  },
  moreDetailsChild8: {
    top: 501,
    left: 15,
    width: 363,
    borderTopWidth: 2,
  },
  noOfCylinders: {
    width: 152,
    left: 16,
  },
  sportsCar: {
    left: 205,
  },
  petrol: {
    left: 205,
  },
  showroom: {
    left: 205,
  },
  automaticTransmission: {
    width: 172,
    left: 205,
  },
  hp: {
    width: 116,
    left: 205,
  },
  text2: {
    width: 172,
    left: 205,
  },
  no: {
    left: 205,
  },
  blue: {
    width: 172,
    left: 205,
  },
  black: {
    left: 205,
    width: 78,
  },
  uae: {
    width: 172,
    left: 205,
  },
  moreDetailsChild9: {
    top: 533,
    left: 16,
  },
  warranty: {
    left: 17,
  },
  moreDetailsChild10: {
    top: 569,
    left: 17,
  },
  exteriorColor: {
    left: 17,
    width: 173,
  },
  moreDetailsChild11: {
    top: 601,
    left: 16,
  },
  interiorColor: {
    width: 145,
    left: 17,
  },
  moreDetailsChild12: {
    top: 633,
    left: 16,
  },
  targetMarket: {
    width: 152,
    left: 17,
  },
  moreDetailsChild13: {
    top: 665,
    left: 17,
  },
  rectangleLineargradient: {
    borderRadius: Border.br_9xs,
    opacity: 0.9,
    backgroundColor: Color.zonesso3,
  },
  premium: {
    lineHeight: 38,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.white,
    textAlign: "center",
    justifyContent: "center",
    fontSize: FontSize.paragraphMDRegular_size,
    width: 94,
    left: 150,
    alignItems: "center",
    display: "flex",
  },
  moreDetailsChild14: {
    marginLeft: -18,
    top: 11,
    left: "50%",
    borderColor: "#fda29b",
    borderTopWidth: 3,
    width: 35,
    height: 3,
    borderStyle: "solid",
    position: "absolute",
  },
  moreDetails: {
    height: 710,
    width: 393,
  },
});

export default MoreDetails;
