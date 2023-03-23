import axios from 'axios';
import { APIPUBLIC, confRequestLogin } from './api/conf.js';
import Cookies from 'js-cookie';
import { alertSmallTopCenter } from '../Alerts/SweetAlerts.js';

export const loginUser = async (username, password, setUser, navigate) => {
  if (username === "") {
    alertSmallTopCenter("Ingrese un usuario para autenticarse", "info");
    return
  }

  if (password === "") {
    alertSmallTopCenter("Ingrese una contraseña para autenticarse", "info");
    return
  }

  await axios.post(APIPUBLIC + "registration/login/", { username, password }, confRequestLogin)
    .then((response) => {
      if (response.data.status === 200) {
        Cookies.set('token', response.data.access_token);
        setUser(response.data.user)
        navigate("/picking");
      }
    })
    .catch(err => alertSmallTopCenter("Credenciales incorrectas", "info"))
    .finally(() => { })
}

export const signUpCompany = async (setCompany, navigate, data) => {
  await axios.post(APIPUBLIC + "company/", data, confRequestLogin)
    .then((response) => {
        setCompany(response.data);
        navigate('/signup/user');
    })
    .catch(err => {})
    .finally(() => {})
}

export const signUpUserAdmin = async (data) => {

}