import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import categories from "../CategoriesData";

const SearchScreen = () => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[styles.category, { backgroundColor: item.color }]}
    >
      <Image style={styles.categoryImage} source={{ uri: item.image }} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={["#000814", "#231942"]} style={styles.container}>
      <SafeAreaView>
        <View style={styles.searchContainer}>
          <Text style={styles.header}>RECHERCHER</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Artistes, Sons, Albums, et Plus"
            placeholderTextColor="#888"
          />
        </View>
        <Text style={styles.browseTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 5,
    marginTop: 30,
  },
  searchContainer: {
    paddingHorizontal: 15,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    color: "white",
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 20,
  },
  browseTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  category: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    borderRadius: 5,
    opacity: 0.5,
  },
  categoryText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    zIndex: 1,
  },
});
