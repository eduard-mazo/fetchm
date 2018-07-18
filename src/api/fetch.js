import configService from "./config.js";
import trae from "trae";

const platziMusicService = trae.create({
  baseUrl: configService.apiUrl
});

export default platziMusicService
