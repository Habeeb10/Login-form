import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Abnormal, Heart, Up } from "../assets/svg";
import { StatusBar } from "expo-status-bar";
import { ItemCard } from "../cnmponents/CustomInput";

const EventList = [
  {
    icon: <Abnormal />,
    title: "Abnormal Activity",
    time: "Today 20:28",
  },
  {
    icon: <Up />,
    title: "Up at Night",
    time: "Yesterday 04:14",
  },
  {
    icon: <Heart />,
    title: "Heart rate spike",
    time: "Today 20:28",
  },

  {
    icon: <Abnormal />,
    title: "Abnormal Activity",
    time: "Today 20:28",
  },
  {
    icon: <Up />,
    title: "Up at Night",
    time: "Yesterday 04:14",
  },
  {
    icon: <Up />,
    title: "Up at Night",
    time: "Yesterday 04:14",
  },
];

export default function Events({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.cont}>
        <Text style={styles.gloria}> Gloria Thompson</Text>
        <Text style={styles.events}>Events</Text>
      </View>
      {EventList.map((item, index) => {
        return (
          <ItemCard
            key={index}
            icon={item.icon}
            title={item.title}
            time={item.time}
            onPress={() => navigation.navigate("second", { title: item.title })}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEEF9",
  },
  cont: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    height: 60,
  },
  gloria: {
    marginTop: 10,
  },
  events: {
    fontWeight: "bold",
    fontSize: 20,
  },
  Abnormal: {
    backgroundColor: "#FFFFFF",
    marginTop: 30,
    padding: 16,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  activity: {
    marginLeft: 20,
  },
});
