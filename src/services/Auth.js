import * as api from "../config/api";

const API = "https://haudhi.site";

export function loginService(body) {
  return api.post(`${API}/login`, null, null, body);
}

export function registerService(body) {
  return api.post(`${API}/users`, null, null, body);
}
