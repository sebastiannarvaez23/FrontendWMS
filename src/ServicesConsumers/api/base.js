import Cookies from 'js-cookie';

export const API = 'http://localhost:8000/';

export const confRequest = {
    //withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Token ${Cookies.get('token')}`
    }
}