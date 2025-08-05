import { stat } from 'fs';
import { create } from 'zustand';

type Tab = {
    id: string;
    title: string;
    content: string;
};

type TabsState = {
    activeTab: string | 0;
    setActiveTab: (id: string) => void;
};

const useTabsStore = create<TabsState>((set, get) => ({
    activeTab: 0,
    setActiveTab: (id) => {
        set({ activeTab: id });
    },
}));
export default useTabsStore;