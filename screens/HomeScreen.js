import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ArtistComponent from "../components/ArtistComponent";
import RecentReleaseComponent from "../components/RecentReleaseComponent";
import LatestAlbumsComponent from "../components/LatestAlbumsComponent";
import artistsData from "../data";

const getRandomArtists = (artists, numberOfArtists) => {
  return [...artists].sort(() => 0.5 - Math.random()).slice(0, numberOfArtists);
};

const HomeScreen = () => {
  const numberOfArtistsToShow = 5;
  const featuredArtists = getRandomArtists(artistsData, numberOfArtistsToShow);
  const recentReleases = getRandomArtists(artistsData, numberOfArtistsToShow);
  const latestAlbums = getRandomArtists(artistsData, numberOfArtistsToShow);

  return (
    <LinearGradient style={styles.container} colors={["#000814", "#231942"]}>
      <SafeAreaView>
        <Text style={styles.headerText}>DECOUVREZ</Text>
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
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <Text style={styles.sectionTitle}>Artistes En Vedette</Text>
          <FlatList
            data={featuredArtists}
            renderItem={({ item }) => <ArtistComponent artist={item} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.featuredArtistsList}
          />

          <Text style={styles.sectionTitle}>Nouveaux singles</Text>
          <FlatList
            data={recentReleases}
            renderItem={({ item }) => (
              <RecentReleaseComponent spotifyId={item.spotifyId} />
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.recentReleasesList}
          />
          <Text style={styles.sectionTitle}>Albums Recents</Text>
          <FlatList
            data={latestAlbums}
            renderItem={({ item }) => (
              <LatestAlbumsComponent spotifyId={item.spotifyId} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

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
  sectionTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
  scrollView: {
    marginBottom: 50,
  },
  featuredArtistsList: {},
  recentReleasesList: {},
});

export default HomeScreen;
