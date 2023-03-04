import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Button,
  Text,
} from "react-native";

class AnimationsScreen extends Component {
  componentWillMount = () => {
    this.animatedWidth = new Animated.Value(50);
    this.animatedHeight = new Animated.Value(100);
  };
  animatedBox = () => {
    Animated.timing(this.animatedWidth, {
      toValue: 200,
      duration: 1000,
    }).start();
    Animated.timing(this.animatedHeight, {
      toValue: 500,
      duration: 500,
    }).start();
  };
  render() {
    const animatedStyle = {
      width: this.animatedWidth,
      height: this.animatedHeight,
    };
    return (
      <View>
        <Text> </Text>
        <TouchableOpacity style={styles.container} onPress={this.animatedBox}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </TouchableOpacity>
        <Text> </Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
export default AnimationsScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "blue",
    width: 50,
    height: 100,
  },
});
