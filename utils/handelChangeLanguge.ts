import langugesStore from "@/_stores/langugeStore";
export function handelChangeLanguge(lan: string) {
  langugesStore.getState().setCurrentLanguge(lan);
  if (typeof window !== 'undefined') {
    localStorage.setItem("lan", lan);
  }
}
