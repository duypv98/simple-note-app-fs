import axios from 'axios';

import configs from '../configs';

const request = async (_endpoint, method, body, token) => {
  let endpoint = _endpoint;
  if (!_endpoint.startsWith('http')) endpoint = `${configs.apiUrl}${_endpoint}`;

  let authHeader;

  if (token) authHeader = `Bearer ${token}`;

  const requestOptions = {
    method,
    url: endpoint,
    headers: {}
  };

  if (method !== 'GET') requestOptions.data = body;
  if (authHeader) requestOptions.headers.Authorization = authHeader;

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

export const get = (endpoint, ...rest) => request(endpoint, 'GET', ...rest);

export const post = (endpoint, body, ...rest) => request(endpoint, 'POST', body, ...rest);

export const patch = (endpoint, body, ...rest) => request(endpoint, 'PATCH', body, ...rest);

export const del = (endpoint, body, ...rest) => request(endpoint, 'DELETE', body, ...rest);
