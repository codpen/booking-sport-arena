import * as api from "../config/api";

const API = "https://haudhi.site";

export function getOwnerList(token) {
  return api.get(`${API}/lists/owners`, null, {
    Authorization: `Bearer ${token}`,
  });
}
