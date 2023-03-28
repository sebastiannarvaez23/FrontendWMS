import axios from 'axios';
import { API, APIPUBLIC, confRequestLogin } from './api/conf.js';
import Cookies from 'js-cookie';
import { alertSmallTopCenter } from '../Alerts/SweetAlerts.js';

export const loginUser = async (domain, username, password, setUser, navigate) => {
  if (username === "") {
    alertSmallTopCenter("Ingrese un usuario para autenticarse", "info");
    return
  }

  if (password === "") {
    alertSmallTopCenter("Ingrese una contraseña para autenticarse", "info");
    return
  }

  await axios.post(API(domain) + "registration/login/", { username, password }, confRequestLogin)
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

export const signUpCompany = async (setCompany, setDomain, navigate, data) => {
  await axios.post(APIPUBLIC + "company/", data, confRequestLogin)
    .then((response) => {
        setCompany(response.data);
        setDomain(response.data.schema_name)
        navigate('/signup/user');
    })
    .catch(err => {})
    .finally(() => {})
}

export const signUpUserAdmin = async (domain, data) => {
  console.log(data);
  await axios.post(API(domain) + "registration/signup/", data, confRequestLogin)
  .then((response) => {
    console.log("usuario registrado");
    console.log(response.data);
  })
  .catch(err => {})
  .finally(() => {})
}