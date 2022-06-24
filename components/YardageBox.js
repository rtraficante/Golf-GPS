import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const YardageBox = ({ distance }) => {
  return (
    <SafeAreaView
      style={tw`pb-10 bg-black top-10 w-32 text-center rounded-lg h-12 flex items-center justify-center opacity-80 mt-2`}
    >
      <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
        Yards:
      </Text>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 18,
        }}
      >
        {Math.floor(Number(distance))}
      </Text>
    </SafeAreaView>
  );
};

export default YardageBox;

const styles = StyleSheet.create({});
