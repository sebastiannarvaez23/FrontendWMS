import React, { useState } from "react";
import { loadInfoSaleOrder } from "../../../api/saleorder";
import './DashBoardSaleOrder.css';

function DashBoardSaleOrder(props) {
    const [loaded, setLoaded] = useState(false);

    function clearInputsSaleOrders() {
        props.setIndicatorsPicking({
            picking_quantity_by_customer: "",
            request_quantity_by_customer: "",
            picking_quantity_by_saleorder: "",
            request_quantity_by_saleorder: ""
        })

        props.setSaleOrder({
            publication_date:"",
            delivery_date:"",
            doc_date:"",
            po_comments:"",
            customer_name:"",
            delivery_address:"",
            pay_term:"",
            collection:""
        });
        props.setNoSaleOrder("");
        props.setPickings([])
    }

    return (
        <div className="dashboard-sale-order">
            <h3>Pedido de Venta</h3>
            <input value={props.noSaleOrder} onChange={(event) => { props.setNoSaleOrder(event.target.value) }} className="inp-search-so" />
            <button className="btn btn-export-status-order" onClick={() => { loadInfoSaleOrder(props.noSaleOrder, setLoaded, props) }}>Cargar</button>
            <button className="btn btn-clean-dashboard-so" onClick={() => { clearInputsSaleOrders() }}>Limpiar</button>
        </div>
    );
}
export { DashBoardSaleOrder };