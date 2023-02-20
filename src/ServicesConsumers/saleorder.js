import axios from 'axios';
import { API } from './api/base.js';

export const loadInfoSaleOrder = async (noSaleOrder, setSaleOrder) => {
    if (noSaleOrder !== "") {
        await axios.get(API + "saleorder/" + noSaleOrder)
            .then(response => {
                setSaleOrder(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => { })
    }
}

export const getInfoReferencesRequest = async (setLoadedSaleOrderItems, setSaleOrderItems, noSaleOrder) => {
    if (noSaleOrder !== "") {
        await axios.get(API + "saleorderitem/" + noSaleOrder)
            .then(response => {
                setSaleOrderItems(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoadedSaleOrderItems(true);
            })
    }
}

export const getInfoIndicators = async (customerName, noSaleOrder, setIndicatorsPicking) => {
    if (customerName !== "" && noSaleOrder !== "") {
        await axios.get(API + "saleorder/indicator/" + customerName + "/" + noSaleOrder + "/")
            .then(response => {
                setIndicatorsPicking(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => {})
    }
}