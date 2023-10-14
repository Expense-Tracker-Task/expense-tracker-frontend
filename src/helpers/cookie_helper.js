import Cookies from "universal-cookie"

export const setCookie = (name, value) => {
    const cookies = new Cookies();
    cookies.set(name, value, { secure: true });
}
export const getCookie = (name) => {
    const cookies = new Cookies();
    const cookie = cookies.get(name) == "null" ? null : cookies.get(name);
    return cookie;
}
export const removeCookie = name => {
  const cookies = new Cookies()
  // cookies.remove(name);
  cookies.set(name, null)
}

