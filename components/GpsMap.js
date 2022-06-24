import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  SafeAreaView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import { getDistanceFromLatLonInYards } from "../utils";
import YardageBox from "./YardageBox";

export default function GpsMap({ hole }) {
  const lat = (hole.vectors[1].lat + hole.flagcoords.lat) / 2;
  const long = (hole.vectors[1].long + hole.flagcoords.long) / 2;

  const distance = getDistanceFromLatLonInYards(
    hole.vectors[1].lat,
    hole.vectors[1].long,
    hole.flagcoords.lat,
    hole.flagcoords.long
  );

  return (
    <View style={styles.container}>
      <MapView
        provider={"google"}
        style={styles.map}
        mapType="satellite"
        showUserLocation={true}
        camera={{
          center: {
            latitude: lat,
            longitude: long,
          },
          pitch: 0,
          heading: hole.rotation * 50,
          altitude: 900,
          zoom: 17.5,
        }}
      >
        <Marker
          coordinate={{
            latitude: hole.flagcoords.lat,
            longitude: hole.flagcoords.long,
          }}
        />
        <Marker
          coordinate={{
            latitude: hole.vectors[1].lat,
            longitude: hole.vectors[1].long,
          }}
        />
        <YardageBox distance={distance} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMap: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
