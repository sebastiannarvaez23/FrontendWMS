import React from 'react';
import ReactDOM from 'react-dom'
import AnyChart from '../dist/anychart-react.min.js'
import './StautusPickingIndicator.css';

function StautusPickingIndicator() {
    return(
        <div className="contain-indicator">
            <AnyChart
                id="pieChart"
                width={800}
                height={600}
                type="pie"
                data={[1, 2, 3, 4]}
                title="Simple pie chart"
            />
        </div>
    );
}

export { StautusPickingIndicator };