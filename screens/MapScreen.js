import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GpsMap from "../components/GpsMap";
import GpsMenu from "../components/GpsMenu";
import { useSelector } from "react-redux";

const MapScreen = ({ navigation }) => {
  const holes = useSelector((state) => state.course.holes);
  const course = useSelector((state) => state.course.course);
  const [hole, setHole] = useState(holes.resources[0]);

  return (
    <View>
      <GpsMap hole={hole} />
      <GpsMenu
        setHole={setHole}
        courseData={holes}
        hole={hole}
        navigation={navigation}
      />
    </View>
  );
};

export default MapScreen;
