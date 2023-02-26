import React from "react";
import ReactDOM from "react-dom";
import { useSaleOrder } from "../../../Context/saleorder-context";
import './ModalSaleOrder.css';

export const ModalSaleOrder = (props) => {

    const { noSaleOrder, saleOrder, setSaleOrderModal } = useSaleOrder();

    const handleFrontLayerClick = (event) => {
        if (event.target.classList.contains('front-layer')) {
            setSaleOrderModal(false);
        }
    }

    return ReactDOM.createPortal(
        <React.Fragment>
            <div className="front-layer" onClick={handleFrontLayerClick}>
                <div className="contain-modal-sale-order">
                    <div className="title-contain-sale-order">
                        <h2>Orden de Venta No {noSaleOrder}</h2>
                    </div>
                    <div className="header-sale-order">
                        <div className="g-info-sale-order">
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
                                <input readOnly value={saleOrder.pay_term} />
                                <input readOnly value={saleOrder.delivery_address} />
                                <input readOnly value={saleOrder.collection} />
                            </div>
                        </div>
                    </div>
                    <div className="line-sale-order">
                        {props.children}
                    </div>
                </div>
            </div>
        </React.Fragment>,
        document.getElementById('saleorder')
    )
}