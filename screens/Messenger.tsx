import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";
import { io } from "socket.io-client";
const socket = io("http://192.168.211.107:8050");

const Messenger = () => {
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [username, setUsername] = React.useState("Patrick");
  const [room, setRoom] = React.useState("88888888");
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState([
    {
      room: room,
      message: "Hey",
      author: "Patrick",
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    },
    {
      room: room,
      message: "HowFar",
      author: "Ologo",
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    },
  ]);

  const sendMessage = React.useCallback(async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: "Patrick",
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("sendMessage", messageData);
      setMessageList((prev) => [...prev, messageData]);
      setCurrentMessage("");
    }
  }, [currentMessage]);

  React.useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  React.useEffect(() => {
    joinRoom();
  }, []);
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <ScrollView style={{ marginBottom: 60 }}>
        {messageList.map((message, index) => {
          console.log(message);
          const isYou = username === message.author;

          return (
            <View
              key={index}
              style={[
                styles.messageContainer,
                isYou
                  ? styles.messageContainerYou
                  : styles.messageContainerOther,
              ]}
            >
              <View style={styles.messageContent}>
                <Text>{message.message}</Text>
                <View style={styles.messageFooter}>
                  <Text>{message.time}</Text>
                  <Text>{message.author}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here..."
          value={currentMessage}
          onChangeText={(text) => setCurrentMessage(text)}
        />
        <Pressable onPress={sendMessage} style={styles.sendButton}>
          <Text>&#9658;</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  messageContainerYou: {
    justifyContent: "flex-end",
  },
  messageContainerOther: {
    justifyContent: "flex-start",
  },
  messageContent: {
    backgroundColor: "cornflowerblue",
    padding: 10,
    borderRadius: 8,
    maxWidth: "80%",
  },
  messageFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
  },
  sendButton: {
    backgroundColor: "aqua",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});

export default Messenger;
