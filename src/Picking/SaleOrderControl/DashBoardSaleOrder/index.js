import React from "react";
import './DashBoardSaleOrder.css';

function DashBoardSaleOrder() {
    return (
        <div className="dashboard-sale-order">
            <h3>Pedido de Venta</h3>
            <input className="inp-search-so" />
            <button className="btn btn-clean-dashboard-so">Limpiar</button>
            <button className="btn btn-export-status-order">Exportar estado pv</button>
        </div>
    );
}
export { DashBoardSaleOrder };