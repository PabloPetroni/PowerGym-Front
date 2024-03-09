import axios from 'axios';

const APIkey = '098c4eeddc341912ca217ceaf4df9e28';
const urlSMT = `https://api.openweathermap.org/data/2.5/weather?q=tucuman&appid=${APIkey}&units=metric`;
const urlYB = `https://api.openweathermap.org/data/2.5/weather?q=yerbabuena&appid=${APIkey}&units=metric`;
// const urlTV = `https://api.openweathermap.org/data/2.5/weather?q=tafiviejo&appid=${APIkey}&units=metric`;

export const apiURL = axios.create({
	baseURL: 'http://localhost:4000',
});

export const clima = async () => {
	try {
		const resSMT = await axios.get(urlSMT);
		console.log(resSMT.data);
		const resYB = await axios.get(urlYB);
		console.log(resYB.data);
		// const resTV = await axios.get(urlTV);
		// console.log(resTV.data);
	} catch (error) {}
};