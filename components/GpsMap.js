import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import React, { useState } from "react";

export default function GpsMap() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="satellite"
        showUserLocation={true}
        camera={{
          center: {
            latitude: 40.745,
            longitude: -73.455,
          },
          altitude: 1000,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
