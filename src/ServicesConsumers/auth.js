import axios from 'axios';
import { API, confRequestLogin } from './api/base.js';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const https = require('https');

export const loginUser = async (username, password, setUser, navigate) => {
  await axios.post(API + "registration/users/login/",  { "username": username, "password": password }, confRequestLogin)
      .then((response) => {
        if (response.data.status === 200) {
          Cookies.set('token', response.data.access_token);
          setUser(response.data.user)
          navigate("/picking");
        } else {
          
        }
      })
      .catch(err => console.log(err))
      .finally(() => { })
}