import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const StylingComponent = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text> </Text>
        <Text style={styles.myState}>{props.name}</Text>
        <Text> </Text>
        <Button onPress={props.changeTitle} title="Pulsar" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  myState: {
    marginTop: 20,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default StylingComponent;
