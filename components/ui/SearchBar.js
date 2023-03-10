import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/colors";

const SearchBar = () => {
  return (
    <View style={styles.searchSection}>
      <Ionicons
        style={styles.searchIcon}
        name="search"
        size={20}
        color="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={Colors.backupRegularText}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A0800",
    borderColor: Colors.accentLilac,
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 20,
    height: 50,
    width: "85%",
    marginBottom: 18,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    borderRadius: 50,
    backgroundColor: "#2A0800",
  },
});
