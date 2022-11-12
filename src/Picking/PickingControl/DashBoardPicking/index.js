import React from "react";
import './DashBoardPicking.css';

function DashBoardPicking(props) {
    return (
        <div className="dashBoard-picking">
            <h4>Listado de despachos de la orden</h4>
            <div className="header-list-pikings">
                <span>id</span>
                <span>Estado</span>
                <span>Responsable</span>
                <span>Última modificación</span>
            </div>

            <button
                className="btn-create-picking"
                >+</button>

            {props.children}
        </div>
    );
}

export { DashBoardPicking };