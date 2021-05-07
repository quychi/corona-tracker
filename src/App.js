// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

// good import make code more readable
import { Cards, Chart, CountryPicker } from './components';//and create index.js in folder components
import styles from './App.module.css';
import { fetchData } from './api';
import { useEffect, useState } from 'react'


function App() {

  const [state, setState] = useState({ data: {} });

  useEffect( () => {
    const test = async function getDataFromAsyncFunc() {
      const getData = await fetchData();
  
      // console.log(getData);
      setState({ data: getData });
    }
    test();
    // setState({ data: test()});      //setState owr trong asyncFUn thif ccuowc, ngoaf return thif tko??
    
  }, []);
  // console.log('test',state);

  const { data } = state;

  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
