import React from "react";
import './DashBoardPicking.css';

function DashBoardPicking(props) {
    return (
        <div className="dashBoard-picking">
            <div className="header-list-pikings">
                <span>id</span>
                <span>Estado</span>
                <span>Responsable</span>
                <span>Última modificación</span>
            </div>

            <button
                className="btn-create-picking"
                onClick={""}
                >+</button>

            {props.children}
        </div>
    );
}

export { DashBoardPicking };