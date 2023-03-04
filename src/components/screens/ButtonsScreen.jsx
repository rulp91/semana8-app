import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const ButtonsScreen = ({ navigation }) => {
  const handlePress = () => false;
  return (
    <View>
      <Button onPress={handlePress} title="Red button!" color="red" />
      <Text> </Text>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.text}>Button</Text>
        </TouchableOpacity>
      </View>
      <Text> </Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    borderWidth: 1,
    padding: 25,
    borderColor: "black",
    backgroundColor: "red",
  },
});
export default ButtonsScreen;
