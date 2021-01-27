import axios, { Method } from 'axios';

import configs from '../configs';

const request = async (_endpoint: string, method: Method, body = null, token?: string) => {
  let endpoint = _endpoint;
  if (!_endpoint.startsWith('http')) endpoint = `${configs.apiUrl}${_endpoint}`;

  let authHeader;

  if (token) authHeader = `Bearer ${token}`;

  const requestOptions = {
    method,
    url: endpoint,
    headers: {}
  };

  if (method !== 'GET') Object.assign(requestOptions, { data: body });
  if (authHeader) Object.assign(requestOptions.headers, { Authorization: authHeader });

  try {
    const { data } = await axios(requestOptions);
    return {
      error: false,
      data
    };
  } catch (e) {
    return {
      error: true,
      message: e.response?.data?.message ?? e.message,
      data: e.response?.data ?? null
    };
  }
};

export const get = (endpoint: string, ...rest: any) => request(endpoint, 'GET', ...rest);

export const post = (endpoint: string, body: any, ...rest: any) => request(endpoint, 'POST', body, ...rest);

export const patch = (endpoint: string, body: any, ...rest: any) => request(endpoint, 'PATCH', body, ...rest);

export const del = (endpoint: string, body: any, ...rest: any) => request(endpoint, 'DELETE', body, ...rest);
