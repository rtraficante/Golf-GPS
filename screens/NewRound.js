import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import CourseSelect from "../components/CourseSelect";
import axios from "axios";

export default function NewRound({ navigation }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getData() {
      const courses = await axios.get("http://localhost:3000/api/courses/");
      setCourses(courses.data);
    }
    getData();
  }, []);

  const coursesData = courses.resources || [];

  return (
    <View>
      {coursesData.map((course) => (
        <CourseSelect key={course.id} course={course} navigation={navigation} />
      ))}
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
