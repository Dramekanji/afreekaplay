// RecentReleaseComponent.js
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { getLatestRelease } from "../SpotifyData"; // Function to fetch the latest release
import artistsData from "../data"; // Assuming this is the path to your artists data

const RecentReleaseComponent = ({ spotifyId }) => {
  const [latestRelease, setLatestRelease] = useState(null);
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    getLatestRelease(spotifyId)
      .then((release) => {
        setLatestRelease(release);
        // Find the artist's details from artistsData
        const artistDetails = artistsData.find(
          (artist) => artist.spotifyId === spotifyId
        );
        setArtist(artistDetails);
      })
      .catch((err) => console.log(err));
  }, [spotifyId]);

  if (!latestRelease || !artist) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={{ uri: latestRelease.image }} style={styles.image} />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.recentReleaseTxt}
      >
        {latestRelease.name}
      </Text>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.artistTxt}>
        {artist.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 5,
    width: 150,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    marginTop: 15,
  },
  recentReleaseTxt: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  artistTxt: {
    fontSize: 12,
    color: "#6c757d",
    marginTop: 5,
  },
});

export default RecentReleaseComponent;
