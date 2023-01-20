import { StyleSheet, View, Text, Image } from "react-native";

import BubbleButton from "../components/ui/BubbleButton";

const LandingScreen = ({ navigation }) => {
  function pressHandler() {
    navigation.navigate("LoginScreen");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/brownCat.png")}
        />
      </View>

      <Text style={styles.text}>Welcome to Cat Cafe!</Text>

      <View style={styles.button}>
        <BubbleButton onPress={pressHandler}>Meow!</BubbleButton>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    marginHorizontal: 20,
    marginTop: -40,
    width: 150,
    height: 220,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2A0800",
    textAlign: "center",
    marginVertical: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 100,
  },
});
