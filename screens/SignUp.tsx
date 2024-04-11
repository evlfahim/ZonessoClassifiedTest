import React, { useCallback, useEffect, useState } from "react";
import { TextInput, Button } from "react-native-paper";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Buttons from "../components/Buttton";

import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { UserInfo } from "../constants";
import { Register } from "../Fetches/services";

WebBrowser.maybeCompleteAuthSession();
const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  interface FullnameState {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    profilePicture: File | null;
  }

  const [userInfo, setUserInfo] = React.useState<FullnameState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    profilePicture: null,
  });
  console.log(`userInfo==>`, userInfo);
  const onHandleChange = ({
    field,
    value,
  }: {
    field: keyof FullnameState;
    value: string;
  }) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const formData = new FormData();
  formData.append("firstName", userInfo.firstName);
  formData.append("lastName", userInfo.lastName);
  formData.append("email", userInfo.email);
  formData.append("phoneNumber", userInfo.phoneNumber);
  formData.append("password", userInfo.password);
  // formData.append("profilePicture", userInfo.profilePicture);

  const Submit = useCallback(async () => {
    const res = await Register(formData);
    console.log(res)
    if (res.success == true) {
      navigation.navigate("SignIn");
    } else {
      alert(`${res.message}`);
    }
  }, [formData]);

  return (
    <ScrollView
      style={{
        marginTop: 50,
      }}
    >
      <View>
        {UserInfo.map(({ name, label }) =>
          name === "profilePicture" ? (
            <></>
          ) : (
            // <TouchableOpacity onPress={PickDocument}>
            //   <Text
            //     style={{ backgroundColor: "blue", color: "white", padding: 10 }}
            //   >
            //     Select Document
            //   </Text>
            // </TouchableOpacity>
            <TextInput
              key="label"
              value={userInfo[name as keyof FullnameState]}
              onChangeText={(value) =>
                onHandleChange({ field: name as keyof FullnameState, value })
              }
              mode="flat"
              label={label}
              style={{
                width: "98%",
                backgroundColor: "white",
                height: 60,
              }}
            />
          )
        )}

        <Buttons
          text="Sign Up"
          width="100%"
          marginTop={30}
          backgroundColor="#990000"
          borderRadius={10}
          onPress={Submit}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;
