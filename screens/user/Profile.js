import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.skin,
    alignItems: "center",
    justifyContent: "center",
  },
});
