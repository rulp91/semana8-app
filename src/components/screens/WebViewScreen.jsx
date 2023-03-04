import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Button,
  Text,
} from "react-native";
import WebView from "react-native-webview";
class WebViewScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{
            uri: "https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint",
          }}
        />
        <Text> </Text>
        <Button title="Volver" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    height: 350,
  },
});
