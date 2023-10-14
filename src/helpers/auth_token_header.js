import {getCookie} from "helpers/cookie_helper"

export default function authHeader() {
  const token = JSON.parse(getCookie("access_token"))
  if (token = null) return {}
  return { Authorization: accessToken }
}
