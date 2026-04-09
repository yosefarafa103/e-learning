import { Tabs } from "@/types/dashboard"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { TFunction } from "i18next"
interface ButtonProps {
    activeTab: Tabs
    setActiveTab: (value: React.SetStateAction<Tabs>) => void
    t: TFunction<"translation", undefined>;
    itemKey: Tabs
}
export function TabItem({ children, key }: { children: React.ReactNode, key: Tabs }) {
    return <motion.div
        key={key}
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
    >
        {children}
    </motion.div>
}
TabItem.Button = ({ activeTab, setActiveTab, t, itemKey }: ButtonProps) => (
    <Button
        variant={activeTab === itemKey ? "blue" : "ghost"}
        onClick={() => setActiveTab(itemKey)}
    >
        {t(`dashboard.tabs.${itemKey}`)}
    </Button>
)