import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient style={styles.container} colors={["#000814", "#231942"]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Add your logo and header text here */}
        <View style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/afreekaplay-logo.png")}
              style={styles.logo}
            />
          </View>
          <Text style={styles.headerText}>Afreekaplay</Text>
          <Text style={styles.subHeaderText}>
            Decouvrez l'univers de la musique Africaine.
          </Text>
        </View>

        {/* Buttons for Login and Sign Up */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.sbuttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-around", // This will distribute space evenly
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 20, // Padding to prevent text touching the edges
  },
  headerText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subHeaderText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  buttonContainer: {
    marginBottom: 50, // Add some bottom margin to lift the buttons up
  },
  loginButton: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 2,
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  sbuttonText: {
    color: "#231942",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: -20, // Adjust this value as needed to move the logo up
  },
  logo: {
    width: 100,
    height: 100,
  },
});
