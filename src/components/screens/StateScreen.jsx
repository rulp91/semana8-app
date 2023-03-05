import React, { Component } from "react";
import { Switch, View, Text, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

class StateScreen extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
  }

  changeTitle = (e) => {
    let state =
      this.state.name == "State actualizado"
        ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        : "State actualizado";
    this.setState({ name: state });
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <Text>Pulsar el boton para probar el estado</Text>
          <Text> </Text>
          <Text>{this.state.name}</Text>
          <Text> </Text>
          <Button onPress={this.changeTitle} title="Pulsar" />
        </View>

        <Text> </Text>
        <Button title="Volver" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "powderblue",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    flexDirection: "column",
  },
});

/*
const StateScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};
*/
export default StateScreen;
