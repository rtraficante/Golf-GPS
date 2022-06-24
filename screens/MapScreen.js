import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import courseData from "../data.json";
import GpsMap from "../components/GpsMap";
import GpsMenu from "../components/GpsMenu";
import { useSelector } from "react-redux";

const MapScreen = () => {
  const holes = useSelector((state) => state.course.holes);
  const [hole, setHole] = useState(holes[0]);

  return (
    <View>
      <GpsMap hole={hole} />
      <GpsMenu setHole={setHole} courseData={courseData} hole={hole} />
    </View>
  );
};

export default MapScreen;
