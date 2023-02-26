//React
import React, { useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactDOM from "react-dom";
import "./PickingMonitor.css"

// API
import { getBoxes } from "../../../ServicesConsumers/box";
import { getBoxesItem } from "../../../ServicesConsumers/boxitem";

// components
import { AdminReferences } from "./AdminReferences";
import { AdminBox } from "./AdminBox";
import { Box } from "./Box";
import { BoxItem } from "./BoxItem";
import { ContainBoxItem } from "./ContainBoxItem";
import { ContainPickingMonitor } from "./ContainPickingMonitor";
import { ContainSaleOrderItem } from "./ContainSaleOrderItem";
import { SaleOrderItem } from "./SaleOrderItem"
import { ModalDimension } from "./ModalDimension";
import { AddDimension } from "./ModalDimension/AddDimension";
import { DimensionItem } from "./ModalDimension/DimensionItem";

// Context
import { usePicking } from "../../../Context/picking-context";
import { useSaleOrder } from "../../../Context/saleorder-context";
import { useBox } from "../../../Context/box-context";
import { useBoxItem } from "../../../Context/boxitem-context";

export const PickingMonitor = () => {

    // Context 

    const {
        saleOrderModal,
        referencesRequest,
        loadGetBoxesSaleOrderItems,
    } = useSaleOrder();

    const {
        pickingSelected
    } = usePicking();

    const {
        listBoxes,
        loadGetBoxes,
        boxSelected,
        setLoadGetBoxes,
        setListBoxes,
        viewModalDimension,
        loadListDimensions,
        listDimensions,
        viewModalAddDimension,
        searchDimension
    } = useBox();

    const {
        listBoxItems,
        loadGetBoxItems,
        setListBoxItems,
        setLoadGetBoxItems,
        setInpReference,
        setQuantity
    } = useBoxItem();

    // useEffect

    useEffect(() => {
        getBoxes(setListBoxes, setLoadGetBoxes, pickingSelected);
    }, [saleOrderModal])

    useEffect(() => {
        getBoxesItem(setListBoxItems, setLoadGetBoxItems, boxSelected);
        setInpReference("");
        setQuantity("");
    }, [boxSelected])


    let searchedDimensions = [];
    if (!searchDimension.length >= 1) {
        searchedDimensions = listDimensions;
    } else {
        searchedDimensions = listDimensions.filter(dimension => {
            const dimensionName = dimension.name.toLowerCase();
            const searchText = searchDimension.toLowerCase();
            return dimensionName.includes(searchText);
        });
    }
    // Render 

    return ReactDOM.createPortal(
        <ContainPickingMonitor>

            <AdminBox>
                <TransitionGroup>
                    {loadGetBoxes && listBoxes.map(box => (
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
                {!loadGetBoxes && (<Box id={"Cargando ..."} />)}

            </AdminBox>
            <AdminReferences>
                <ContainSaleOrderItem>
                    {loadGetBoxesSaleOrderItems && referencesRequest.map(reference => (
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
                    {!loadGetBoxesSaleOrderItems && (<SaleOrderItem id={"Cargando ..."} />)}
                </ContainSaleOrderItem>
                <ContainBoxItem>
                    <TransitionGroup>
                        {loadGetBoxItems && listBoxItems.map((reference) => (
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
                    {!loadGetBoxItems && (<BoxItem id={"Cargando ..."} />)}
                </ContainBoxItem>
            </AdminReferences>

            <TransitionGroup>
                {!!viewModalDimension && (
                    <CSSTransition
                        classNames="add-dimension"
                        timeout={300}
                    >
                        <ModalDimension>
                            <TransitionGroup>
                                {loadListDimensions && searchedDimensions.map((dimension) => (
                                    <CSSTransition key={dimension.id} timeout={500} classNames="fade">
                                        <DimensionItem
                                            id={dimension.id}
                                            name={dimension.name}
                                            dimension_height={dimension.dimension_height}
                                            dimension_width={dimension.dimension_width}
                                            dimension_length={dimension.dimension_length}
                                            weight={dimension.weight}
                                        />
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                            {!loadGetBoxItems && (<BoxItem id={"Cargando ..."} />)}
                        </ModalDimension>
                    </CSSTransition>
                )}
            </TransitionGroup>

            <TransitionGroup>
                {!!viewModalAddDimension && (
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
