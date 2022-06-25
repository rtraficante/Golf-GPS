import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCourse, setHoles } from "../slices/course";

const CourseSelect = ({ navigation, course, holes }) => {
  const dispatch = useDispatch();
  const { street, city, state, zip } = course.address;
  return (
    <TouchableOpacity
      onPress={async () => {
        const { data } = await axios.get(
          `http://localhost:3000/api/courses/${course.id}/holes`
        );
        dispatch(setHoles(data));
        navigation.navigate("GPS");
      }}
      style={[
        tw`p-2 pl-6 pb-8 pt-4 bg-green-400 m-2 border rounded-xl shadow-2xl`,
      ]}
    >
      <View>
        <Text style={tw`mt-2 text-lg font-semibold`}>{course.name}</Text>
        <Text>{street}</Text>
        <Text>
          {city}, {state}, {zip}
        </Text>
        <Text>{course.phonenumber}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CourseSelect;

const styles = StyleSheet.create({});
