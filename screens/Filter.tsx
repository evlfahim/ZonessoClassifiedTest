import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Search from "../components/Search";
import ButtonStatus from "../components/ButtonStatus";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Filter = () => {
  return (
    <View style={[styles.filter, styles.filterBg]}>
      <Image
        style={[styles.arrowLeftIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-left.png")}
      />
      <View style={styles.head}>
        <Text style={[styles.filters, styles.iconPosition]}>Filters</Text>
        <Text style={styles.reset}>Reset</Text>
      </View>
      <Text style={[styles.city, styles.cityTypo]}>City</Text>
      <Text style={[styles.priceAed, styles.cityTypo]}>Price (AED)</Text>
      <Text style={[styles.keyword, styles.cityTypo]}>Keyword</Text>
      <Text style={[styles.year, styles.cityTypo]}>Year</Text>
      <Text style={styles.showAdsBy}>Show ads by verified users</Text>
      <View style={[styles.filterChild, styles.filterChildLayout]} />
      <View style={[styles.filterItem, styles.filterChildLayout]} />
      <View style={[styles.filterInner, styles.filterChildLayout]} />
      <View style={[styles.lineView, styles.filterChildLayout]} />
      <View style={[styles.filterChild1, styles.filterChildLayout]} />
      <Text style={[styles.category, styles.cityTypo]}>Category</Text>
      <Text style={[styles.aed10, styles.textLayout]}>AED 10</Text>
      <Text style={[styles.aed10000, styles.text1Layout]}>AED 10,000</Text>
      <View style={[styles.rangeSlider, styles.rangePosition]}>
        <View style={[styles.contentContainer, styles.contentContainerFlexBox]}>
          <View style={styles.slider}>
            <LinearGradient
              style={styles.active}
              locations={[0, 0.25, 0.5, 0.75, 1]}
              colors={["#f06100", "#f04900", "#f03000", "#f00030", "#f0006d"]}
            >
              <View style={styles.ghostShadowBox1} />
              <View style={[styles.tooltip, styles.tooltipShadowBox1]}>
                <View style={styles.contentContainer1}>
                  <View style={styles.contentContainerFlexBox}>
                    <View style={styles.iconSolid}>
                      <Text style={[styles.icon, styles.iconPosition]}>
                        grin
                      </Text>
                    </View>
                    <Text style={[styles.tooltip1, styles.tooltip1Typo]}>
                      25%
                    </Text>
                  </View>
                  <Text
                    style={[styles.loremIpsumDolor, styles.tooltip1Typo]}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Purus faucibus sit sit facilisis dictumst bibendum.
Lorem ipsum dolor sit amet.`}</Text>
                </View>
                <Image
                  style={styles.arrowContainerIcon}
                  contentFit="cover"
                  source={require("../assets/arrowcontainer.png")}
                />
              </View>
              <View style={styles.ghostShadowBox} />
              <View style={styles.tooltipShadowBox}>
                <View style={styles.contentContainer1}>
                  <View style={styles.contentContainerFlexBox}>
                    <View style={styles.iconSolid}>
                      <Text style={[styles.icon, styles.iconPosition]}>
                        grin
                      </Text>
                    </View>
                    <Text style={[styles.tooltip1, styles.tooltip1Typo]}>
                      0%
                    </Text>
                  </View>
                  <Text
                    style={[styles.loremIpsumDolor, styles.tooltip1Typo]}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Purus faucibus sit sit facilisis dictumst bibendum.
Lorem ipsum dolor sit amet.`}</Text>
                </View>
                <Image
                  style={styles.arrowContainerIcon}
                  contentFit="cover"
                  source={require("../assets/arrowcontainer1.png")}
                />
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
      <Text style={[styles.text, styles.textTypo]}>1990</Text>
      <Text style={[styles.text1, styles.textTypo]}>2020</Text>
      <View style={[styles.rangeSlider1, styles.rangePosition]}>
        <View style={[styles.contentContainer, styles.contentContainerFlexBox]}>
          <View style={styles.slider}>
            <LinearGradient
              style={styles.active}
              locations={[0, 0.25, 0.5, 0.75, 1]}
              colors={["#f06100", "#f04900", "#f03000", "#f00030", "#f0006d"]}
            >
              <View style={styles.ghostShadowBox1} />
              <View style={[styles.tooltip4, styles.tooltipShadowBox1]}>
                <View style={styles.contentContainer1}>
                  <View style={styles.contentContainerFlexBox}>
                    <View style={styles.iconSolid}>
                      <Text style={[styles.icon, styles.iconPosition]}>
                        grin
                      </Text>
                    </View>
                    <Text style={[styles.tooltip1, styles.tooltip1Typo]}>
                      25%
                    </Text>
                  </View>
                  <Text
                    style={[styles.loremIpsumDolor, styles.tooltip1Typo]}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Purus faucibus sit sit facilisis dictumst bibendum.
Lorem ipsum dolor sit amet.`}</Text>
                </View>
                <Image
                  style={styles.arrowContainerIcon}
                  contentFit="cover"
                  source={require("../assets/arrowcontainer.png")}
                />
              </View>
              <View style={styles.ghostShadowBox} />
              <View style={styles.tooltipShadowBox}>
                <View style={styles.contentContainer1}>
                  <View style={styles.contentContainerFlexBox}>
                    <View style={styles.iconSolid}>
                      <Text style={[styles.icon, styles.iconPosition]}>
                        grin
                      </Text>
                    </View>
                    <Text style={[styles.tooltip1, styles.tooltip1Typo]}>
                      0%
                    </Text>
                  </View>
                  <Text
                    style={[styles.loremIpsumDolor, styles.tooltip1Typo]}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Purus faucibus sit sit facilisis dictumst bibendum.
Lorem ipsum dolor sit amet.`}</Text>
                </View>
                <Image
                  style={styles.arrowContainerIcon}
                  contentFit="cover"
                  source={require("../assets/arrowcontainer1.png")}
                />
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
      <Search searchKeywords="Search Keywords" />
      <View style={styles.rectangleView} />
      <Text style={[styles.aventador, styles.aventadorPosition]}>
        Aventador
      </Text>
      <Image
        style={[styles.xCircleIcon, styles.aventadorPosition]}
        contentFit="cover"
        source={require("../assets/xcircle.png")}
      />
      <Image
        style={[styles.togglecheckBoxOff24pxIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/togglecheck-box-off-24px.png")}
      />
      <View style={[styles.dubaiParent, styles.parentPosition]}>
        <Text style={styles.dubai}>Dubai</Text>
        <Image
          style={styles.chevronRightIcon}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />
      </View>
      <View style={[styles.motorsParent, styles.parentPosition]}>
        <Text style={styles.dubai}>Motors</Text>
        <Image
          style={styles.chevronRightIcon}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />
      </View>
      <ButtonStatus
        button="Show 200 results"
        propTop={760}
        propLeft="50%"
        propMarginLeft={-180.5}
      />
      <View style={[styles.statusBar, styles.filterBg]}>
        <Image
          style={styles.notchIcon}
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
  filterBg: {
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconPosition: {
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  cityTypo: {
    width: 173,
    color: Color.lightText,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    height: 32,
    alignItems: "center",
    display: "flex",
    left: 16,
    position: "absolute",
  },
  filterChildLayout: {
    height: 2,
    width: 363,
    borderTopWidth: 2,
    borderColor: Color.gray200,
    left: 15,
    borderStyle: "solid",
    position: "absolute",
  },
  textLayout: {
    height: 23,
    color: Color.gray500,
    width: 77,
    left: 17,
  },
  text1Layout: {
    width: 79,
    left: 110,
    height: 24,
  },
  rangePosition: {
    width: 351,
    left: 25,
    position: "absolute",
  },
  contentContainerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  tooltipShadowBox1: {
    justifyContent: "flex-end",
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    right: -18,
    top: -37,
    display: "none",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignItems: "center",
    position: "absolute",
  },
  tooltip1Typo: {
    lineHeight: 16,
    fontSize: FontSize.paragraphXSLight_size,
    textAlign: "left",
  },
  textTypo: {
    top: 547,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraphMDRegular_size,
    position: "absolute",
  },
  aventadorPosition: {
    top: 430,
    height: 24,
    position: "absolute",
  },
  parentPosition: {
    left: 299,
    height: 32,
    width: 78,
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
  arrowLeftIcon: {
    top: 64,
    left: 29,
  },
  filters: {
    marginLeft: -126.5,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    color: Color.colorGray_100,
    width: 254,
    lineHeight: 38,
    textAlign: "center",
    top: 1,
  },
  reset: {
    left: 283,
    color: Color.statusDanger600,
    height: 32,
    width: 78,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraphMDRegular_size,
    top: 4,
    textAlign: "center",
    position: "absolute",
  },
  head: {
    top: 56,
    width: 361,
    height: 40,
    left: 16,
    position: "absolute",
  },
  city: {
    top: 112,
  },
  priceAed: {
    top: 224,
  },
  keyword: {
    top: 336,
  },
  year: {
    top: 488,
  },
  showAdsBy: {
    top: 600,
    color: Color.gray800,
    width: 359,
    left: 17,
    textAlign: "left",
    fontSize: FontSize.textSmall_size,
    height: 32,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  filterChild: {
    top: 156,
  },
  filterItem: {
    top: 212,
  },
  filterInner: {
    top: 324,
  },
  lineView: {
    top: 476,
  },
  filterChild1: {
    top: 588,
  },
  category: {
    top: 169,
  },
  aed10: {
    top: 288,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraphMDRegular_size,
    position: "absolute",
  },
  aed10000: {
    top: 288,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraphMDRegular_size,
    position: "absolute",
  },
  ghostShadowBox1: {
    height: 16,
    width: 16,
    borderColor: Color.colorLightgray_100,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.04)",
    left: -8,
    marginTop: -8,
    borderWidth: 1,
    top: "50%",
    borderRadius: Border.br_980xl,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  icon: {
    marginTop: -7,
    marginLeft: -6,
    fontSize: FontSize.paragraphSMRegular_size,
    fontFamily: FontFamily.textSmall,
    color: Color.gray400,
    top: "50%",
  },
  iconSolid: {
    width: 12,
    height: 12,
    display: "none",
  },
  tooltip1: {
    fontFamily: FontFamily.paragraphXSRegular,
    color: Color.white,
    marginLeft: 8,
  },
  loremIpsumDolor: {
    fontWeight: "300",
    fontFamily: FontFamily.paragraphXSLight,
    marginTop: 4,
    color: Color.gray400,
    display: "none",
  },
  contentContainer1: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.gray900,
    borderColor: Color.colorDarkslategray_100,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  arrowContainerIcon: {
    height: 4,
    width: 24,
  },
  tooltip: {
    display: "none",
  },
  ghostShadowBox: {
    right: -8,
    height: 16,
    width: 16,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.04)",
    top: "50%",
    marginTop: -8,
    borderRadius: Border.br_980xl,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  tooltipShadowBox: {
    left: -16,
    display: "none",
    justifyContent: "flex-end",
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    top: -37,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignItems: "center",
    position: "absolute",
  },
  active: {
    height: "100%",
    width: "25.01%",
    top: "0%",
    right: "74.99%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.zonesso3,
    borderRadius: Border.br_980xl,
    position: "absolute",
  },
  slider: {
    flex: 1,
    backgroundColor: Color.gray200,
    height: 4,
    borderRadius: Border.br_980xl,
  },
  contentContainer: {
    alignSelf: "stretch",
  },
  rangeSlider: {
    top: 271,
  },
  text: {
    height: 23,
    color: Color.gray500,
    width: 77,
    left: 17,
  },
  text1: {
    width: 79,
    left: 110,
    height: 24,
  },
  tooltip4: {
    display: "none",
  },
  rangeSlider1: {
    top: 530,
  },
  rectangleView: {
    top: 426,
    borderRadius: 15,
    backgroundColor: Color.statusDanger100,
    borderColor: Color.statusDanger500,
    borderWidth: 0.5,
    width: 117,
    borderStyle: "solid",
    height: 32,
    left: 16,
    position: "absolute",
  },
  aventador: {
    left: 22,
    color: Color.statusDanger500,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.nunitoSemiBold,
    fontSize: FontSize.paragraphMDRegular_size,
    top: 430,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 38,
  },
  xCircleIcon: {
    left: 102,
    width: 24,
    overflow: "hidden",
  },
  togglecheckBoxOff24pxIcon: {
    top: 604,
    left: 326,
  },
  dubai: {
    left: 0,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.gray600,
    top: 0,
    textAlign: "left",
    height: 32,
    width: 78,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.paragraphMDRegular_size,
    position: "absolute",
  },
  chevronRightIcon: {
    left: 54,
    top: 4,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  dubaiParent: {
    top: 112,
  },
  motorsParent: {
    top: 169,
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
    color: Color.gray900,
    top: 0,
    fontWeight: "600",
    width: 54,
    textAlign: "center",
    left: "50%",
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
    top: 0,
    left: "50%",
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
    top: "50%",
    width: 77,
    height: 13,
    overflow: "hidden",
  },
  statusBar: {
    left: 2,
    width: 390,
    height: 47,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  filter: {
    borderRadius: Border.br_13xl,
    width: 393,
    height: 852,
    overflow: "hidden",
  },
});

export default Filter;
