import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

class PickerScreen extends Component {
  state = { user: "" };
  updateUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Picker
            selectedValue={this.state.user}
            onValueChange={this.updateUser}
          >
            <Picker.Item label="Steve" value="steve" />
            <Picker.Item label="Ellen" value="ellen" />
            <Picker.Item label="Maria" value="maria" />
          </Picker>
          <Text style={styles.text}>{this.state.user}</Text>
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
export default PickerScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    color: "red",
  },
});
