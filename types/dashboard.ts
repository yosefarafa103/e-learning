type Tabs = "courses" | "charge" | "group" | "settings"
type TabsElement = {
    key: Tabs;
    element: () => React.JSX.Element
};
type MessageInfo = {
    from: string;
    text: string;
    time: string;
}

export type fakeChats = {
    id: "teacher" | "classmates" | "support";
    name: string;
    last: string;
}[];

export type { Tabs, TabsElement, MessageInfo }