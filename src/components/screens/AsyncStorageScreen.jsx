import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";

class AsyncStorageScreen extends Component {
  state = {
    name: "Ola ke Ase",
  };
  componentDidMount = () =>
    AsyncStorage.getItem("name").then((value) =>
      this.setState({ name: value })
    );

  setName = (value) => {
    AsyncStorage.setItem("name", value);
    this.setState({ name: value });
  };
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={this.setName}
          />
          <Text>"Ola ke ase"</Text>
        </View>
        <Text> </Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  textInput: {
    margin: 5,
    height: 100,
    borderWidth: 1,
    backgroundColor: "#7685ed",
  },
  main: {
    flex: 1,
    flexDirection: "column",
  },
});
export default AsyncStorageScreen;
