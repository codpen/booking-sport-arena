import * as api from "../config/api";

const API = "https://haudhi.site";

export function changePassword(token, body) {
  return api.put(
    `${API}/admin/password`,
    null,
    {
      Authorization: `Bearer ${token}`,
    },
    body
  );
}

export function getOwnerList(token) {
  return api.get(`${API}/lists/owners`, null, {
    Authorization: `Bearer ${token}`,
  });
}

export function getRequestOwner(token) {
  return api.get(`${API}/lists/owners-request`, null, {
    Authorization: `Bearer ${token}`,
  });
}

export function approveOwnerRequest(token, body) {
  return api.put(
    `${API}/verification/approve`,
    null,
    {
      Authorization: `Bearer ${token}`,
    },
    body
  );
}

export function rejectOwnerRequest(token, body) {
  return api.put(
    `${API}/verification/reject`,
    null,
    {
      Authorization: `Bearer ${token}`,
    },
    body
  );
}

export function getUserList(token) {
  return api.get(`${API}/lists/users`, null, {
    Authorization: `Bearer ${token}`,
  });
}
