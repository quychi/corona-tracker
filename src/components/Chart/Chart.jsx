import React, { useEffect, useState } from 'react'
import { fetchDailyDate } from '../../api';

import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = ( { data: {confirmed, recovered, deaths }, country } ) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyDate());       //async await get data, thì setState phải để trong hàm async (like video)
        }

        fetchAPI();
    },[]);

    const lineChart = (         //what kind? return JSX
        dailyData.length                //nếu mảng rỗng null (state để mảng [] để dễ check đkien)
            ? (
                <Line 
                data={{
                    labels: dailyData.map(({date}) => date),    //map return dates
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    },{
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }]
                }} />
            ) : null
    );
    

     const barChart = (
        confirmed ?
            (<Bar 
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [
                        {
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            >
            </Bar>)
            : null
     );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
  );
}

export default Chart;
