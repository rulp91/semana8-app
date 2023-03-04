import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import listitems from "../../data/scrollview.js";

const ScrollViewScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        {listitems.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
      <Text> </Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 1,
    backgroundColor: "#d2f7f1",
  },
});
export default ScrollViewScreen;
