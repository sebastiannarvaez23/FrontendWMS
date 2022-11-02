import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './StatusPickingIndicator.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        '#5856e9',
        '#fcdae1',
      ],
      borderColor: [
        '#5856e9',
        '#fcdae1',
      ],
      borderWidth: 1,
    },
  ],
};


function StatusPickingIndicator() {

    return(
        <div className="contain-indicator">
            <Doughnut data={data} />
            <span>verano</span>
        </div>
    );
}

export { StatusPickingIndicator };