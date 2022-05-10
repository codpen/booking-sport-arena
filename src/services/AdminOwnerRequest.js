import * as api from "../config/api";

const API = "https://haudhi.site";

export function getRequestOwner(token) {
  return api.get(`${API}/lists/owners-request`, null, {
    Authorization: `Bearer ${token}`,
  });
}

export function approveOwnerRequest(token, body) {
  return api.put(`${API}/verification/approve`, null, {
    Authorization: `Bearer ${token}`,
    body,
  });
}

export function rejectOwnerRequest(token, id) {
  return api.put(`${API}/verification/reject`, null, {
    Authorization: `Bearer ${token}`,
  });
}
