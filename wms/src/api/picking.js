import axios from 'axios';

export const getPickings = async (setPickings, setLoadedPicking, noSaleOrder) => {
    if (noSaleOrder != "") {
        axios.get("http://localhost:8000/picking/get/" + noSaleOrder)
            .then(response => {
                setPickings(response.data);
                console.log(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoadedPicking(true))
    } else {
        setLoadedPicking(true);
    }
}

export const createPicking = async (data, setPickings, setLoadedPicking, noSaleOrder) => {
    axios.post("http://localhost:8000/picking/create/", data)
        .then((response) => {
            const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => getPickings(setPickings, setLoadedPicking, noSaleOrder))
}
