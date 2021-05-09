export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
// const redirectUri = "https://spotify-clone-26705.web.app/";
const clientId = "8765545b25344f0095aa282cbadd8093";
// const clientId = "9d62f2486bd94a95a8b4b889ae61a381"; //myDevelopment Account

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playedback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  /* getUrl parameters after the hash in the path */
  return window.location.hash
    .substr(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
