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
