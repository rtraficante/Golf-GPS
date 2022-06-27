import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const HoleNumberBox = ({ holeNumber }) => {
  return (
    <SafeAreaView
      style={tw`pb-10 bg-black top-10 w-32 text-center rounded-lg h-12 flex items-center justify-center opacity-80 mt-2`}
    >
      <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
        Hole:
      </Text>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 18,
        }}
      >
        {holeNumber}
      </Text>
    </SafeAreaView>
  );
};

export default HoleNumberBox;

const styles = StyleSheet.create({});
