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
import { ModalDimension } from "./ModalDimension";
import { AddDimension } from "./ModalDimension/AddDimension";
import { DimensionItem } from "./ModalDimension/DimensionItem";

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
        modalDimension,
        loadDimensions,
        dimensions,
        modalAddDimension
    } = useBox();

    const {
        boxItems,
        loadedBoxItem,
        setBoxItems,
        setLoadedBoxItem,
        setInpReference,
        setQuantity
    } = useBoxItem();

    // useEffect

    useEffect(() => {
        getBoxes(setBoxes, setLoadedBox, pickingSelected);
    }, [saleOrderModal])

    useEffect(() => {
        getBoxesItem(setBoxItems, setLoadedBoxItem, boxSelected);
        setInpReference("");
        setQuantity("");
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
                        <ModalDimension>
                            <TransitionGroup>
                                {loadDimensions && dimensions.map((dimension) => (
                                    <CSSTransition key={dimension.id} timeout={500} classNames="fade">
                                        <DimensionItem
                                        name={dimension.name}
                                        dimension_height={dimension.dimension_height}
                                        dimension_width={dimension.dimension_width}
                                        dimension_length={dimension.dimension_length}
                                        weight={dimension.weight}
                                        />
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                            {!loadedBoxItem && (<BoxItem id={"Cargando ..."} />)}
                        </ModalDimension>
                    </CSSTransition>
                )}
            </TransitionGroup>

            <TransitionGroup>
                {!!modalAddDimension && (
                    <CSSTransition
                        classNames="add-dimension"
                        timeout={300}
                    >
                        <AddDimension />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </ContainPickingMonitor>,
        document.getElementById('modal')
    );
}
