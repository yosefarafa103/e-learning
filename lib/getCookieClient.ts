import { useCookies } from "next-client-cookies";
export function useToken() {
  const cookies = useCookies();
  const token = cookies.get("token");
  return token;
}
export function useCookieValue(name: string) {
  const cookies = useCookies();
  return cookies.get(name);
}
