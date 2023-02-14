import React from "react";
import "./PickingContain.css"

// components and functions slidebar
import { openSlidebar } from '../../SlideBar';

export const PickingContain = (props) => {
    return (
        <section className="home-section">
            <div className="home-content">
                <i onClick={openSlidebar} className='bx bx-menu'></i>
                <span className="text">Picking</span>
            </div>
            {props.children}
        </section >
    );
}