import axios from 'axios';
import { API } from './api/base.js';

const login = async (username, password) => {
  try {
    const response = await axios.post(API + 'users/login/', {
      username: username,
      password: password
    }, {
      withCredentials: true
    });
    console.log(response.data);
    // Hacer algo con la respuesta
  } catch (error) {
    console.log(error);
    // Manejar el error
  }
}