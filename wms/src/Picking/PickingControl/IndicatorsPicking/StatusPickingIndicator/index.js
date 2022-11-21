import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './StatusPickingIndicator.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function StatusPickingIndicator(props) {

  return (
    <div className="contain-indicator">
      <Doughnut data={props.dataIndicator} />
      <span>{props.nameIndicator}</span>
    </div>
  );
}

export { StatusPickingIndicator };