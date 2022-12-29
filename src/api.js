import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

export const getPopularList = async () => {
    const popular = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return popular.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
}