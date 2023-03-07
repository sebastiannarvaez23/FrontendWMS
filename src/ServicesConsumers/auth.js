import axios from 'axios';
import { API, confRequestLogin } from './api/base.js';
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

  await axios.post(API + "registration/users/login/",  { username, password }, confRequestLogin)
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