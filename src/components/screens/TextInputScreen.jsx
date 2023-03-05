import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

const TextInputScreen = ({ navigation }) => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleEmail = (text) => {
    setState({ email: text, password: state.password });
  };

  const handlePassword = (text) => {
    setState({ email: state.email, password: text });
  };

  const login = (email, pass) => {
    alert("email: " + email + " password: " + pass);
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          value={state.email}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={handleEmail}
        />

        <TextInput
          value={state.password}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={handlePassword}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => login(state.email, state.password)}
        >
          <Text style={styles.submitButtonText}> Enviar </Text>
        </TouchableOpacity>
      </View>

      <Text> </Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});

export default TextInputScreen;
