import axios from 'axios';
import { LocalStorageKeys } from '../storage/localStorageKey';
import { notification } from 'antd';
import { clearStorage } from '../services/Auth';

export const checkerAddress =
  import.meta.env?.MODE === 'development'
  ? 'http://localhost:8080/'
    : '/';

export const originAddress =
  import.meta.env?.MODE === 'development'
  ? 'http://localhost:8080/'
    : window.location.origin;
const axiosParams = {
  baseURL: checkerAddress
};

const axiosParamsWithHeader = {
  baseURL: checkerAddress,
  headers: {
    Authorization:
      'Bearer ' + localStorage.getItem(LocalStorageKeys.FREEDOM_ACCESS_TOKEN)
  }
};

const axiosInstance = axios.create(axiosParams);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    if (error?.status === 401) {
      notification.error({ message: "Не авторизован" });
      clearStorage();
    } else if (error?.status === '403') {
      notification.error({
        message:"Отказано в доступе"
      });
    } else if (error?.status === '404') {
      notification.error({
        message: "По запросу ничего не найдено"
      });
    } else if (error.response) {
      notification.error({
        message: i18n.t(error.response.data.code) || error.response.data.message || "Что то пошло не так!"
      });
    }

    throw error;
  }
);
const axiosInstanceWithHeader = axios.create(axiosParamsWithHeader);
axiosInstanceWithHeader.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      clearStorage();
      location.reload();
      notification.error({ message: "Не авторизован" });
    } else if (error.response?.status === 403) {
      notification.error({
        message:"Отказано в доступе"
      });
    } else if (error.response?.status === 404) {
      notification.error({
        message: "По запросу ничего не найдено"
      });
    } else {
      if (error.response) {
        console.log(error.response)
        if (error.response.data.code) {
          const errorCode = error.response.data.code;
          notification.error({ message: i18n.t(errorCode)});
        } else {
          notification.error({
            message: error.response.data.message || 'Error'
          });
        }
      }
    }

    throw error;
  }
);
export { axiosInstance, axiosInstanceWithHeader };
