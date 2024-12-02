import axios from 'axios';

const BASE_URL = 'https://www.alphavantage.co/query';
const API_KEY = 'demo';

export const alphaVantageClient = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY
  }
});