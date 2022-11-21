import React from "react";
import './InfoSaleOrder.css';

function InfoSaleOrder(props) {

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
                <input readOnly value={props.saleOrder.publication_date} />
                <input readOnly value={props.saleOrder.delivery_date} />
                <input readOnly value={props.saleOrder.doc_date} />
                <input readOnly value={props.saleOrder.po_comments} />
            </div>
            <div>
                <p>Nombre cliente</p>
                <p>Termino de pago</p>
                <p>Direccion de entrega</p>
                <p>Colección</p>
            </div>
            <div className="col-inp">
                <input readOnly value={props.saleOrder.customer_name} />
                <input readOnly value={props.saleOrder.delivery_address} />
                <input readOnly value={props.saleOrder.pay_term} />
                <input readOnly value={props.saleOrder.collection} />
            </div>
        </div>
    );
}

export { InfoSaleOrder };