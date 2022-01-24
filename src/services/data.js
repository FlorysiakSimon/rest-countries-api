import axios from "axios";

export const getAllCountries = async () => {
	try {
		const res = await axios.get(`https://restcountries.com/v2/all`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};


export const getCountry = async (name) => {
	try {
		const res = await axios.get(`https://restcountries.com/v2/alpha/${name}`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

export const getRegion = async (region) => {
	try {
		const res = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

