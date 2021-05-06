// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

// good import make code more readable
import { Cards, Chart, CountryPicker } from './components';//and create index.js in folder components

function App() {
  return (
    <div>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
