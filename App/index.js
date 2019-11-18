import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>75</Text>
        <Row>
          <Button text="C" onPress={() => alert("TODO")} />
          <Button text="+/-" onPress={() => alert("TODO")} />
          <Button text="%" onPress={() => alert("TODO")} />
          <Button text="/" onPress={() => alert("TODO")} />
        </Row>

        <Row>
          <Button text="7" onPress={() => alert("TODO")} />
          <Button text="8" onPress={() => alert("TODO")} />
          <Button text="9" onPress={() => alert("TODO")} />
          <Button text="x" onPress={() => alert("TODO")} />
        </Row>

        <Row>
          <Button text="4" onPress={() => alert("TODO")} />
          <Button text="5" onPress={() => alert("TODO")} />
          <Button text="6" onPress={() => alert("TODO")} />
          <Button text="-" onPress={() => alert("TODO")} />
        </Row>

        <Row>
          <Button text="1" onPress={() => alert("TODO")} />
          <Button text="2" onPress={() => alert("TODO")} />
          <Button text="3" onPress={() => alert("TODO")} />
          <Button text="+" onPress={() => alert("TODO")} />
        </Row>

        <Row>
          <Button text="0" onPress={() => alert("TODO")} />
          <Button text="." onPress={() => alert("TODO")} />
          <Button text="=" onPress={() => alert("TODO")} />
        </Row>
      </SafeAreaView>
    </View>
  );
}
