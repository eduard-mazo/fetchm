import config from "./config.js";

const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${
  config.apiKey
}&format=json`;

export default function getArtist() {
  return fetch(url)
    .then(response => response.json())
    .then(myJson => myJson.topartists.artist);
}
