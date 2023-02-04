import React from "react";

// components and functions slidebar
import { LogoSlideBar } from '../SlideBar/LogoSlideBar';
import { SlideBar } from '../SlideBar';
import { SlideLinks } from '../SlideBar/SlideLinks';

// components
import { Chat } from "../Chat";

export const AppUI = (props) => {
    return (
        <React.Fragment>
            <SlideBar />
            { props.children }
            <Chat />
        </React.Fragment>
    );
}