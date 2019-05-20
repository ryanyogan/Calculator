import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5
  },
  buttonDouble: {
    flex: 0,
    width: Math.floor(screen.width / 2 - 10),
    alignItems: "flex-start",
    paddingLeft: 40
  }
});

export default ({ onPress, text, size }) => {
  const buttonStyles = [styles.button];
  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
