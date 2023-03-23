import Cookies from 'js-cookie';

export const APIPUBLIC = 'http://public.localhost:8000/';
export const API = (domain) => 'http://' + domain + ':8000/';

export const confRequest = {
  headers: {
    'Content-Type': 'application/json',
    "Authorization": `Token ${Cookies.get('token')}`
  }
}

export const confRequestLogin = ({
  headers: {
    'Content-Type': 'application/json'
  }
}, { withCredentials: true })