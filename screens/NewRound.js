import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import CourseSelect from "../components/CourseSelect";
import mainCourseData from "../mainCourseData.json";
import holeData from "../data.json";

export default function NewRound({ navigation }) {
  const [course, setCourse] = useState(mainCourseData);
  const [holes, setHoles] = useState(holeData.resources);


  return (
    <View>
      <CourseSelect course={course} holes={holes} navigation={navigation} />
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
