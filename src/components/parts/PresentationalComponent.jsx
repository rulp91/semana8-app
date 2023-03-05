import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const PresentationalComponent = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text>Pulsar el boton para probar el estado</Text>
        <Text> </Text>
        <Text>{props.name}</Text>
        <Text> </Text>
        <Button onPress={props.changeTitle} title="Pulsar" />
      </View>
    </View>
  );
};
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
export default PresentationalComponent;
