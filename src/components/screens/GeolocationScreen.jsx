import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const GeolocationScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hola Mundo</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default GeolocationScreen;
