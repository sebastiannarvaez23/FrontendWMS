import React from 'react';
import './SlideBar.css'

function SlideBar(props) {
    return (
        <div className="sidebar close">
            {props.children}
        </div>
    );
}

export { SlideBar };