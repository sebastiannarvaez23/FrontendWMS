//React
import React, { useEffect } from "react";
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
                {loaded && boxes.map(box => (
                    <ItemBox
                        key={box.id}
                        id={box.id}
                        last_modification={box.last_modification}
                        gross_weight={box.gross_weight}
                        responsible={box.responsible}
                        dimension={box.dimension}
                    />
                ))}
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
                    {loadedBoxItem && boxItems.map(reference => (
                        <ItemReferencePack
                            key={reference.id}
                            id={reference.id}
                            reference={reference.reference}
                            quantity={reference.quantity}
                            modelsize={reference.modelsize}
                            color={reference.color}
                        />
                    ))}
                    {!loadedBoxItem && (<ItemReferencePack id={"Cargando ..."} />)}
                </PanelItemReferencePack>
            </AdminReferences>
        </ContainPickingMonitor>,
        document.getElementById('modal')
    );
}
