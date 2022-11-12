import React from "react";
import './DashBoardSaleOrder.css';

function loadInfoSaleOrder(saleOrderList, noSaleOrder) {
    {saleOrderList.map((saleOrder) => {
        console.log(saleOrder.noSaleOrder+" "+noSaleOrder)
        if (saleOrder.noSaleOrder == noSaleOrder){
            console.log("Encontrado");
        }
    })}
}

function DashBoardSaleOrder(props) {
    const [noSaleOrder, setNoSaleOrder] = React.useState("");

    return (
        <div className="dashboard-sale-order">
            <h3>Pedido de Venta</h3>
            <input value={noSaleOrder} onChange={(event)=>{setNoSaleOrder(event.target.value)}} className="inp-search-so" />
            <button className="btn btn-clean-dashboard-so">Limpiar</button>
            <button className="btn btn-export-status-order" onClick={()=>{loadInfoSaleOrder(props.saleOrderList, noSaleOrder)}}>Cargar</button>
        </div>
    );
}
export { DashBoardSaleOrder };