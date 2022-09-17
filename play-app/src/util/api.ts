import axios from "axios";

const API_KEY = "";
export const getAPI = () =>
  axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);

export const useAPI = async () => {
  const rspons = await getAPI();
  const result = rspons.data;
  return result;
};

export const getSearch = (search: string | string[] | undefined) =>
  axios.get(
    `https://api.themoviedb.org/3/search/tv/?api_key=${API_KEY}&query=${search}`
  );

export const useSearch = async (search: string | string[] | undefined) => {
  const rspons = await getSearch(search);
  const result = rspons.data;
  return result;
};

export const getDetail = (id: number) =>
  axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`);

export const useDetail = async (id: number) => {
  const rspons = await getDetail(id);
  const result = rspons.data;
  return result;
};

export const getKey = (id: number) =>
  axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`);

export const useKey = async (id: number) => {
  const rspons = await getKey(id);
  const result = rspons.data;
  return result;
};

export const getVideo = (key: string | string[] | undefined) =>
  axios.get(`https://www.youtube.com/watch?v=${key}`);
