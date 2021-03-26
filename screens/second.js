import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Abnormal, Arrow, Heart, Up } from "../assets/svg";
import { StatusBar } from "expo-status-bar";

export default function Second({ navigation, route }) {
  const { title } = route.params;
  const icon = getIcon(title);
  return (
    <View style={styles.cont}>
      <StatusBar style={"light"} />
      <View style={styles.thompson}>
        <View style={styles.cont2}>
          <TouchableOpacity onPress={() => navigation.navigate("first")}>
            <Arrow />
          </TouchableOpacity>
          <View style={styles.ent}>
            <Text style={styles.tom}>Gloria Thompson</Text>
            <Text style={styles.event}> Events</Text>
          </View>
        </View>
        {icon}
      </View>
      <View style={styles.butt}>
        <Text style={styles.abn}>{title}</Text>
        <Text style={styles.have}>
          There have been abnormalities in their usual behaviour.
        </Text>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.visual}>Visualise</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ledge}>
          <Text style={styles.now}>Acknowledge</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const getIcon = (title) => {
  switch (title) {
    case "Abnormal Activity":
      return (
        <Abnormal style={styles.circle} stroke="white" width={90} height={90} />
      );
    case "Up at Night":
      return <Up style={styles.circle} stroke="white" width={90} height={90} />;
    case "Heart rate spike":
      return (
        <Heart style={styles.circle} stroke="white" width={90} height={90} />
      );

    default:
      return null;
  }
};

const styles = StyleSheet.create({
  visual: {
    color: "white",
  },
  butt: {
    paddingHorizontal: 30,
    marginTop: 50,
  },
  circle: {
    alignSelf: "center",
    marginBottom: 20,
  },
  cont2: {
    flexDirection: "row",
    marginBottom: 30,
  },
  ent: {
    marginLeft: 120,
    alignItems: "center",
  },
  ledge: {
    marginTop: 25,
    backgroundColor: "#F5F6F7",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  touch: {
    backgroundColor: "#6D2077",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginTop: 330,
  },
  have: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "400",
  },
  abn: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 50,
  },
  cont: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#E5E5E5",
  },
  thompson: {
    backgroundColor: "#00AEC7",
    width: "100%",
    paddingTop: 15,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  event: {
    fontWeight: "bold",
    color: "white",
  },
  tom: {
    color: "white",
  },
});
