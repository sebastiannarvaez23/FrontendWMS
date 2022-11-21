import axios from 'axios';

export const loadInfoSaleOrder = async (noSaleOrder, setLoaded, props) => {
    axios.get("http://localhost:8000/saleorder/get/" + noSaleOrder)
        .then(response => {
            props.setSaleOrder(response.data);
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoaded(true);
        })
}

export const getInfoReferencesRequest = async (setLoadedSaleOrderItems, setSaleOrderItems, noSaleOrder) => {
    axios.get("http://localhost:8000/saleorder/getitems/" + noSaleOrder)
        .then(response => {
            setSaleOrderItems(response.data);
            console.log(response.data);
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoadedSaleOrderItems(true);
        })
}

export const getInfoIndicators = async (customerName, noSaleOrder, setIndicatorsPicking) => {
    if (customerName != "" && noSaleOrder != ""){
        axios.get("http://localhost:8000/saleorder/getinfoindicators/" + customerName + "/" + noSaleOrder + "/")
            .then(response => {
                setIndicatorsPicking(response.data);
                console.log(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => {})
    }
}