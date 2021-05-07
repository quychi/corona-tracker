import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        //Destructuring in JS
        const { data: { comfirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        return  { comfirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        
    }
}