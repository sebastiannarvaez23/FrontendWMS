import Cookies from 'js-cookie';

export const API = 'http://localhost:8000/';

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