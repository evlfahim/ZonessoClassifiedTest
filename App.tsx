const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Filter from "./screens/Filter";
import MotorsListing from "./screens/MotorsListing";
import MoreDetails from "./screens/MoreDetails";
import ListingDescription from "./components/ListingDescription";
import Chats from "./screens/Chats";
import Messenger from "./screens/Messenger";
import ZonessoAssemsentTest from "./components/ZonessoAssemsentTest";
import UIUXText from "./components/UIUXText";
import LoginScreenThis from "./screens/LoginScreenThis";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" component={Welcome} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Chats" component={Chats} />
            <Stack.Screen name="Messenger" component={Messenger} />
            <Stack.Screen name="Filter" component={Filter} />
            <Stack.Screen name="MotorsListing" component={MotorsListing} />
            <Stack.Screen name="LoginScreenThis" component={MoreDetails} />
          
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
