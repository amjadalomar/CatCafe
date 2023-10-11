import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

const Order = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Order</Text>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.skin,
    alignItems: "center",
    justifyContent: "center",
  },
});
