import langugesStore from "@/_stores/langugeStore";

export function handelChangeLanguge(lan: string) {
  langugesStore.getState().setCurrentLanguge(lan);
  localStorage.setItem("lan", lan);
}
