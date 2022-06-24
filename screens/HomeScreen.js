import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.introText}>Welcome To GolfGPS</Text>
      <Button
        title="Start New Round"
        onPress={() => navigation.navigate("Start New Round")}
      />
      <Button
        title="View Rounds"
        onPress={() => navigation.navigate("Rounds")}
      />
      <Button title="View Stats" />
      <Button title="My Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "center",
  },
  introText: {
    marginTop: 24,
    fontSize: 30,
    textAlign: "center",
  },
});
