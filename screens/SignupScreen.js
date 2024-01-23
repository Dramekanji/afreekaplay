import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInputAnimation = useRef(new Animated.Value(0)).current;
  const passwordInputAnimation = useRef(new Animated.Value(0)).current;

  const onFocus = (animation) => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const onBlur = (animation) => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const emailBorderColor = emailInputAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["white", "#c8b6ff"],
  });

  const passwordBorderColor = passwordInputAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["white", "#c8b6ff"],
  });

  return (
    <LinearGradient style={styles.container} colors={["#000814", "#231942"]}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/afreekaplay-logo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.headerText}>
          L'accés à de la musique de qualité, simplifié.
        </Text>

        {/* Email input */}
        <View>
          <Text style={styles.connexionText}>Creer un compte</Text>
        </View>
        <Animated.View
          style={[
            styles.inputContainer,
            { borderBottomColor: emailBorderColor },
          ]}
        >
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="#c7c7c7"
            keyboardType="email-address"
            onFocus={() => onFocus(emailInputAnimation)}
            onBlur={() => onBlur(emailInputAnimation)}
          />
        </Animated.View>

        {/* Password input */}
        <Animated.View
          style={[
            styles.inputContainer,
            { borderBottomColor: passwordBorderColor },
          ]}
        >
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Mot de Passe"
            placeholderTextColor="#c7c7c7"
            secureTextEntry
            onFocus={() => onFocus(passwordInputAnimation)}
            onBlur={() => onBlur(passwordInputAnimation)}
          />
        </Animated.View>

        {/* Include your buttons here */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate("Artist Selection")}
          >
            <Text style={styles.buttonText}>Continuer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lastContainer}>
          <Text style={styles.lastText}>Vous avez déjà un compte?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.lastText2}>Connexion</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50, // Spacing from logo to header text
    marginTop: -50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 60, // Spacing from header text to inputs
  },
  connexionText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginHorizontal: 30, // Adjust this to control the length of the line
    marginVertical: 10,
  },
  input: {
    height: 40,
    marginVertical: 10,

    color: "white",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 40,
  },
  signupButton: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "#231942",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  lastContainer: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
  lastText: {
    color: "white",
    marginRight: 5,
  },
  lastText2: {
    color: "#be95c4",
    fontWeight: "bold",
  },
});
