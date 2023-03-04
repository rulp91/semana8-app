import React from "react";
import { Image, Text, View, Button } from "react-native";

const ImagesScreen = ({ navigation }) => {
  return (
    <View>
      <Text> </Text>
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text> </Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default ImagesScreen;
