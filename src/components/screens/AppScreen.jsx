import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const AppScreen = ({ navigation }) => {
  return (
    <View>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <View style={styles.container}>
        <Text>¡Abre App.js para comenzar a trabajar en tu aplicación!</Text>
        <Text>Los cambios que realice se recargarán automáticamente.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
      <Text> </Text>
      <View style={styles.container}>
        <Text>Hola Mundo</Text>
      </View>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default AppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
