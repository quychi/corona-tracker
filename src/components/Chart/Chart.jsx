import React, { useEffect, useState } from 'react'
import { fetchDailyDate } from '../../api';

import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyDate());       //async await get data, thì setState phải để trong hàm async (like video)
        }

        fetchAPI();
    },[]);

    const lineChart = (         //what kind?
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
    
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
  );
}

export default Chart;
