import React, { Component } from "react";
import { Switch, View, Text, StyleSheet, Button } from "react-native";
import StylingComponent from "../parts/StylingComponent";

class StylingScreen extends Component {
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
        <StylingComponent
          name={this.state.name}
          changeTitle={this.changeTitle}
        />
        <Text> </Text>
        <Button title="Volver" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
  },
});

export default StylingScreen;
