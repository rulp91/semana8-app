import React from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoreConceptsList from "./CoreConceptsList";
import AppScreen from "./screens/AppScreen";
import AnimationsScreen from "./screens/AnimationsScreen";
import ButtonsScreen from "./screens/ButtonsScreen";
import DebuggingScreen from "./screens/DebuggingScreen";
import FlexboxScreen from "./screens/FlexboxScreen";
import HTTPScreen from "./screens/HTTPScreen";
import ImagesScreen from "./screens/ImagesScreen";
import ListViewScreen from "./screens/ListViewScreen";
import PropsScreen from "./screens/PropsScreen";
import RouterScreen from "./screens/RouterScreen";
import RunningIOSScreen from "./screens/RunningIOSScreen";
import ScrollViewScreen from "./screens/ScrollViewScreen";
import StateScreen from "./screens/StateScreen";
import StylingScreen from "./screens/StylingScreen";
import TextInputScreen from "./screens/TextInputScreen";
import WebViewScreen from "./screens/WebViewScreen";
import ModalScreen from "./screens/ModalScreen";
import ActivityIndicatorScreen from "./screens/ActivityIndicatorScreen";
import PickerScreen from "./screens/PickerScreen";
import SwitchScreen from "./screens/SwitchScreen";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
});

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={CoreConceptsList}
          options={{ title: "Core concepts" }}
        />
        <Stack.Screen
          name="AnimationsScreen"
          component={AnimationsScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="AppScreen"
          component={AppScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="ButtonsScreen"
          component={ButtonsScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="DebuggingScreen"
          component={DebuggingScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="FlexboxScreen"
          component={FlexboxScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="HTTPScreen"
          component={HTTPScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="ImagesScreen"
          component={ImagesScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="ListViewScreen"
          component={ListViewScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="PropsScreen"
          component={PropsScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="RouterScreen"
          component={RouterScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="RunningIOSScreen"
          component={RunningIOSScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="ScrollViewScreen"
          component={ScrollViewScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="StateScreen"
          component={StateScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="StylingScreen"
          component={StylingScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="TextInputScreen"
          component={TextInputScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="ModalScreen"
          component={ModalScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="ActivityIndicatorScreen"
          component={ActivityIndicatorScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="PickerScreen"
          component={PickerScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="SwitchScreen"
          component={SwitchScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
