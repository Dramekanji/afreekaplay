import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const PlaylistScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={["#000814", "#231942"]}>
      <SafeAreaView>
        <Text>PlaylistScreen</Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PlaylistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
