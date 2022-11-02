import React from "react";
import './DashBoardPicking.css';

function DashBoardPicking(props) {
    return (
        <div className="dashBoard-picking">
            <div className="header-list-pikings">
                <span>id</span>
                <span>Estado</span>
                <span>Usuario creador</span>
                <span>Fecha creación</span>
            </div>
            {props.children}
        </div>
    );
}

export { DashBoardPicking };