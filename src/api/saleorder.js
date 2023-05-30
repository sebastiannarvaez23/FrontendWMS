import axios from 'axios';
import { alertEventSuccess } from '../Alerts/SweetAlerts.js';
import { API } from './api/conf.js';
import { confRequest } from './api/conf.js';

export const getInfoSaleOrder = async (domain, noSaleOrder, setSaleOrder) => {
    if (noSaleOrder !== "") {
        await axios.get(API(domain) + "saleorder/" + noSaleOrder, confRequest)
            .then(response => {
                setSaleOrder(response.data);
            })
            .catch(err => alertEventSuccess("La orden de venta consultada no existe", "info"))
    }
}

export const getInfoReferencesRequest = async (domain, setLoadedSaleOrderItems, setSaleOrderItems, noSaleOrder) => {
    if (noSaleOrder !== "") {
        await axios.get(API(domain) + "saleorderitem/" + noSaleOrder, confRequest)
            .then(response => {
                setSaleOrderItems(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoadedSaleOrderItems(true);
            })
    }
}

export const getInfoIndicators = async (domain, customerName, noSaleOrder, setIndicatorsPicking) => {
    if (customerName !== "" && noSaleOrder !== "") {
        await axios.get(API(domain) + "saleorder/indicator/" + customerName + "/" + noSaleOrder + "/", confRequest)
            .then(response => {
                setIndicatorsPicking(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => {})
    }
}