import axios from 'axios';
import { BASE_URL, PERSON } from './api';

export const getPerson = async (page) => {
  const res = await axios.get(`${BASE_URL + PERSON}?page=${page}`);
  const result = res.data.results;
  return result;
};
