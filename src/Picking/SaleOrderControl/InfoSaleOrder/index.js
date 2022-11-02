import React from "react";
import './InfoSaleOrder.css';

function InfoSaleOrder() {
    return (
        <div className="info-sale-order">
            <div>
                <p>Fecha publicación</p>
                <p>Fecha entrega</p>
                <p>Fecha de documento</p>
                <p>PO - Comentarios</p>
            </div>
            <div className="col-inp">
                <input readOnly />
                <input readOnly />
                <input readOnly />
                <input readOnly />
            </div>
            <div>
                <p>Nombre cliente</p>
                <p>Termino de pago</p>
                <p>Direccion de entrega</p>
                <p>Colección</p>
            </div>
            <div className="col-inp">
                <input readOnly />
                <input readOnly />
                <input readOnly />
                <input readOnly />
            </div>
        </div>
    );
}

export { InfoSaleOrder };