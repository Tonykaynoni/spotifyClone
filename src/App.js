import React, { useEffect, useState } from "react";
import "./Styles/App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./Utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useDataLayerValue } from "./StateManager/DataLayer";

const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState(null);

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setToken(_token);

      /* Assign retrived access token to the Spotify Api */
      /* SpotifyWebApi is a library created by someone to make using the spotify Api easy */
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify
        .getPlaylist("0hMpTzh8YRoj0WPknVY9Z4")
        .then((response) => {
          console.log("Response Here", response);
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          });
        })
        .catch((error) => console.log("Error Here", error));
    }
  }, []);
  // console.log("🧒", user);
  // console.log(":x", token);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
