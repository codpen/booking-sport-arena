import * as api from "../config/api";

const API =
  "https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0";

export function loginService(body) {
  return api.post(
    `${API}/login`,
    null,
    {
      "content-type": "application/x-www-form-urlencoded",
    },
    body
  );
}

export function registerService(body) {
  return api.post(
    `${API}/users`,
    null,
    {
      "content-type": "application/x-www-form-urlencoded",
    },
    body
  );
}
