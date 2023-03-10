import { View, Pressable, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const BubbleButton = ({ children, onPress }) => {
  return (
    <View style={styles.signInButtonColorContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.signInButton, styles.pressed] : styles.signInButton
        }
        onPress={onPress}
      >
        <Text style={styles.signInText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default BubbleButton;

const styles = StyleSheet.create({
  signInButtonColorContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 100,
  },
  signInButton: {
    backgroundColor: Colors.primary500,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.accentCoral,
  },
  signInText: {
    color: "#2A0800",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
