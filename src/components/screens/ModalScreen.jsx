import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Button,
} from "react-native";
class ModalScreen extends Component {
  state = {
    modalVisible: false,
  };
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              console.log("El modal ha sido cerrado.");
            }}
          >
            <View style={styles.modal}>
              <Text style={styles.text}>El modal está abierto!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.toggleModal(!this.state.modalVisible);
                }}
              >
                <Text style={styles.text}>Cerrar modal</Text>
              </TouchableHighlight>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.toggleModal(true);
            }}
          >
            <Text style={styles.text}>Abrir modal</Text>
          </TouchableHighlight>
        </View>
        <Text> </Text>
        <Button title="Volver" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ede3f2",
    padding: 100,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f7021a",
    padding: 100,
  },
  text: {
    backgroundColor: "#898f15",
    color: "#3f2949",
    marginTop: 10,
  },
});
