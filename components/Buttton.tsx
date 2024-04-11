import React, { useState } from "react";
import { Button } from "react-native-paper";
import { Text, TouchableOpacity } from "react-native";

type PropsButton = {
  icon?: string;
  text: string;
  onPress: () => void;
  width?: any;
  marginTop?: number;
  borderRadius?: number;
  backgroundColor?: string;
  color?: string;
  marginLeft?: number;
};

const Buttons = ({
  icon,
  text,
  onPress,
  width,
  marginTop,
  borderRadius,
  backgroundColor,
  color,
  marginLeft,
}: PropsButton) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Button
      icon={icon}
      mode="contained"
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      labelStyle={{
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
      }}
      style={{
        width: width,
        marginTop: marginTop,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        // color: color,
        marginLeft: marginLeft,
      }}
    >
      {text}
    </Button>
  );
};

export default Buttons;

type PropsButton2 = {
    icon: string;
    text: string;
    onPress: () => void;
    width?: any;
    marginTop?: number;
    borderRadius?: number;
    backgroundColor?: string;
    color?: string;
    marginLeft?: number;
    disabled?:any
  };
export const Buttons2 = ({
  icon,
  text,
  onPress,
  width,
  marginTop,
  borderRadius,
  color
}: PropsButton2) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Button
      icon={icon}
      mode="contained"
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      labelStyle={{
        color: "grey",
        fontWeight: "bold",
        fontSize: 20,
      }}
      style={{
        width: width,
        marginTop: marginTop,
        backgroundColor: isPressed ? "#990000" : "white",
        borderRadius: borderRadius,
        borderWidth: 1,
        borderColor: "black",
        // color: color,
      }}
    >
      <Text>{text}</Text>
    </Button>
  );
};
