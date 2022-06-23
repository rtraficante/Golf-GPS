import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

export default function NewRound() {
  const [course, setCourse] = useState();

  return (
    <View>
      <TextInput value={course} style={styles.input} onChangeText={setCourse} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
