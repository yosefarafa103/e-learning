enum Languges {
  english = "en",
  arabic = "ar",
}
import { create } from "zustand";
interface langStore {
  currentLanguge: Languges | string;
  setCurrentLanguge: (val: Languges | string) => void;
}

const langugeStore = create<langStore>((set) => ({
  currentLanguge: typeof window !== 'undefined' && localStorage.getItem("lan") || Languges.arabic,
  setCurrentLanguge(val) {
    set({ currentLanguge: val });
  },
}));

export default langugeStore;
