import axios from 'axios';

// Dimension

export const getDimensions = async (setDimensions) => {
    axios.get("http://localhost:8000/box/getdimensions/")
        .then(response => {
            setDimensions(response.data);
        })
        .catch(err => console.log(err))
        .finally()
}

// Box

export const getBoxes = async (setBoxes, setLoadedBox, pickingSelected) => {
    if (pickingSelected != "") {
        axios.get("http://localhost:8000/box/getboxes/" + pickingSelected)
            .then(response => {
                setBoxes(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoadedBox(true))
    } else {
        setLoadedBox(true);
    }
}

export const createBox = async (data, setBoxes, setLoadedBox, idPicking) => {
    axios.post("http://localhost:8000/box/create/", data)
        .then((response) => {
            const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => getBoxes(setBoxes, setLoadedBox, idPicking))
}

export const updateBox = async (data, setBoxes, setLoadedBox, boxSelected, idPicking) => {
    axios.put("http://localhost:8000/box/update/"+boxSelected, data)
        .then((response) => {
            const { data } = response;
        })
        .catch(err => console.log(err))
        .finally(() => getBoxes(setBoxes, setLoadedBox, idPicking))
}