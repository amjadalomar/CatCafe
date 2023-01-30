import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from "react-native";

import Colors from "../../constants/colors";
import BubbleButton from "../../components/ui/BubbleButton";
import KeyBoardComponent from "../../components/functionality/KeyboardComponent";

const CreateAccount = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const userName = useRef();
  const [password, setPassword] = useState("");
  const passWord = useRef();
  const [repassword, setRepassword] = useState("");
  const repassWord = useRef();

  function createAccountButtonHandler() {
    navigation.navigate("FinishProfile");
  }

  function loginButtonHandler() {
    navigation.navigate("LoginScreen");
  }

  return (
    <KeyBoardComponent>
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView
          style={styles.screen}
          behavior="position"
          keyboardVerticalOffset={-100}
        >
          {/* Cat Cafe Logo*/}

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/images/brownCat.png")}
            />
          </View>

          {/* Login Text Inputs and Buttons */}

          <View style={{ marginTop: 20 }}>
            <Text style={styles.createText}>Create your Cat Cafe Account:</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                returnKeyType="next"
                onSubmitEditing={() => {
                  userName.current.focus();
                }}
                blurOnSubmit={false}
                placeholder="Email Address"
                placeholderTextColor={"white"}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                returnKeyType="next"
                ref={userName}
                onSubmitEditing={() => {
                  passWord.current.focus();
                }}
                blurOnSubmit={false}
                placeholder="Username"
                placeholderTextColor={"white"}
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                returnKeyType="next"
                ref={passWord}
                onSubmitEditing={() => {
                  repassWord.current.focus();
                }}
                blurOnSubmit={false}
                placeholder="Password"
                placeholderTextColor={"white"}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                ref={repassWord}
                placeholder="Confirm Password"
                placeholderTextColor={"white"}
                value={repassword}
                onChangeText={(text) => setRepassword(text)}
                secureTextEntry
              />
            </View>

            <View style={styles.createAccountButtonContainer}>
              <BubbleButton onPress={createAccountButtonHandler}>
                Create Account
              </BubbleButton>
            </View>
          </View>

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
      </ScrollView>
    </KeyBoardComponent>
  );
};

export default CreateAccount;

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
  createText: {
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
  logInContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  createAccountButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 16,
  },
  pressed: {
    opacity: 0.75,
  },
  signInWith: {
    textAlign: "center",
    color: "#2A0800",
    fontSize: 14,
  },
});
