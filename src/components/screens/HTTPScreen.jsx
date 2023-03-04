import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class HTTPScreen extends Component {
  state = {
    data: "",
  };
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <View>
        <Text>{this.state.data.title}</Text>
        <Text> </Text>
        <Text>{this.state.data.body}</Text>
        <Text> </Text>
        <Button title="Volver" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

export default HTTPScreen;
