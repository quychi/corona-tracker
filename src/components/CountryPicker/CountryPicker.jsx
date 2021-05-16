import React, { useEffect, useState } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchcountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ( { handleCountryChange } ) => {      //destructing hàm từ props
    
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchcountries());
        }
        fetchAPI();
    }, []);

// console.log("===========",countries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaulvalue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
