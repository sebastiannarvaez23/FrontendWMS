import React from "react";
import { createPicking } from "../../../ServicesConsumers/picking";
import { usePicking } from "../../../Context/picking-context";
import { useSaleOrder } from "../../../Context/saleorder-context";
import { useAuth } from "../../../Context/auth-context";
import './PickingList.css';

export const PickingList = (props) => {

    const { user } = useAuth();
    const { noSaleOrder } = useSaleOrder();
    const { setPickings, setLoadedPicking } = usePicking()

    let pickingDefaultData = {
        responsible: user.id,
        sale_order: noSaleOrder
    }

    return (
        <div className="dashBoard-picking">
            <h4>Listado de despachos de la orden</h4>
            <div className="header-list-pikings">
                <span>id</span>
                <span>Estado</span>
                <span>Responsable</span>
                <span>Creación</span>
                <span></span>
            </div>

            <button onClick={() => {
                createPicking(pickingDefaultData, setPickings, setLoadedPicking, noSaleOrder);
            }}
                className="btn-create-picking"
            >+</button>

            {props.children}
        </div>
    );
}