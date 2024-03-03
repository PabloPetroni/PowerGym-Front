import axios from 'axios';

export const apiURL = axios.create({
	baseURL: 'http://localhost:4000',
});
