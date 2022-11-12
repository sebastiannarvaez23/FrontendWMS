import React from "react";
import './Picking.css';

import { SlideBar } from '../SlideBar';
import { LogoSlideBar } from '../SlideBar/LogoSlideBar';
import { SlideLinks } from '../SlideBar/SlideLinks';

import { SaleOrderControl } from '../Picking/SaleOrderControl';
import { DashBoardSaleOrder } from '../Picking/SaleOrderControl/DashBoardSaleOrder';
import { InfoSaleOrder } from '../Picking/SaleOrderControl/InfoSaleOrder';
import { PickingControl } from '../Picking/PickingControl';
import { DashBoardPicking } from '../Picking/PickingControl/DashBoardPicking';
import { IndicatorsPicking } from '../Picking/PickingControl/IndicatorsPicking';
import { PickingItem } from '../Picking/PickingControl/DashBoardPicking/PickingItem';
import { StatusPickingIndicator } from '../Picking/PickingControl/IndicatorsPicking/StatusPickingIndicator';


const saleOrderList = [
    { 
        id:1, 
        noSaleOrder:508, 
        datePub:'01/12/2021', 
        dateDelivery:'01/12/2021', 
        datedoc:'01/12/2021', 
        poComments:'Bodega A', 
        nameCustomer:'Eliza Hoyos', 
        payTerm:'30 días', 
        locationDelivery:'Calle 3 # 2 06', 
        collection:'Verano',
        items: [
            {id:1, typeGarment:'Camiseta', color:'Roja', quantity:3},
            {id:2, typeGarment:'Pantaloneta', color:'Negra', quantity:4},
            {id:3, typeGarment:'Gorra', color:'Verde', quantity:2},
        ]
    },
    { 
        id:2, 
        noSaleOrder:509, 
        datePub:'02/12/2021', 
        dateDelivery:'02/12/2021', 
        datedoc:'02/12/2021', 
        poComments:'Bodega C', 
        nameCustomer:'Cristian Sanchez', 
        payTerm:'30 días', 
        locationDelivery:'Carrera 16 # 10 06', 
        collection:'Otoño',
        items: [
            {id:1, typeGarment:'Zapatillas', color:'Negras', quantity:2},
            {id:2, typeGarment:'Pavas', color:'Negra', quantity:4},
        ]
    }
]

const pickingList = [
    { id: 1, status: 'PA', responsible: 'Sebastian Narvaez', dateModified: '07/02/2022'},
    { id: 2, status: 'PA', responsible: 'Sebastian Narvaez', dateModified: '07/02/2022'},
    { id: 3, status: 'PA', responsible: 'Sebastian Narvaez', dateModified: '07/02/2022'},
    { id: 4, status: 'PA', responsible: 'Sebastian Narvaez', dateModified: '07/02/2022'},
    { id: 5, status: 'PA', responsible: 'Sebastian Narvaez', dateModified: '07/02/2022'},
    { id: 6, status: 'PA', responsible: 'Sebastian Narvaez', dateModified: '07/02/2022'},
    { id: 7, status: 'PA', responsible: 'Sebastian Narvaez', dateModified: '07/02/2022'},
    { id: 8, status: 'PA', responsible: 'Sebastian Narvaez', dateModified: '07/02/2022'},
]

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
        <React.Fragment>
            <SlideBar>
                <LogoSlideBar />
                <SlideLinks />
            </SlideBar>
            <section className="home-section">
                <div className="home-content">
                    <i onClick={openSlidebar} className='bx bx-menu'></i>
                    <span className="text">Despachos</span>
                </div>

                <SaleOrderControl>
                    <DashBoardSaleOrder
                    saleOrderList={saleOrderList}
                    />
                    <InfoSaleOrder />
                </SaleOrderControl>
                <PickingControl>
                    <DashBoardPicking>
                        {pickingList.map(picking => (
                            <PickingItem
                                key={picking.id}
                                id={picking.id}
                                status={picking.status}
                                responsible={picking.responsible}
                                dateModified={picking.dateModified}
                            />
                        ))}
                    </DashBoardPicking>
                    <IndicatorsPicking>
                        <StatusPickingIndicator />
                        <StatusPickingIndicator />
                    </IndicatorsPicking>
                </PickingControl>
            </section >
        </React.Fragment>
    );
}

export { Picking };