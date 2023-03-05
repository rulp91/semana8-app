import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class HTTPScreen extends Component {
  state = {
    data: "",
  };
  componentDidMount = () => {
    global
      .fetch("https://jsonplaceholder.typicode.com/posts/1", {
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
        <View style={styles.container}>
          <Text>
            El componente realiza una petión al servicio rest
            https://jsonplaceholder.typicode.com/posts/1 y actualiza los textos
            de abajo
          </Text>
        </View>
        <View style={styles.response}>
          <Text> </Text>
          <Text>{this.state.data.title}</Text>
          <Text> </Text>
          <Text>{this.state.data.body}</Text>
          <Text> </Text>
        </View>
        <Button title="Volver" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  response: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
export default HTTPScreen;
