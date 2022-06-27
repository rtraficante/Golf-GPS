import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { selectScorecard, setCourse } from "../slices/course";
import { useSelector } from "react-redux";
import { setScorecard } from "../slices/course";
import tw from "tailwind-react-native-classnames";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import axios from "axios";

const Scorecard = () => {
  const course = useSelector((state) => state.course.course);
  const scorecard = useSelector((state) => state.course.scorecard);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/courses/${course.id}/scorecard`
      );
      setScorecard(data);
    };
    getData();
  });

  const tableHead = ["Hole", "Par", "HCP", "Score"];

  const teeboxes =
    scorecard.holeteeboxes
      .filter((val) => val.color === "Blue")
      .map((val) => {
        return [val.holenumber, val.par, val.handicap, "-"];
      }) || [];

  return (
    <SafeAreaView>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={tableHead} />
        <Rows data={teeboxes} />
      </Table>
    </SafeAreaView>
  );
};

export default Scorecard;

const styles = StyleSheet.create({
  text: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
