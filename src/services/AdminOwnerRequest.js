import * as api from "../config/api";

const API = "https://haudhi.site";

export function getRequestOwner(token) {
  return api.get(`${API}/lists/owners-request`, null, {
    Authorization: `Bearer ${token}`,
  });
}
