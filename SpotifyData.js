import { encode as btoa } from "base-64";
import axios from "axios";

const clientId = "9e15510cb28846c381cda09cdfbdb385";
const clientSecret = "003f74aef90c45f99d79109171acd7a7";

async function getAccessToken() {
  const basicAuth = btoa(`${clientId}:${clientSecret}`);
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${basicAuth}`,
      },
    }
  );
  return response.data.access_token;
}

async function getArtistData(artistId) {
  const accessToken = await getAccessToken();
  const artistResponse = await axios.get(
    `https://api.spotify.com/v1/artists/${artistId}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  const albumsResponse = await axios.get(
    `https://api.spotify.com/v1/artists/${artistId}/albums`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: { include_groups: "album", limit: 1 },
    }
  );

  return {
    artist: artistResponse.data,
    album: albumsResponse.data.items[0], // Get the first album
  };
}

async function getLatestRelease(artistId) {
  const accessToken = await getAccessToken();

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}/albums`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { include_groups: "single", limit: 1 }, // Adjust if you want albums or singles
      }
    );
    const latestRelease = response.data.items[0]; // Assuming the first item is the latest
    return {
      name: latestRelease.name,
      image: latestRelease.images[0].url, // Taking the first image as the album cover
    };
  } catch (error) {
    console.error("Error fetching latest release:", error);
    return null;
  }
}

async function getArtistName(artistId) {
  const accessToken = await getAccessToken();
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const artistName = response.data.name; // Getting the artist's name
    return artistName;
  } catch (error) {
    console.error("Error fetching artist name:", error);
    return null;
  }
}

async function getLatestAlbums(artistId) {
  const accessToken = await getAccessToken();

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}/albums`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { include_groups: "album", limit: 1 }, // Fetching albums specifically
      }
    );
    const latestAlbum = response.data.items[0]; // Assuming the first item is the latest album
    return {
      name: latestAlbum.name,
      image: latestAlbum.images[0].url, // Taking the first image as the album cover
    };
  } catch (error) {
    console.error("Error fetching latest albums2:", error);
    return null;
  }
}

// async function getPlaylistsByCategory(categoryId) {
//   const accessToken = await getAccessToken();

//   try {
//     const response = await axios.get(
//       `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`,
//       {
//         headers: { Authorization: `Bearer ${accessToken}` },
//         params: {
//           country: "US", // Change this based on the target country
//           limit: 10, // Number of results to return
//           offset: 0, // Starting index of the results
//         },
//       }
//     );

//     return response.data.playlists.items;
//   } catch (error) {
//     console.error(
//       `Error fetching playlists for category ${categoryId}:`,
//       error
//     );
//     return [];
//   }
// }

async function getPlaylistsByCategory(categoryId) {
  const accessToken = await getAccessToken();

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: {
          country: "US", // Change this based on the target country
          limit: 10, // Number of results to return
          offset: 0, // Starting index of the results
        },
      }
    );

    return response.data.playlists.items;
  } catch (error) {
    console.error(
      `Error fetching playlists for category ${categoryId}:`,
      error.response || error
    );
    return [];
  }
}

async function getCategories() {
  const accessToken = await getAccessToken();

  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/categories",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: {
          limit: 50, // Adjust the limit as needed
        },
      }
    );

    return response.data.categories.items; // This returns an array of category objects
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

async function logCategoryIds() {
  try {
    const categories = await getCategories();
    console.log(
      "Spotify Categories:",
      categories.map((category) => ({ name: category.name, id: category.id }))
    );
  } catch (error) {
    console.error("Error logging category IDs:", error);
  }
}

logCategoryIds(); // Call the function to log category IDs

async function getAlbumById(albumId) {
  const accessToken = await getAccessToken();

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/albums/${albumId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    return {
      id: response.data.id,
      name: response.data.name,
      artist: response.data.artists[0].name, // Assuming there's at least one artist
      image: response.data.images[0].url, // Taking the first image as the album cover
      // Add additional album details you need here
    };
  } catch (error) {
    console.error(`Error fetching album by ID ${albumId}:`, error);
    return null;
  }
}

module.exports = {
  getArtistData,
  getLatestRelease,
  getArtistName,
  getLatestAlbums,
  getPlaylistsByCategory,
  getCategories,
  getAlbumById,
};
