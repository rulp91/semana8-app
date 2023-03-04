import React from "react";
import {
  View,
  Text,
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import coreconcepts from "../data/core_concepts.js";

const CoreConceptsList = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={coreconcepts}
        style={styles.container}
        renderItem={({
          item: coreconcept,
          onPress,
          backgroundColor,
          textColor,
        }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(coreconcept.route, {
                name: coreconcept.component,
              })
            }
          >
            <View key={coreconcept.id} style={styles.item}>
              <Text style={styles.title}>{coreconcept.component}</Text>
              <Text>{coreconcept.description}</Text>
              <Text>{coreconcept.url}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default CoreConceptsList;
