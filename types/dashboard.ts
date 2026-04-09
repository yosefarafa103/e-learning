type Tabs = "courses" | "charge" | "group" | "settings"
type TabsElement = {
    key: Tabs;
    element: () => React.JSX.Element
}

export type { Tabs, TabsElement }