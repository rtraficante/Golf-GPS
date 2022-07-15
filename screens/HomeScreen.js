import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.introText}>Welcome To GolfGPS</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigation.navigate("Start New Round")}
          style={styles.button}
        >
          <Text style={styles.text}>Start New Round</Text>
        </Pressable>
      </View>
      {/* <Button
        title="View Rounds"
        onPress={() => navigation.navigate("Rounds")}
      /> */}
      {/* <Button title="View Stats" />
      <Button title="My Profile" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    alignItems: "center",
  },
  introText: {
    marginTop: 24,
    marginBottom: 30,
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
