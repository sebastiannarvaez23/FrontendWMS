import React, { useState } from "react";
import './SaleOrderControl.css'

function SaleOrderControl(props) {
    return (
        <div className="sale-order-control">
            {props.children}
        </div>
    );

}

export {SaleOrderControl};