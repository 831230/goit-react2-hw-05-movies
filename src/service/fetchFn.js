import axios from "axios";

export const fetchApi = async () => {
  const API_KEY_V3 = "bdba5342660bdd1dac5d09b885091a0c";
  const API_URL = "https://api.themoviedb.org/3/";

  const params = new URLSearchParams({
    api_key: API_KEY_V3,
    page: 1,
  });
  try {
    const response = await axios.get(API_URL + "trending/movie/day?" + params);
    // console.log(response.data.results);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiKeyword = async (keyword) => {
  const API_KEY_V3 = "bdba5342660bdd1dac5d09b885091a0c";
  const API_URL = "https://api.themoviedb.org/3/";

  const params = new URLSearchParams({
    api_key: API_KEY_V3,
    query: keyword,
    page: 1,
  });
  try {
    const response = await axios.get(API_URL + `search/movie?` + params);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiById = async (id) => {
  const API_KEY_V3 = "bdba5342660bdd1dac5d09b885091a0c";
  const API_URL = "https://api.themoviedb.org/3/";

  const params = new URLSearchParams({
    api_key: API_KEY_V3,
    page: 1,
  });
  try {
    const response = await axios.get(API_URL + `movie/${id}?` + params);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiConfig = async () => {
  const API_KEY_V3 = "bdba5342660bdd1dac5d09b885091a0c";
  const API_URL = "https://api.themoviedb.org/3/";

  const params = new URLSearchParams({
    api_key: API_KEY_V3,
  });
  try {
    const response = await axios.get(API_URL + "/configuration?" + params);
    // console.log(response);
    return response.data.images;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiCast = async (id) => {
  const API_KEY_V3 = "bdba5342660bdd1dac5d09b885091a0c";
  const API_URL = "https://api.themoviedb.org/3/";

  const params = new URLSearchParams({
    api_key: API_KEY_V3,
    page: 1,
  });
  try {
    const response = await axios.get(API_URL + `movie/${id}/credits?` + params);
    // console.log(response);
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiReviews = async (id) => {
  const API_KEY_V3 = "bdba5342660bdd1dac5d09b885091a0c";
  const API_URL = "https://api.themoviedb.org/3/";

  const params = new URLSearchParams({
    api_key: API_KEY_V3,
    page: 1,
  });
  try {
    const response = await axios.get(API_URL + `movie/${id}/reviews?` + params);
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
