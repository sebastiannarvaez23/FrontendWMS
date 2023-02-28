import Cookies from 'js-cookie';

export const API = 'http://localhost:8000/';

export const confRequest = {
  headers: {
    'Content-Type': 'application/json',
    "Authorization": `Token fee64c366c2b75ada214826b10ac0741aaae2d45`
  }
}

export const confRequestLogin = ({
  headers: {
    'Content-Type': 'application/json'
  }
}, { withCredentials: true })