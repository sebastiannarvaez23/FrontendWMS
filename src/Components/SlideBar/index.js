import React from 'react';

// Components
import { SlideBarContainer } from './SlideBarContainer';
import { LogoSlideBar } from "./LogoSlideBar";
import { SlideLinks } from "./SlideLinks";

import './SlideBar.css';

export const openSlidebar = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("close");
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e) => {
            let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
            arrowParent.classList.toggle("showMenu");
        });
    }
}

export const SlideBar = () => {
    return (
        <React.Fragment>
            <SlideBarContainer>
                <LogoSlideBar />
                <SlideLinks />
            </SlideBarContainer>
        </React.Fragment>
    );
}
