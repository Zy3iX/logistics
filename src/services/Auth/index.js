import { axiosInstance } from '../../api/api.js';
import { LocalStorageKeys } from '../../storage/localStorageKey.js';
import axios from 'axios';

export const clearStorage = () => {
  localStorage.removeItem(LocalStorageKeys.LOGISTICS_ACCESS_TOKEN);
  localStorage.removeItem(LocalStorageKeys.LOGISTICS_REFRESH_TOKEN);
  localStorage.removeItem(LocalStorageKeys.ACCOUNT_DATA);
  localStorage.clear();
};

export const checkerAddress =
  import.meta.env?.MODE === 'development'
    ? 'http://localhost:8080'
    : window.location.origin;

export const onLogin = (data) => {
  return axiosInstance.post('/api/authenticate', data);
};


export const getCurrentAccount = (bearerToken) => {
  return axios.get(checkerAddress + '/api/account', {
    headers: {
      Authorization: 'Bearer ' + bearerToken,
    },
  });
};
