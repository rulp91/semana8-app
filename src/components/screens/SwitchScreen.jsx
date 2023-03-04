import React, { Component } from "react";
import { Switch, View, Text, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

class SwitchScreen extends Component {
  //Initial state false for the switch. You can change it to true just to see.
  state = { switchValue: false };

  toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    //which will result in re-render the text
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          {/*Text to show the text according to switch condition*/}
          <Text>{this.state.switchValue ? "Switch  ON" : "Switch  OFF"}</Text>

          {/*Switch with value set in constructor*/}
          {/*onValueChange will be triggered after switch condition changes*/}
          <Switch
            style={{ marginTop: 30 }}
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
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
export default SwitchScreen;
