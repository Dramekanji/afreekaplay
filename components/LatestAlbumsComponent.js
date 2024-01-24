// LatestAlbumsComponent.js
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { getLatestAlbums } from "../SpotifyData"; // Function to fetch the latest albums
import artistsData from "../data";

const LatestAlbumsComponent = ({ spotifyId }) => {
  const [latestAlbum, setLatestAlbum] = useState(null);
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    getLatestAlbums(spotifyId)
      .then((album) => {
        setLatestAlbum(album);
        const artistDetails = artistsData.find(
          (artist) => artist.spotifyId === spotifyId
        );
        setArtist(artistDetails);
      })
      .catch((err) => console.log(err));
  }, [spotifyId]);

  if (!latestAlbum || !artist) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={{ uri: latestAlbum.image }} style={styles.image} />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.latestAlbumTxt}
      >
        {latestAlbum.name}
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
  latestAlbumTxt: {
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

export default LatestAlbumsComponent;
