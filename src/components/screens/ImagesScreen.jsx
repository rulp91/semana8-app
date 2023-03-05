import React from "react";
import { Image, Text, View, Button, StyleSheet } from "react-native";

const ImagesScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Text> </Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: "#c9ffbb",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
export default ImagesScreen;
