import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <LinearGradient colors={["#77A1D3", "#79CBCA"]} style={styles.container}>
      <View>
        <StatusBar barStyle="dark-content"></StatusBar>
        <Text style={styles.text}>Getting the Weather</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});
