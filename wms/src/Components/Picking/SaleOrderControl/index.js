import React, { useState } from "react";
import './SaleOrderControl.css'

export const SaleOrderControl = (props) => {
    return (
        <div className="sale-order-control">
            {props.children}
        </div>
    );

}