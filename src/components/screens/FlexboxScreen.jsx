import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

const FlexboxScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.redbox}>
          <Text>Caja roja</Text>
        </View>
        <View style={styles.bluebox}>
          <Text>Caja azul</Text>
        </View>
        <View style={styles.blackbox}>
          <Text style={styles.textitem}>Caja negra</Text>
        </View>
      </View>
      <Text> </Text>
      <View style={styles.container2}>
        <View style={styles.redbox}>
          <Text>Caja roja</Text>
        </View>
        <View style={styles.bluebox}>
          <Text>Caja azul</Text>
        </View>
        <View style={styles.blackbox}>
          <Text style={styles.textitem}>Caja negra</Text>
        </View>
      </View>
      <Text> </Text>
      <View>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    height: 600,
  },
  container2: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "yellow",
    height: 600,
  },
  redbox: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  bluebox: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  blackbox: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  textitem: {
    color: "white",
  },
});

export default FlexboxScreen;
