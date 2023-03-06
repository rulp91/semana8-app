import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Button,
  Text,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";

class WebViewScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <WebView source={{ uri: "https://google.com/" }} />
        </SafeAreaView>
        <Text> </Text>
        <Button title="Volver" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    height: 600,
  },
});
