import * as React from "react";
import { Image } from "expo-image";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ButtonStatus from "../components/ButtonStatus";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";
import * as WebBrowser from "expo-web-browser";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, ParamListBase } from "@react-navigation/native";
WebBrowser.maybeCompleteAuthSession();

const Welcome = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "334492429005026",
  });
  const [Grequest, Gresponse, GpromptAsync] = Google.useAuthRequest({
    androidClientId:
      "276191175383-fitfq7bqkbi3bp7irol7vk8u7e96aro5.apps.googleusercontent.com",
    iosClientId:
      "276191175383-7mke6hp95aibh2bt1ne8vc1lhv3omk70.apps.googleusercontent.com",
  });

  // FACEBOOK API
  React.useEffect(() => {
    if (
      response &&
      response.type === "success" &&
      response.authentication &&
      response.authentication.accessToken
    ) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
      })();
    }
    handleSignInWithGoogle();
  }, [response, Gresponse]);

  // FACEBOOK API
  const handlePressAsync = async () => {
    const result = await promptAsync();
    console.log(`result`, result);
    if (result.type !== "success") {
      alert("Uh oh, something went wrong");
      return;
    }
  };

  // GOOGLE API
  const handleSignInWithGoogle = async () => {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (Gresponse?.type === "success" && Gresponse.authentication) {
        await getUserInfo(Gresponse.authentication.accessToken);
      }
    } else {
      //   dispatch(saveLoggedInUser(user));
    }
  };

  // GOOGLE API
  const getUserInfo = async (token: string) => {
    if (!token) return;

    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
    } catch (error) {
      alert("Uh oh, something went wrong");
    }
  };

  return (
    <View style={[styles.welcome, styles.welcomeBg]}>
      <View style={[styles.apple, styles.appleShadowBox]}>
        <Image
          style={styles.mailIcon}
          contentFit="cover"
          source={require("../assets/mail.png")}
        />
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text style={[styles.text, styles.textTypo]}>
            Continue with Email
          </Text>
        </Pressable>
      </View>
      <View style={[styles.facebook, styles.appleShadowBox]}>
        <Image
          style={styles.mailIcon}
          contentFit="cover"
          source={require("../assets/social-icon.png")}
        />
        <TouchableOpacity onPress={handlePressAsync}>
          <Text style={[styles.text, styles.textTypo]}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.google, styles.appleShadowBox]}>
        <Image
          style={styles.mailIcon}
          contentFit="cover"
          source={require("../assets/social-icon1.png")}
        />
        <TouchableOpacity onPress={() => GpromptAsync()}>
          <Text style={[styles.text, styles.textTypo]}>
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>

      <ButtonStatus button="Create new Account" />
      <View style={styles.buttonStatus}>
        <View style={[styles.iconSolid, styles.iconLayout]}>
          <Text style={[styles.icon, styles.iconFlexBox]}>grin</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={[styles.button, styles.logInTypo]}>
            Sign up as a Business
          </Text>
        </TouchableOpacity>
        <View style={[styles.iconSolid1, styles.iconLayout]}>
          <Text style={[styles.icon, styles.iconFlexBox]}>grin</Text>
        </View>
      </View>
      <Image
        style={styles.icon2}
        contentFit="cover"
        source={require("../assets/473114450-1.png")}
      />
      <View style={[styles.statusBar, styles.welcomeBg]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        
      </View>
      <Text style={[styles.logIn, styles.logInPosition]}>Log in</Text>
      <Text style={[styles.bySigningUpContainer, styles.signUpLaterLayout]}>
        <Text
          style={styles.bySigningUp}
        >{`By signing up, you agree to our `}</Text>
        <Text style={styles.logInTypo}>Terms of Service</Text>
        <Text style={styles.bySigningUp}>{` & `}</Text>
        <Text style={styles.logInTypo}>Privacy Policy</Text>
      </Text>
      <Text style={[styles.alreadyHaveAnContainer, styles.logInPosition]}>
        <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
        <Text style={styles.textTypo1}>{` `}</Text>
      </Text>
      <Text style={[styles.signUpLater, styles.signUpLaterLayout]}>
        Sign up later
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeBg: {
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  appleShadowBox: {
    paddingVertical: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(16, 24, 40, 0.05)",
    marginLeft: -180.5,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    width: 361,
    borderRadius: Border.br_5xs,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.textSmall_size,
  },
  iconLayout: {
    width: 12,
    display: "none",
    height: 12,
  },
  iconFlexBox: {
    textAlign: "center",
    left: "50%",
  },
  logInTypo: {
    color: Color.statusDanger500,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
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
  logInPosition: {
    lineHeight: 38,
    top: 809,
    textAlign: "left",
    position: "absolute",
  },
  signUpLaterLayout: {
    lineHeight: 18,
    textAlign: "center",
    position: "absolute",
  },
  mailIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  text: {
    lineHeight: 24,
    color: Color.gray700,
    marginLeft: 12,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  apple: {
    top: 665,
  },
  facebook: {
    top: 609,
  },
  google: {
    top: 553,
  },
  icon: {
    marginTop: -7,
    marginLeft: -6,
    fontFamily: FontFamily.textSmall,
    color: Color.white,
    fontSize: FontSize.paragraphSMRegular_size,
    top: "50%",
    position: "absolute",
  },
  iconSolid: {
    display: "none",
    height: 12,
  },
  button: {
    lineHeight: 26,
    marginLeft: 8,
    textAlign: "left",
    fontSize: FontSize.textSmall_size,
  },
  iconSolid1: {
    marginLeft: 8,
    display: "none",
    height: 12,
  },
  buttonStatus: {
    top: 497,
    left: 16,
    backgroundColor: Color.statusDanger200,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    width: 361,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  icon2: {
    top: 48,
    left: 0,
    height: 360,
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
    fontWeight: "600",
    fontFamily: FontFamily.paragraphMDSemibold,
    color: Color.gray900,
    top: 0,
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
  },
  logIn: {
    left: 250,
    fontSize: FontSize.paragraphMDRegular_size,
    color: Color.statusDanger500,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  bySigningUp: {
    color: Color.lightText,
    fontFamily: FontFamily.nunitoRegular,
  },
  bySigningUpContainer: {
    top: 721,
    left: 20,
    fontSize: FontSize.paragraphSMRegular_size,
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.nunitoRegular,
  },
  textTypo1: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  alreadyHaveAnContainer: {
    left: 109,
    color: Color.lightText,
    fontSize: FontSize.paragraphSMRegular_size,
  },
  signUpLater: {
    top: 768,
    left: 148,
    // textDecoration: "underline",
    color: Color.statusDanger500,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.textSmall_size,
    lineHeight: 18,
  },
  welcome: {
    borderRadius: Border.br_13xl,
    height: 852,
    overflow: "hidden",
    width: 393,
  },
});

export default Welcome;
