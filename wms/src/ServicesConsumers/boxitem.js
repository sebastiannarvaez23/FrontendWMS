import axios from 'axios';

export const getBoxesItem = async (setBoxItems, setLoadedBoxItem, idBox) => {
    if (idBox != "") {
        axios.get("http://localhost:8000/box/getboxitems/" + idBox)
            .then(response => {
                setBoxItems(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoadedBoxItem(true))
    } else {
        setLoadedBoxItem(true);
    }
}

export const createBoxItem = async (setBoxItems, setLoadedBoxItem, idBox, data) => {
    axios.post("http://localhost:8000/box/createboxitem/", data)
    .then((response) => {
        const { data } = response;
    })
    .catch(err => console.log(err))
    .finally(() => getBoxesItem(setBoxItems, setLoadedBoxItem, idBox))
}