//React
import React, { useEffect, useState } from "react";
import './Picking.css';

// API
import { getPickings } from "../../ServicesConsumers/picking";
import { getInfoIndicators } from '../../ServicesConsumers/saleorder';

// components
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
import { AppUI } from "../AppUI";

export const Picking = () => {

    const { saleOrder, noSaleOrder } = useSaleOrder();
    const { openPickingMonitor, setPickings, setLoadedPicking, loadedPicking, pickings, indicatorsPicking, setIndicatorsPicking } = usePicking();
    const { boxItems } = useBox();

    useEffect(() => {
        getInfoIndicators(saleOrder.customer_name, noSaleOrder, setIndicatorsPicking);
    }, [saleOrder, boxItems])

    useEffect(() => {
        getPickings(setPickings, setLoadedPicking, noSaleOrder);
    }, [saleOrder])

    const dataIndicatorCustomer = dataIndicator(indicatorsPicking.picking_quantity_by_customer, indicatorsPicking.request_quantity_by_customer)
    const dataIndicatorSaleOrder = dataIndicator(indicatorsPicking.picking_quantity_by_saleorder, indicatorsPicking.request_quantity_by_saleorder)

    return (
        <React.Fragment>
            <AppUI>
                {!!openPickingMonitor && (
                    <PickingMonitor />
                )}
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
                </PickingContain>
            </AppUI>
        </React.Fragment>
    );
}