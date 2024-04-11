import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const LoginScreenThis = () => {
  return (
    <Text
      style={styles.loginScreenThis}
    >{`Login Screen: This should include third-party authentication options such as Google, Facebook, and local authentication using email and password.
Main Screen: This will display the different types of vehicles and highlight top showrooms.
Category Screen: Activated when a user selects a vehicle type, such as cars.
Filter Screen: Allows users to filter their search based on various criteria.
Product (Item) Details Screen: Displays detailed information about a specific vehicle.
Chats Screen: Contains the chat history between users.
Chat Screen: Facilitates real-time conversation between users.
Important Notes:
A Figma file with the design specifications will be attached to this email. Please refer to it for the UI/UX design of the application.
You are required to build both the API and an admin panel for managing the application content.
The technology stack for this project must include React Native TypeScript for the mobile application, Node.js TypeScript for the backend, React TypeScript for the admin panel, and Postgres for the database.
Upon completion, please share the repositories for the mobile application, API, and admin panel with us for review.
This test is not only a chance to showcase your technical abilities but also an opportunity to demonstrate your creativity and problem-solving skills. We believe in giving our candidates the freedom to express their ideas and innovations through their work.`}</Text>
  );
};

const styles = StyleSheet.create({
  loginScreenThis: {
    fontSize: 40,
    lineHeight: 80,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.white,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 1920,
  },
});

export default LoginScreenThis;
