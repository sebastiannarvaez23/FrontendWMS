//React
import React, { useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactDOM from "react-dom";
import "./PickingMonitor.css"

// API
import { getBoxes } from "../../ServicesConsumers/box";
import { getBoxesItem } from "../../ServicesConsumers/boxitem";

// components
import { AdminReferences } from "./AdminReferences";
import { AdminBox } from "./AdminBox";
import { ContainPickingMonitor } from "./ContainPickingMonitor";
import { ItemBox } from "./ItemBox";
import { ItemReferenceRequest } from "./ItemReferenceRequest"
import { ItemReferencePack } from "./ItemReferencePack";
import { PanelItemReferenceRequest } from "./PanelItemReferenceRequest";
import { PanelItemReferencePack } from "./PanelItemReferencePack";

// Context
import { usePicking } from "../../Context/picking-context";
import { useSaleOrder } from "../../Context/saleorder-context";
import { useBox } from "../../Context/box-context";
import { useBoxItem } from "../../Context/boxitem-context";

import { getInfoReferencesRequest } from "../../ServicesConsumers/saleorder";

export const PickingMonitor = () => {

    // Context 

    const { 
        saleOrderModal, 
        setReferencesRequest, 
        noSaleOrder, 
        referencesRequest, 
        loadedSaleOrderItems, 
        setLoadedSaleOrderItems 
    } = useSaleOrder();

    const {
        pickingSelected
    } = usePicking();

    const {
        boxes,
        loaded,
        boxSelected,
        setLoadedBox,
        setBoxes
    } = useBox();

    const { 
        boxItems,
        loadedBoxItem,
        setBoxItems,
        setLoadedBoxItem
    } = useBoxItem();
    
    // useEffect

    useEffect(() => {
        getBoxes(setBoxes, setLoadedBox, pickingSelected);
    }, [saleOrderModal])

    useEffect(() => {
        getBoxesItem(setBoxItems, setLoadedBoxItem, boxSelected)
    }, [boxSelected])

    useEffect(() => {
        getInfoReferencesRequest(setLoadedSaleOrderItems, setReferencesRequest, noSaleOrder)
    }, [noSaleOrder])

    // Render 
    
    return ReactDOM.createPortal(
        <ContainPickingMonitor>
            <AdminBox>
                <TransitionGroup>
                    {loaded && boxes.map(box => (
                        <CSSTransition key={box.id} timeout={500} classNames="fade">
                            <ItemBox
                                key={box.id}
                                id={box.id}
                                last_modification={box.last_modification}
                                gross_weight={box.gross_weight}
                                responsible={box.responsible}
                                dimension={box.dimension}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
                {!loaded && (<ItemBox id={"Cargando ..."} />)}

            </AdminBox>
            <AdminReferences>
                <PanelItemReferenceRequest>
                    {loadedSaleOrderItems && referencesRequest.map(reference => (
                        <ItemReferenceRequest
                            key={reference.id}
                            id={reference.id}
                            reference={reference.reference}
                            balance={"8/8"}
                            quantity={reference.quantity}
                            modelsize={reference.modelsize}
                            color={reference.color}
                        />
                    ))}
                    {!loadedSaleOrderItems && (<ItemReferenceRequest id={"Cargando ..."} />)}
                </PanelItemReferenceRequest>
                <PanelItemReferencePack>
                    <TransitionGroup>
                        {loadedBoxItem && boxItems.map(reference => (
                            <CSSTransition key={reference.id} timeout={500} classNames="fade">
                                <ItemReferencePack
                                    key={reference.id}
                                    id={reference.id}
                                    reference={reference.reference}
                                    quantity={reference.quantity}
                                    modelsize={reference.modelsize}
                                    color={reference.color}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    {!loadedBoxItem && (<ItemReferencePack id={"Cargando ..."} />)}
                </PanelItemReferencePack>
            </AdminReferences>
        </ContainPickingMonitor>,
        document.getElementById('modal')
    );
}
