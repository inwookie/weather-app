import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "thunderstorm-outline",
    gradient: ["#525252", "#3d72b4"],
    title: "Thunderstorm",
    subtitle: "Just stay home.",
  },
  Drizzle: {
    iconName: "umbrella-outline",
    gradient: ["#085078", "#85D8CE"],
    title: "Drizzle",
    subtitle: "Be aware of sudden rainfall.",
  },
  Rain: {
    iconName: "rainy-outline",
    gradient: ["#2c3e50", "#2980b9"],
    title: "Rain",
    subtitle: "Hope you got an umbrella.",
  },
  Snow: {
    iconName: "snow-outline",
    gradient: ["#83a4d4", "#E2E2E2"],
    title: "Snow",
    subtitle: "It's snowing outside!",
  },
  Atmosphere: {
    iconName: "partly-sunny-outline",
    gradient: ["#FF5F6D", "#FFC371"],
    title: "Atmosphere",
    subtitle: "Have a great day!",
  },
  Clear: {
    iconName: "sunny-outline",
    gradient: ["#FF8008", "#ffe259"],
    title: "Clear",
    subtitle: "Such a great day to walk outside.",
  },
  Clouds: {
    iconName: "cloud-outline",
    gradient: ["#304352", "#859398"],
    title: "Clouds",
    subtitle: "Hmm...",
  },
  Mist: {
    iconName: "water-outline",
    gradient: ["#1e3c72", "#bdc3c7"],
    title: "Mist",
    subtitle: "Be careful where you are going.",
  },
  Smoke: {
    iconName: "skull-outline",
    gradient: ["#333333", "#FDC830"],
    title: "Smoke",
    subtitle: "You might need a mask.",
  },
  Haze: {
    iconName: "reorder-three-outline",
    gradient: ["#ADA996", "#DBDBDB"],
    title: "Haze",
    subtitle: "Staying in is a great option.",
  },
  Dust: {
    iconName: "reorder-three-outline",
    gradient: ["#BA8B02", "#181818"],
    title: "Dust",
    subtitle: "You might need a mask.",
  },
  Fog: {
    iconName: "reorder-three-outline",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "Fog",
    subtitle: "Hard to see.",
  },

  Sand: {
    iconName: "reorder-three-outline",
    gradient: ["#3E5151", "#DECBA4"],
    title: "Sand",
    subtitle: "You might taste a sand.",
  },
  Ash: {
    iconName: "flame-outline",
    gradient: ["#556270", "#FF6B6B"],
    title: "Ash",
    subtitle: "You better stay in.",
  },
  Squall: {
    iconName: "cloud",
    gradient: ["#292E49", "#BBD2C5"],
    title: "Squall",
    subtitle: "What's happening?",
  },
  Tornado: {
    iconName: "filter",
    gradient: ["#536976", "#292E49"],
    title: "Tornado",
    subtitle: "Get help!",
  },
};

export default function Weather({ temp, condition, name, temp_min, temp_max }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.topContainer}>
        <Ionicons size={20} name={"map"} color="white" />
        <Text style={styles.locationText}>{name}</Text>
      </View>
      <View style={styles.halfContainer}>
        <Ionicons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        ></Ionicons>
        <Text style={styles.temp}>{temp}°C</Text>
        <View style={styles.tempDif}>
          <Text style={styles.tempDifText}>H:{temp_max}°</Text>
          <Text style={styles.tempDifText}>L:{temp_min}°</Text>
        </View>
      </View>
      <View style={{ ...styles.textContainer, ...styles.bottomContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontSize: 46,
    color: "white",
    // marginLeft: 5,
    marginTop: 10,
    fontWeight: "400",
  },
  topContainer: {
    flex: 1,
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    marginBottom: 20,
  },
  halfContainer: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    color: "white",
    fontWeight: "300",
    fontSize: 20,
    textAlign: "left",
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1,
  },
  locationText: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 7,
  },
  tempDif: {
    flexDirection: "row",
    color: "white",
  },
  tempDifText: {
    fontSize: 15,
    color: "white",
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
});
