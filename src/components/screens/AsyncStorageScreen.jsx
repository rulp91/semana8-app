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
  // To get the value from the TextInput
  const [textInputValue, setTextInputValue] = useState("");
  // To set the value on Text
  const [getValue, setGetValue] = useState("");
  let storageKey = "current-storage-key";
  const saveValueFunction = () => {
    //function to save the value in AsyncStorage
    if (textInputValue) {
      //To check the input not empty
      AsyncStorage.setItem(storageKey, textInputValue);
      setTextInputValue("");
      alert("Data Saved");
      //alert to confirm
    } else {
      alert("Please fill data");
      //alert for the empty InputText
    }
  };

  const getValueFunction = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem(storageKey).then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
        setGetValue(value)
      //Setting the value in Text
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          AsyncStorage in React Native to Store Data in Session
        </Text>

        <Text style={styles.textStyle}> {getValue} </Text>

        <TextInput
          placeholder="Enter Some Text here"
          value={textInputValue}
          onChangeText={(data) => setTextInputValue(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValueFunction}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}> SAVE VALUE </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getValueFunction} style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}> GET VALUE </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Hola Mundo</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
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
