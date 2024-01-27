import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { getAlbumById } from "../SpotifyData";
import { LinearGradient } from "expo-linear-gradient";

const LibraryScreen = () => {
  const [recentlyAdded, setRecentlyAdded] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const albumIds = [
        "4gWMMrpY17Rm86gqkCcEdX",
        "6ongVxLqa402q9b9zqGXlV",
        "3LynbWeuP62D1xWOspzwI1",
        "38FXkmMvBUy2KoLP8Bahw3",
        "5yDJgg70z70VChR3TFZoNx",
      ];
      const albumsDetails = await Promise.all(
        albumIds.map((id) => getAlbumById(id))
      );
      setRecentlyAdded(albumsDetails);
    };

    fetchAlbums();
  }, []);

  const renderMusicItem = ({ item }) => (
    <View style={styles.musicItem}>
      <TouchableOpacity style={styles.touchableArea}>
        <Image source={{ uri: item.image }} style={styles.artwork} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.artist}>{item.artist}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient style={styles.container} colors={["#000814", "#231942"]}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.header}>BIBLIOTHÈQUE</Text>
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
        <FlatList
          data={recentlyAdded}
          renderItem={renderMusicItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          style={{ marginBottom: 50 }}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    marginTop: 30,
  },
  header: {
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
  musicItem: {
    flex: 1,
    margin: 10,
    maxWidth: "50%",
  },
  touchableArea: {
    alignItems: "center",
  },
  artwork: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 8,
  },
  infoContainer: {
    alignItems: "center",
    paddingTop: 10,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  artist: {
    color: "grey",
    fontSize: 14,
  },
  row: {
    justifyContent: "space-between",
  },
});
