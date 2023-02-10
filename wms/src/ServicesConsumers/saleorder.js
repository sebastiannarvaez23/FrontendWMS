import axios from 'axios';
import { API } from './api/base.js';

export const loadInfoSaleOrder = async (noSaleOrder, setLoaded, setSaleOrder) => {
    axios.get(API + "saleorder/" + noSaleOrder)
        .then(response => {
            setSaleOrder(response.data);
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoaded(true);
        })
}

export const getInfoReferencesRequest = async (setLoadedSaleOrderItems, setSaleOrderItems, noSaleOrder) => {
    axios.get(API + "saleorder/getitems/" + noSaleOrder)
        .then(response => {
            setSaleOrderItems(response.data);
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoadedSaleOrderItems(true);
        })
}

export const getInfoIndicators = async (customerName, noSaleOrder, setIndicatorsPicking) => {
    if (customerName !== "" && noSaleOrder !== "") {
        axios.get(API + "saleorder/getinfoindicators/" + customerName + "/" + noSaleOrder + "/")
            .then(response => {
                setIndicatorsPicking(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => {})
    }
}