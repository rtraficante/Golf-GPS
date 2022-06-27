import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React, { useState } from "react";

const GpsMenu = ({ setHole, courseData, hole }) => {
  const [holeNum, setHoleNum] = useState(1);

  const handleHoleChange = (direction) => {
    direction === "next" ? setHoleNum(holeNum + 1) : setHoleNum(holeNum - 1);
    const hole = courseData.resources.find((val) => val.number === holeNum);
    setHole(hole);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        {hole.number === 1 ? (
          <Button style={styles.button} title="Previous" disabled />
        ) : (
          <Button
            style={styles.button}
            color="black"
            title="Previous"
            onPress={() => handleHoleChange("previous")}
          />
        )}
        <Button
          style={styles.button}
          color="black"
          title="Enter Score"
          onPress={() => {}}
        />
        {hole.number === 18 ? (
          <Button style={styles.button} title="Next" disabled />
        ) : (
          <Button
            color="black"
            style={styles.button}
            title="Next"
            onPress={() => handleHoleChange("next")}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default GpsMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    top: 0,
    opacity: "10%",
  },
  button: {
    color: "black",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
