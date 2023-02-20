import React from "react";

// components and functions slidebar
import { SlideBar } from '../SlideBar';

export const AppUI = (props) => {
    return (
        <React.Fragment>
            <SlideBar />
            { props.children }
        </React.Fragment>
    );
}