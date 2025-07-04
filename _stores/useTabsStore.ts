import { create } from "zustand";

type TabsState = {
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

const useTabsStore = create<TabsState>((set) => ({
  activeTab: 0,
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
export default useTabsStore;
