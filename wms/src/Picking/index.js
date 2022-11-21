//React
import React, { useEffect, useState } from "react";
import './Picking.css';

// API
import { getPickings } from "../api/picking";
import { createPicking } from "../api/picking";
import { getInfoIndicators } from '../api/saleorder';

// components slidebar
import { SlideBar } from '../SlideBar';
import { LogoSlideBar } from '../SlideBar/LogoSlideBar';
import { SlideLinks } from '../SlideBar/SlideLinks';
// components picking
import { SaleOrderControl } from '../Picking/SaleOrderControl';
import { DashBoardSaleOrder } from '../Picking/SaleOrderControl/DashBoardSaleOrder';
import { InfoSaleOrder } from '../Picking/SaleOrderControl/InfoSaleOrder';
import { PickingControl } from '../Picking/PickingControl';
import { DashBoardPicking } from '../Picking/PickingControl/DashBoardPicking';
import { IndicatorsPicking } from '../Picking/PickingControl/IndicatorsPicking';
import { PickingItem } from '../Picking/PickingControl/DashBoardPicking/PickingItem';
import { StatusPickingIndicator } from '../Picking/PickingControl/IndicatorsPicking/StatusPickingIndicator';
import { PickingMonitor } from "../PickingMonitor";

import { Transition } from "react-transition-group";


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

function Picking() {
    // -- Logic Front
    let indicators = [
        { id: 1, name: "Verano" },
        { id: 2, name: "Otoño" }
    ]

    // Information Indicators
    const [indicatorsPicking, setIndicatorsPicking] = useState({
        picking_quantity_by_customer: "",
        request_quantity_by_customer: "",
        picking_quantity_by_saleorder: "",
        request_quantity_by_saleorder: ""
    })

    // Information Sale Order
    const [saleOrder, setSaleOrder] = useState({
        publication_date: "",
        delivery_date: "",
        doc_date: "",
        po_comments: "",
        customer_name: "",
        delivery_address: "",
        pay_term: "",
        collection: ""
    });
    // --
    const [pickings, setPickings] = useState([]);
    const [noSaleOrder, setNoSaleOrder] = useState("");
    const [loadedPicking, setLoadedPicking] = useState(false);
    const [loadedIndicator, setloadedIndicator] = useState(true);
    const [pickingSelected, setPickingSelected] = useState("")
    const [openPickingMonitor, setOpenPickingMonitor] = useState(false);
    const [saleOrderItems, setSaleOrderItems] = useState([])

    useEffect(() => {
        getInfoIndicators(saleOrder.customer_name, noSaleOrder, setIndicatorsPicking);
    }, [saleOrder])

    useEffect(() => {
        getPickings(setPickings, setLoadedPicking, noSaleOrder);
    }, [saleOrder])




    const dataIndicatorCustomer = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: [indicatorsPicking.picking_quantity_by_customer, indicatorsPicking.request_quantity_by_customer],
                backgroundColor: [
                    '#5856e9',
                    '#fcdae1',
                ],
                borderColor: [
                    '#5856e9',
                    '#fcdae1',
                ],
                borderWidth: 1,
            },
        ],
    };

    const dataIndicatorSaleOrder = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: [indicatorsPicking.picking_quantity_by_saleorder, indicatorsPicking.request_quantity_by_saleorder],
                backgroundColor: [
                    '#5856e9',
                    '#fcdae1',
                ],
                borderColor: [
                    '#5856e9',
                    '#fcdae1',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <React.Fragment>


            {!!openPickingMonitor && (
                <PickingMonitor
                    pickingSelected={pickingSelected}
                    setOpenPickingMonitor={setOpenPickingMonitor}
                    openPickingMonitor={openPickingMonitor}
                    setSaleOrderItems={setSaleOrderItems}
                    noSaleOrder={noSaleOrder}
                />
            )}


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
                        setIndicatorsPicking={setIndicatorsPicking}
                        setSaleOrder={setSaleOrder}
                        setNoSaleOrder={setNoSaleOrder}
                        setPickings={setPickings}
                        noSaleOrder={noSaleOrder}
                    />
                    <InfoSaleOrder
                        saleOrder={saleOrder}
                    />
                </SaleOrderControl>
                <PickingControl>
                    <DashBoardPicking
                        createPicking={createPicking}
                        noSaleOrder={noSaleOrder}
                        setPickings={setPickings}
                        setLoadedPicking={setLoadedPicking}
                    >
                        {loadedPicking && pickings.map(picking => (
                            <PickingItem
                                key={picking.id}
                                id={picking.id}
                                status={picking.status}
                                responsible={picking.responsible}
                                dateModified={picking.last_modification}
                                setPickingSelected={setPickingSelected}
                                setOpenPickingMonitor={setOpenPickingMonitor}
                            />
                        ))}
                        {!loadedPicking && <PickingItem id={"Cargando ..."} />}
                    </DashBoardPicking>
                    <IndicatorsPicking>
                        <StatusPickingIndicator dataIndicator={dataIndicatorSaleOrder} key={"saleorder"} nameIndicator={"Orden de Venta"} />
                        <StatusPickingIndicator dataIndicator={dataIndicatorCustomer} key={"customer"} nameIndicator={"Cliente"} />
                    </IndicatorsPicking>
                </PickingControl>
            </section >



        </React.Fragment>
    );
}

export { Picking };