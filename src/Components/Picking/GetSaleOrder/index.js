import React from "react";
import { loadInfoSaleOrder } from "../../../ServicesConsumers/saleorder";
import { useBox } from "../../../Context/box-context";
import { usePicking } from "../../../Context/picking-context";
import { useSaleOrder } from "../../../Context/saleorder-context";
import './GetSaleOrder.css';

export const GetSaleOrder = (props) => {

    const { noSaleOrder, setSaleOrder, setNoSaleOrder } = useSaleOrder();
    const {setIndicatorsPicking, setPickings} = usePicking();
    const { setBoxItems} = useBox();

    function clearInputsSaleOrders() {
        setIndicatorsPicking({
            picking_quantity_by_customer: "",
            request_quantity_by_customer: "",
            picking_quantity_by_saleorder: "",
            request_quantity_by_saleorder: ""
        })

        setBoxItems([])

        setSaleOrder({
            publication_date:"",
            delivery_date:"",
            doc_date:"",
            po_comments:"",
            customer_name:"",
            delivery_address:"",
            pay_term:"",
            collection:""
        });
        setNoSaleOrder("");
        setPickings([])
    }

    return (
        <div className="dashboard-sale-order">
            <h3>Pedido de Venta</h3>
            <input value={noSaleOrder} onChange={(event) => { setNoSaleOrder(event.target.value) }} className="inp-search-so" />
            <button className="btn btn-export-status-order" onClick={() => { loadInfoSaleOrder(noSaleOrder, setSaleOrder) }}>Cargar</button>
            <button className="btn btn-clean-dashboard-so" onClick={() => { clearInputsSaleOrders() }}>Limpiar</button>
        </div>
    );
}