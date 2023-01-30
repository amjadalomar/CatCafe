import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from "react-native";

import Colors from "../../constants/colors";
import BubbleButton from "../../components/ui/BubbleButton";
import KeyBoardComponent from "../../components/functionality/KeyboardComponent";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  function loginButtonHandler() {
    navigation.navigate("LoginScreen");
  }

  return (
    <KeyBoardComponent>
      <View style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="padding">
          {/* Cat Cafe Logo */}

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/images/brownCat.png")}
            />
          </View>

          {/* Email Address Input and Button */}

          <View style={{ marginTop: 20 }}>
            <Text style={styles.loginText}>
              Please enter your Email Address:
            </Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor={"white"}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.signInButtonContainer}>
              <BubbleButton>Recover Account</BubbleButton>
            </View>
          </View>

          {/* Other Sign in Options */}

          <View style={styles.logInContainer}>
            <Text style={{ color: "#2A0800", fontSize: 14, marginRight: 5 }}>
              Already have an Account?
            </Text>
            <Pressable
              style={({ pressed }) =>
                pressed
                  ? [
                      {
                        color: Colors.accentLilac,
                        textDecorationLine: "underline",
                      },
                      styles.pressed,
                    ]
                  : [
                      {
                        color: Colors.accentLilac,
                        textDecorationLine: "underline",
                      },
                    ]
              }
              onPress={loginButtonHandler}
            >
              <Text
                style={{
                  color: Colors.accentLilac,
                  textDecorationLine: "underline",
                }}
              >
                Login!
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </KeyBoardComponent>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    marginHorizontal: 20,
    marginTop: 70,
    width: 150,
    height: 220,
  },
  loginText: {
    width: "90%",
    paddingLeft: 40,
    color: "#2A0800",
    alignContent: "flex-end",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 12,
  },
  input: {
    height: 50,
    width: "85%",
    borderColor: Colors.accentLilac,
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 8,
    padding: 8,
    backgroundColor: "#2A0800",
  },
  signInButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 100,
  },
  pressed: {
    opacity: 0.75,
  },
  logInContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  },
});
