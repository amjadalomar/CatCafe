import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.skin,
    alignItems: "center",
    justifyContent: "center",
  },
});
