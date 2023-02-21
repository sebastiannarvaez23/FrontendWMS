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
import { Box } from "./Box";
import { BoxItem } from "./BoxItem";
import { ContainBoxItem } from "./ContainBoxItem";
import { ContainPickingMonitor } from "./ContainPickingMonitor";
import { ContainSaleOrderItem } from "./ContainSaleOrderItem";
import { SaleOrderItem } from "./SaleOrderItem"

// Context
import { usePicking } from "../../Context/picking-context";
import { useSaleOrder } from "../../Context/saleorder-context";
import { useBox } from "../../Context/box-context";
import { useBoxItem } from "../../Context/boxitem-context";
import { ModalAgregarDimension } from "./ModalAgregarDimension";

export const PickingMonitor = () => {

    // Context 

    const {
        saleOrderModal,
        referencesRequest,
        loadedSaleOrderItems,
    } = useSaleOrder();

    const {
        pickingSelected
    } = usePicking();

    const {
        boxes,
        loaded,
        boxSelected,
        setLoadedBox,
        setBoxes,
        modalDimension
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
        getBoxesItem(setBoxItems, setLoadedBoxItem, boxSelected);
    }, [boxSelected])

    // Render 

    return ReactDOM.createPortal(
        <ContainPickingMonitor>
            
            <AdminBox>
                <TransitionGroup>
                    {loaded && boxes.map(box => (
                        <CSSTransition key={box.id} timeout={500} classNames="fade">
                            <Box
                                key={box.id}
                                id={box.id}
                                last_modification={(box.last_modification).substring(5, 16).replace("-", "/")}
                                gross_weight={box.gross_weight}
                                responsible={box.responsible}
                                dimension={box.dimension}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
                {!loaded && (<Box id={"Cargando ..."} />)}

            </AdminBox>
            <AdminReferences>
                <ContainSaleOrderItem>
                    {loadedSaleOrderItems && referencesRequest.map(reference => (
                        <SaleOrderItem
                            key={reference.id}
                            id={reference.id}
                            reference={reference.reference}
                            balance={"8/8"}
                            quantity={reference.quantity}
                            modelsize={reference.modelsize}
                            color={reference.color}
                        />
                    ))}
                    {!loadedSaleOrderItems && (<SaleOrderItem id={"Cargando ..."} />)}
                </ContainSaleOrderItem>
                <ContainBoxItem>
                    <TransitionGroup>
                        {loadedBoxItem && boxItems.map((reference) => (
                            <CSSTransition key={reference.id} timeout={500} classNames="fade">
                                <BoxItem
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
                    {!loadedBoxItem && (<BoxItem id={"Cargando ..."} />)}
                </ContainBoxItem>
            </AdminReferences>

            <TransitionGroup>
                {!!modalDimension && (
                    <CSSTransition
                        classNames="add-dimension"
                        timeout={300}
                    >
                        <ModalAgregarDimension />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </ContainPickingMonitor>,
        document.getElementById('modal')
    );
}
