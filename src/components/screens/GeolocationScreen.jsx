import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const GeolocationScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hola Mundo</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default GeolocationScreen;
