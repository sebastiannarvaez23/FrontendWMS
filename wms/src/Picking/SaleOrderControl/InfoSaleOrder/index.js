import React from "react";
import { useSaleOrder } from "../../../Context/saleorder-context";
import './InfoSaleOrder.css';

export const InfoSaleOrder = () => {

    const { saleOrder } = useSaleOrder();

    return (
        <div className="info-sale-order">
            <h4>Información del pedido de venta</h4>
            <div>
                <p>Fecha publicación</p>
                <p>Fecha entrega</p>
                <p>Fecha de documento</p>
                <p>PO - Comentarios</p>
            </div>
            <div className="col-inp">
                <input readOnly value={saleOrder.publication_date} />
                <input readOnly value={saleOrder.delivery_date} />
                <input readOnly value={saleOrder.doc_date} />
                <input readOnly value={saleOrder.po_comments} />
            </div>
            <div>
                <p>Nombre cliente</p>
                <p>Termino de pago</p>
                <p>Direccion de entrega</p>
                <p>Colección</p>
            </div>
            <div className="col-inp">
                <input readOnly value={saleOrder.customer_name} />
                <input readOnly value={saleOrder.delivery_address} />
                <input readOnly value={saleOrder.pay_term} />
                <input readOnly value={saleOrder.collection} />
            </div>
        </div>
    );
}