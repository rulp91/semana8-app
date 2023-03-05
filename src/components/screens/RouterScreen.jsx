import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const RouterScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default RouterScreen;
