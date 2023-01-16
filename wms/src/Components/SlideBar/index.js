import React from 'react';
import './SlideBar.css'

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

function SlideBar(props) {
    return (
        <div className="sidebar close">
            {props.children}
        </div>
    );
}

export { SlideBar };