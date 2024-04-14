import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';
const PERSON = 'character';

export const getPerson = async (page) => {
  const res = await axios.get(`${BASE_URL + PERSON}?page=${page}`);
  const result = res.data.results;
  return result;
  //   console.log(res.data.results);
};
