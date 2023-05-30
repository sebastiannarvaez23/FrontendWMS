import axios from 'axios';

const key = "54bbf9383b4876a76924c8f91e96a4bd";
const urlGetAllCountries = "http://battuta.medunes.net/api/country/all/?key=" + key;
const urlGetAllStates = (countryCode) => "http://battuta.medunes.net/api/region/" + countryCode + "/all/?key=" + key;
const urlGetAllCities = (countryCode, stateName) => "http://battuta.medunes.net/api/city/" + countryCode + "/search/?region=" + stateName + "&key=" + key;

export const getCountries = async (setCountries) => {
    await axios.get(urlGetAllCountries)
        .then(response => {
            setCountries(response.data);
        })
        .catch(err => console.log(err))
        .finally()
}

export const getStates = async (countrySelected, setStates) => {
    await axios.get(urlGetAllStates(countrySelected.code))
        .then(response => {
            setStates(response.data);
        })
        .catch(err => console.log(err))
        .finally()

}

export const getCities = async (countrySelected, stateSelected, setCities) => {
    await axios.get(urlGetAllCities(countrySelected.code, stateSelected.region))
        .then(response => {
            setCities(response.data);
        })
        .catch(err => console.log(err))
        .finally()
}

