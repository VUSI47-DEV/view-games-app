import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + apiKey);
const getAllGameList = axiosCreate.get("/games?key=" + apiKey);
const getTrendingGames = axiosCreate.get("/games?key=" + apiKey);
const getGameListByGenreId = (id:number) =>
  axiosCreate.get("/games?key=" + apiKey + "&genres=" + id);

export default {
  getGenreList,
  getAllGameList,
  getTrendingGames,
  getGameListByGenreId
};
