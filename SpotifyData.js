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

module.exports = { getArtistData, getLatestRelease, getArtistName };
