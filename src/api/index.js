import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    
    try {
        //Destructuring in JS
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        return  { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyDate = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        // console.log(data);

        const modifiedData = data.map((dailyData) => ({         //return obj in map
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        // console.log(modifiedData);

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchcountries = async () => {
    try {
        const { data: {countries} } = await axios.get(`${url}/countries`);

        // console.log(countries);

        return countries.map((country) => country.name);;
    } catch (error) {
        console.log(error);
    }
}