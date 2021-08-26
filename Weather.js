import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "thunderstorm-outline",
    gradient: ["#525252", "#3d72b4"],
  },
  Drizzle: {
    iconName: "umbrella-outline",
    gradient: ["#085078", "#85D8CE"],
  },
  Rain: {
    iconName: "rainy-outline",
    gradient: ["#2c3e50", "#2980b9"],
  },
  Snow: {
    iconName: "snow-outline",
    gradient: ["#83a4d4", "#E2E2E2"],
  },
  Atmosphere: {
    iconName: "partly-sunny-outline",
    gradient: ["#FF5F6D", "#FFC371"],
  },
  Clear: {
    iconName: "sunny-outline",
    gradient: ["#FF8008", "#ffe259"],
  },
  Clouds: {
    iconName: "cloud-outline",
    gradient: ["#304352", "#859398"],
  },
  Mist: {
    iconName: "water-outline",
    gradient: ["#1e3c72", "#bdc3c7"],
  },
  Smoke: {
    iconName: "skull-outline",
    gradient: ["#333333", "#FDC830"],
  },
  Haze: {
    iconName: "reorder-three-outline",
    gradient: ["#ADA996", "#DBDBDB"],
  },
  Dust: {
    iconName: "reorder-three-outline",
    gradient: ["#BA8B02", "#181818"],
  },
  Fog: {
    iconName: "reorder-three-outline",
    gradient: ["#757F9A", "#D7DDE8"],
  },

  Sand: {
    iconName: "reorder-three-outline",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Ash: {
    iconName: "flame-outline",
    gradient: ["#556270", "#FF6B6B"],
  },
  Squall: {
    iconName: "cloud",
    gradient: ["#292E49", "#BBD2C5"],
  },
  Tornado: {
    iconName: "filter",
    gradient: ["#536976", "#292E49"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.halfContainer}>
        <Ionicons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        ></Ionicons>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
    // marginLeft: 5,
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
