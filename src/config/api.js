import axios from "axios";

// axios get
export async function get(url, params, headers) {
  const axiosResponse = await axios
    .get(url, {
      params,
      headers,
    })
    .then((response) => response.data)
    .catch((error) => error);
  return axiosResponse;
}

export async function post(url, params, headers, body) {
  const axiosResponse = await axios
    .post(url, body, {
      params,
      headers,
    })
    .then((response) => response.data)
    .catch((error) => error.response.data);
  return axiosResponse;
}

export async function put(url, params, headers) {
  const axiosResponse = await axios
    .put(url, {
      params,
      headers,
    })
    .then((response) => response.data)
    .catch((error) => error.response.data);
  return axiosResponse;
}

export async function destroy(url, params, headers) {
  const axiosResponse = await axios
    .put(url, {
      params,
      headers,
    })
    .then((response) => response.data)
    .catch((error) => error.response.data);
  return axiosResponse;
}
