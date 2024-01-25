// ArtistComponent.js
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { getArtistData } from "../SpotifyData";

const ArtistComponent = ({ artist }) => {
  const [artistImage, setArtistImage] = useState(artist?.image);

  // Review the artist prop

  useEffect(() => {
    if (artist?.spotifyId) {
      getArtistData(artist.spotifyId)
        .then((data) => {
          if (data.artist.images[0]?.url) {
            setArtistImage(data.artist.images[0].url);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [artist]);

  return (
    <View style={styles.artistContainer}>
      <TouchableOpacity>
        <Image
          source={{ uri: artistImage || "default_image_url" }}
          style={{ width: 150, height: 150, marginBottom: 10 }}
        />
      </TouchableOpacity>
      <Text style={styles.featuredText}>{artist?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  artistContainer: {
    marginHorizontal: 15,
    marginTop: 20,
    width: 150,
  },
  featuredText: { fontSize: 15, color: "white", fontWeight: "bold" },
});

export default ArtistComponent;
