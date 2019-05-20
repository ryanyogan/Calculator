import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Row from "../components/Row";

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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>75</Text>

          <Row>
            <Button text="C" onPress={() => null} />
            <Button text="+/-" onPress={() => null} />
            <Button text="%" onPress={() => null} />
            <Button text="/" onPress={() => null} />
          </Row>

          <Row>
            <Button text="7" onPress={() => null} />
            <Button text="8" onPress={() => null} />
            <Button text="9" onPress={() => null} />
            <Button text="*" onPress={() => null} />
          </Row>

          <Row>
            <Button text="4" onPress={() => null} />
            <Button text="5" onPress={() => null} />
            <Button text="6" onPress={() => null} />
            <Button text="-" onPress={() => null} />
          </Row>

          <Row>
            <Button text="1" onPress={() => null} />
            <Button text="2" onPress={() => null} />
            <Button text="3" onPress={() => null} />
            <Button text="+" onPress={() => null} />
          </Row>

          <Row>
            <Button text="0" size="double" onPress={() => null} />
            <Button text="." onPress={() => null} />
            <Button text="=" onPress={() => null} />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
