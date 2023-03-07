import axios from 'axios';
import { alertEventSuccess } from '../Alerts/SweetAlerts.js';
import { API } from './api/base.js';
import { confRequest } from './api/base.js';

export const loadInfoSaleOrder = async (noSaleOrder, setSaleOrder) => {
    if (noSaleOrder !== "") {
        await axios.get(API + "saleorder/" + noSaleOrder, confRequest)
            .then(response => {
                setSaleOrder(response.data);
            })
            .catch(err => alertEventSuccess("La orden de venta consultada no existe", "info"))
    }
}

export const getInfoReferencesRequest = async (setLoadedSaleOrderItems, setSaleOrderItems, noSaleOrder) => {
    if (noSaleOrder !== "") {
        await axios.get(API + "saleorderitem/" + noSaleOrder, confRequest)
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
        await axios.get(API + "saleorder/indicator/" + customerName + "/" + noSaleOrder + "/", confRequest)
            .then(response => {
                setIndicatorsPicking(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => {})
    }
}