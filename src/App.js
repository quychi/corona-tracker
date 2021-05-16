// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

// good import make code more readable
import { Cards, Chart, CountryPicker } from './components';//and create index.js in folder components
import styles from './App.module.css';
import { fetchData } from './api';
import { useEffect, useState } from 'react'

import imageCorona from './images/image.png';

function App() {

  const [state, setState] = useState({ data: {}, country: "" });

  useEffect( () => {
    const test = async function getDataFromAsyncFunc() {
      const getData = await fetchData();
  
      console.log(getData);
      setState({ data: getData });
    }
    test();
    // setState({ data: test()});      //setState owr trong asyncFUn thif ccuowc, ngoaf return thif tko??
    
  }, []);
  // console.log('test',state);

  const handleCountryChange = async(country) => {
    const getCountry = await fetchData(country);

    setState({ data: getCountry, country: country });
  }

  const { data, country } = state;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageCorona} alt="COVID-19"></img>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
