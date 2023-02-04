//React
import React, { useEffect } from "react";
import './Picking.css';

// API
import { getPickings } from "../../ServicesConsumers/picking";
import { getInfoIndicators } from '../../ServicesConsumers/saleorder';

// components and functions slidebar
import { LogoSlideBar } from '../SlideBar/LogoSlideBar';
import { SlideBar } from '../SlideBar';
import { SlideLinks } from '../SlideBar/SlideLinks';

// components
import { ChatActivate } from "../Chat/ChatActivate";
import { ChatContainer } from "../Chat/ChatContainer";
import { GetSaleOrder } from './GetSaleOrder';
import { InfoSaleOrder } from '../Picking/InfoSaleOrder';
import { SaleOrderControl } from '../Picking/SaleOrderControl';
import { PickingList } from '../Picking/PickingList';
import { PickingIndicatorsList } from './PickingIndicatorsList';
import { PickingContain } from "./PickingContain";
import { PickingControl } from '../Picking/PickingControl';
import { PickingItem } from './PickingItem';
import { PickingMonitor } from "../PickingMonitor";
import { PickingIndicator } from './PickingIndicator';

// Context
import { usePicking } from "../../Context/picking-context";
import { useSaleOrder } from "../../Context/saleorder-context";
import { useBox } from "../../Context/box-context";

// Other
import { dataIndicator } from "./PickingIndicator/data-indicator";

export const Picking = () => {

    const { saleOrder, noSaleOrder } = useSaleOrder();
    const { openPickingMonitor, setPickings, setLoadedPicking, loadedPicking, pickings, indicatorsPicking, setIndicatorsPicking } = usePicking();
    const { itemsBox } = useBox();

    useEffect(() => {
        getInfoIndicators(saleOrder.customer_name, noSaleOrder, setIndicatorsPicking);
    }, [saleOrder, itemsBox])

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
                    <GetSaleOrder />
                    <InfoSaleOrder />
                </SaleOrderControl>
                <PickingControl>
                    <PickingList>
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
                    </PickingList>
                    <PickingIndicatorsList>
                        <PickingIndicator dataIndicator={dataIndicatorSaleOrder} key={"saleorder"} nameIndicator={"Orden de Venta"} />
                        <PickingIndicator dataIndicator={dataIndicatorCustomer} key={"customer"} nameIndicator={"Cliente"} />
                    </PickingIndicatorsList>
                </PickingControl>
                <ChatActivate />
                <ChatContainer />
            </PickingContain>
        </React.Fragment>
    );
}