import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import listitems from "../../data/listview.js";

const alertItemName = (item) => {
  alert(item.name);
};

const ListViewScreen = ({ navigation }) => {
  return (
    <View>
      <View>
        {listitems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => alertItemName(item)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text> </Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: "#d9f9b1",
    alignItems: "center",
  },
  text: {
    color: "#4f603c",
  },
});
export default ListViewScreen;
