import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageScreen = ({ navigation }) => {
  const [textInputValue, setTextInputValue] = useState("");
  const [getValue, setGetValue] = useState("");
  let storageKey = "current-storage-key";

  const saveValueFunction = () => {
    if (textInputValue) {
      AsyncStorage.setItem(storageKey, textInputValue);
      setTextInputValue("");
      alert("Datos almacenados correctamente");
    } else {
      alert("Introduzca primero los datos a almacenar");
    }
  };

  const getValueFunction = () => {
    AsyncStorage.getItem(storageKey).then((value) => setGetValue(value));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Almacenamiento asincrono de datos</Text>
        <Text style={styles.textStyle}> {getValue} </Text>
        <TextInput
          placeholder="Introduzca el valor que desea almacenar"
          value={textInputValue}
          onChangeText={(data) => setTextInputValue(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValueFunction}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}> Almacenar el valor </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getValueFunction} style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}> Mostrar valor </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Hola Mundo</Text>
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    textAlign: "center",
  },
  buttonStyle: {
    fontSize: 16,
    color: "white",
    backgroundColor: "green",
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: "white",
    textAlign: "center",
  },
  textInputStyle: {
    textAlign: "center",
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "green",
  },
});
export default AsyncStorageScreen;
