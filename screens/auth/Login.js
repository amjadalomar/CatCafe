import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("BottomTabNavigator");
        }}
      >
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: Colors.coral,
    borderRadius: 15,
  },
  loginText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "500",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
