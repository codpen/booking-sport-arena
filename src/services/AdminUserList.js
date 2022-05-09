import * as api from "../config/api";

const API = "https://haudhi.site";

export function getUserList(token) {
  return api.get(`${API}/lists/users`, null, {
    Authorization: `Bearer ${token}`,
  });
}
