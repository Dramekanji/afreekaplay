import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getPlaylistsByCategory } from "../SpotifyData";

const PlaylistScreen = () => {
  const [afroPlaylists, setAfroPlaylists] = useState([]);
  const [caribbeanPlaylists, setCaribbeanPlaylists] = useState([]);
  const [jazzPlaylists, setJazzPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const afro = await getPlaylistsByCategory("afro");
      const caribbean = await getPlaylistsByCategory("Caribbean");
      const jazz = await getPlaylistsByCategory("jazz");
      setAfroPlaylists(afro);
      setCaribbeanPlaylists(caribbean);
      setJazzPlaylists(jazz);
    };
    fetchPlaylists();
  }, []);

  const renderPlaylistItem = ({ item }) => {
    const imageUrl = item.images[0]?.url;
    return (
      <View style={styles.playlistItem}>
        <TouchableOpacity>
          <Image source={{ uri: imageUrl }} style={styles.playlistImage} />
        </TouchableOpacity>
        <Text style={styles.playlistText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <LinearGradient style={styles.container} colors={["#000814", "#231942"]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Header and other components */}
        <Text style={styles.headerText}>PLAYLISTS</Text>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>Artistes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>Albums</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>Singles</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ paddingBottom: 200 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.playlistSection}>
            <Text style={styles.header}>Afro</Text>
            <FlatList
              horizontal
              data={afroPlaylists}
              renderItem={renderPlaylistItem}
              keyExtractor={(item, index) => `afro-${index}`}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View>
            <Text style={styles.header}>Caribbean</Text>
            <FlatList
              horizontal
              data={caribbeanPlaylists}
              renderItem={renderPlaylistItem}
              keyExtractor={(item, index) => `caribbean-${index}`}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View>
            <Text style={styles.header}>Jazz</Text>
            <FlatList
              horizontal
              data={jazzPlaylists}
              renderItem={renderPlaylistItem}
              keyExtractor={(item, index) => `jazz-${index}`}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PlaylistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  headerBtn: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#c8b6ff",
  },
  headerBtnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  playlistSection: {
    marginTop: 20,
  },
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    // marginTop: 20,
    marginHorizontal: 15,
  },
  playlistItem: {
    width: 150, // Adjusted width
    marginRight: 20, // Increased right margin for spacing between items
    padding: 10, // Added padding around each playlist item
  },
  playlistImage: {
    width: 150, // Adjusted width to fit within padded item
    height: 150, // Adjusted height
    // borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  playlistText: {
    color: "white",
    textAlign: "center",
    marginTop: 5, // Added a top margin to space out the text from the image
    fontWeight: "bold",
  },
});
