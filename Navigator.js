import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import First from "./screens/first";
import Second from "./screens/second";

const Stack = createStackNavigator();
export default function Navigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="first" component={First} />
      <Stack.Screen name="second" component={Second} />
    </Stack.Navigator>
  );
}
