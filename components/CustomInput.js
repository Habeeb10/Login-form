import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export const ItemCard = ({ icon, title, time, onPress }) => {
  return (
    <TouchableOpacity style={styles.Abnormal} onPress={onPress}>
      {icon}
      <View style={styles.activity}>
        <Text> {title} </Text>
        <Text>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
