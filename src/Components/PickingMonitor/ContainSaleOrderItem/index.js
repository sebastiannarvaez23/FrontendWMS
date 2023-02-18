import React from "react";

export const ContainSaleOrderItem = (props) => {
    return (
        <div className="ref-request">
                <h3>Referencias solicitadas</h3>
                <div className="ref-list">
                    <div className="headers-list-ref">
                        <span>#</span>
                        <span>Referencia</span>
                        <span>Talla</span>
                        <span>Color</span>
                        <span>Cantidad</span>
                    </div>
                    {props.children}
                </div>
            </div>
    );
}