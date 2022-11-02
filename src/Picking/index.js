import React from "react";
import './Picking.css'


function openSlidebar() {
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

function Picking(props) {
    return (
        <section className="home-section">
            <div className="home-content">
                <i onClick={openSlidebar} className='bx bx-menu'></i>
                <span className="text">Despachos</span>
            </div>

            {props.children}
        </section>
    );
}

export { Picking };