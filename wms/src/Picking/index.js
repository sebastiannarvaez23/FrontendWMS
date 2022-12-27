//React
import React, { useEffect } from "react";
import './Picking.css';

// API
import { getPickings } from "../api/picking";
import { getInfoIndicators } from '../api/saleorder';

// components and functions slidebar
import { LogoSlideBar } from '../SlideBar/LogoSlideBar';
import { SlideBar } from '../SlideBar';
import { SlideLinks } from '../SlideBar/SlideLinks';

// components picking
import { DashBoardPicking } from '../Picking/PickingControl/DashBoardPicking';
import { DashBoardSaleOrder } from '../Picking/SaleOrderControl/DashBoardSaleOrder';
import { InfoSaleOrder } from '../Picking/SaleOrderControl/InfoSaleOrder';
import { IndicatorsPicking } from '../Picking/PickingControl/IndicatorsPicking';
import { PickingContain } from "./PickingContain";
import { PickingControl } from '../Picking/PickingControl';
import { PickingItem } from '../Picking/PickingControl/DashBoardPicking/PickingItem';
import { PickingMonitor } from "../PickingMonitor";
import { SaleOrderControl } from '../Picking/SaleOrderControl';
import { StatusPickingIndicator } from '../Picking/PickingControl/IndicatorsPicking/StatusPickingIndicator';

// Context
import { usePicking } from "../Context/picking-context";
import { useSaleOrder } from "../Context/saleorder-context";
import { useBox } from "../Context/box-context";

// Other
import { dataIndicator } from "./PickingControl/IndicatorsPicking/StatusPickingIndicator/data-indicator";

export const Picking = () => {

    const { saleOrder, noSaleOrder } = useSaleOrder();
    const { openPickingMonitor, setPickings, setLoadedPicking, loadedPicking, pickings, indicatorsPicking, setIndicatorsPicking } = usePicking();
    const { referencesPack } = useBox();

    useEffect(() => {
        getInfoIndicators(saleOrder.customer_name, noSaleOrder, setIndicatorsPicking);
    }, [saleOrder, referencesPack])

    useEffect(() => {
        getPickings(setPickings, setLoadedPicking, noSaleOrder);
    }, [saleOrder])

    const dataIndicatorCustomer = dataIndicator(indicatorsPicking.picking_quantity_by_customer, indicatorsPicking.request_quantity_by_customer)
    const dataIndicatorSaleOrder = dataIndicator(indicatorsPicking.picking_quantity_by_saleorder, indicatorsPicking.request_quantity_by_saleorder)

    return (
        <React.Fragment>
            {!!openPickingMonitor && (
                <PickingMonitor />
            )}
            <SlideBar>
                <LogoSlideBar />
                <SlideLinks />
            </SlideBar>
            <PickingContain>
                <SaleOrderControl>
                    <DashBoardSaleOrder />
                    <InfoSaleOrder />
                </SaleOrderControl>
                <PickingControl>
                    <DashBoardPicking>
                        {loadedPicking && pickings.map(picking => (
                            <PickingItem
                                key={picking.id}
                                id={picking.id}
                                status={picking.status}
                                responsible={picking.responsible}
                                dateModified={picking.last_modification}
                            />
                        ))}
                        {!loadedPicking && <PickingItem id={"Cargando ..."} />}
                    </DashBoardPicking>
                    <IndicatorsPicking>
                        <StatusPickingIndicator dataIndicator={dataIndicatorSaleOrder} key={"saleorder"} nameIndicator={"Orden de Venta"} />
                        <StatusPickingIndicator dataIndicator={dataIndicatorCustomer} key={"customer"} nameIndicator={"Cliente"} />
                    </IndicatorsPicking>
                </PickingControl>
            </PickingContain>
        </React.Fragment>
    );
}