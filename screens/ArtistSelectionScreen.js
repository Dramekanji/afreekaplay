import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import artistsData from "../data";
import { useNavigation } from "@react-navigation/native";

const numColumns = 3; // Number of columns in the grid

const ArtistSelectionScreen = () => {
  const navigation = useNavigation();
  const [selectedArtists, setSelectedArtists] = useState(new Set());

  const selectArtist = (artistId) => {
    const newSelectedArtists = new Set(selectedArtists);
    if (newSelectedArtists.has(artistId)) {
      newSelectedArtists.delete(artistId);
    } else {
      newSelectedArtists.add(artistId);
    }
    setSelectedArtists(newSelectedArtists);
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedArtists.has(item.id);
    return (
      <TouchableOpacity
        style={styles.artistItem}
        onPress={() => selectArtist(item.id)}
      >
        <Image
          style={[
            styles.artistImage,
            {
              // Apply conditional styles inline
              borderWidth: isSelected ? 3 : 0,
              borderColor: isSelected ? "#c8b6ff" : "transparent",
            },
          ]}
          source={{ uri: item.image }}
        />
        <Text
          style={[styles.artistName, isSelected && styles.artistNameSelected]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Choisissez 3 artistes ou plus</Text>
      </View>
      <FlatList
        data={artistsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContentContainer}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.buttonText}>Continuer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
  artistItem: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    alignItems: "center",
  },
  artistImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // Removed the dynamic styles from here
  },

  artistName: {
    color: "white",
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
  artistNameSelected: {
    fontWeight: "bold",
  },
  flatListContentContainer: {
    paddingBottom: 50, // Add padding at the bottom to avoid overlap
  },

  buttonContainer: {
    position: "absolute", // Position the button container
    bottom: 0, // At the bottom of the SafeAreaView
    left: 0,
    right: 0,
    backgroundColor: "transparent",
  },
  continueButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "#231942",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ArtistSelectionScreen;
