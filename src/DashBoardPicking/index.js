import React from "react";
import './DashBoardPicking.css';

function DashBoardPicking(props) {
    return (
        <div className="dashBoard-picking">
            {props.children}
        </div>
    );
}

export { DashBoardPicking };