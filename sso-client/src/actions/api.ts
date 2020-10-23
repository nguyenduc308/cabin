import api from 'apis';
import { Dispatch } from 'redux';

export const getItems = (endpoint: string, typeAction?: string, params?: any) => {
  return async (dispatch: Dispatch): Promise<any> => {
    try {
      const res = await api.get(endpoint, params);
      if (typeAction) {
        dispatch({
          type: typeAction,
          payload: res.data,
        });
      }
      return res.data;
    } catch (err) {
      return Promise.reject(err);
    }
  };
};
export const getItemById = () => {};
export const createItem = () => {};
export const updateItem = () => {};
export const deleteItem = () => {};

export const login = (value: any, callbackSuccess: any, callbackFailed: any) => {
  return async (dispatch: Dispatch): Promise<any> => {
    try {
      const res = await api.post('/auth/login', value);
      callbackSuccess(res.data.token);
      return res.data;
    } catch (err) {
      callbackFailed();
      return Promise.reject(err);
    }
  };
};
export const verifyToken = (token: string, callbackSuccess: any, callbackFailed: any) => {
  return async (dispatch: Dispatch): Promise<any> => {
    try {
      const res = await api.post('/auth/verify?token=' + token);
      if (callbackSuccess && typeof callbackSuccess === 'function') {
        callbackSuccess(res.data.token);
      }
      return res.data;
    } catch (err) {
      if (callbackFailed && typeof callbackFailed === 'function') {
        callbackFailed();
      }
      return Promise.reject(err);
    }
  };
};
