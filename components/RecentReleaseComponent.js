// RecentReleaseComponent.js
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { getLatestRelease } from "../SpotifyData";
import artistsData from "../data";

const RecentReleaseComponent = ({ artist }) => {
  const [latestRelease, setLatestRelease] = useState(null);
  const [artistDetails, setArtistDetails] = useState(null);

  useEffect(() => {
    getLatestRelease(artist.spotifyId)
      .then((release) => {
        setLatestRelease(release);

        const foundArtist = artistsData.find(
          (item) => item.spotifyId === artist.spotifyId
        );
        setArtistDetails(foundArtist);
      })
      .catch((err) => console.log(err));
  }, [artist.spotifyId]);

  if (!latestRelease || !artistDetails) {
    return <Text>Loading...</Text>;
  }
  if (!latestRelease?.name || !artistDetails?.name) {
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
