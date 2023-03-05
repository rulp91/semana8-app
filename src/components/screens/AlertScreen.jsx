import React from "react";
import {
  Alert,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

const AlertScreen = ({ navigation }) => {
  const showAlert = () => {
    alert("Alerta!!!! necesitas....una cerveza...");
  };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={showAlert} style={styles.button}>
          <Text>Alerta</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text> </Text>
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};
export default AlertScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
    padding: 20,
  },
  button: {
    backgroundColor: "#4ba37b",
    width: 100,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
});
