//React
import React, { useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactDOM from "react-dom";
import "./PickingMonitor.css"

// API
import { getBoxes } from "../../ServicesConsumers/box";
import { getBoxesItem } from "../../ServicesConsumers/boxitem";
import { getInfoReferencesRequest } from "../../ServicesConsumers/saleorder";

// components
import { ItemBox } from "./ItemBox";
import { AdminBox } from "./AdminBox";
import { AdminReferences } from "./AdminReferences";
import { PanelItemReferenceRequest } from "./PanelItemReferenceRequest";
import { ItemReferenceRequest } from "./ItemReferenceRequest"
import { PanelItemReferencePack } from "./PanelItemReferencePack";
import { ItemReferencePack } from "./ItemReferencePack";

// Context
import { usePicking } from "../../Context/picking-context";
import { useSaleOrder } from "../../Context/saleorder-context";
import { useBox } from "../../Context/box-context";
import { ContainPickingMonitor } from "./ContainPickingMonitor";

export const PickingMonitor = () => {

    const { noSaleOrder } = useSaleOrder();
    const { pickingSelected } = usePicking();
    const {
        loadedBoxItem,
        referencesRequest,
        loadedSaleOrderItems,
        boxes,
        loaded,
        boxSelected,
        setReferencesRequest,
        setLoadedSaleOrderItems,
        setLoadedBox,
        setLoadedBoxItem,
        setBoxes,
        boxItems,
        setBoxItems
    } = useBox();


    useEffect(() => {
        getBoxes(setBoxes, setLoadedBox, pickingSelected);
        getInfoReferencesRequest(setLoadedSaleOrderItems, setReferencesRequest, noSaleOrder)
    }, [])

    useEffect(() => {
        getBoxesItem(setBoxItems, setLoadedBoxItem, boxSelected)
    }, [boxSelected])


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
