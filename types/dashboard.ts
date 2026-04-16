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
export interface Assignment {
    id: number;
    title: string;
    course: string;
    dueDate: string;
    status: Exclude<AssignmentStatus, "all">;
    progress: number;
    type: AssignmentType;
}
export type fakeChats = {
    id: "teacher" | "classmates" | "support";
    name: string;
    last: string;
}[];
export type AssignmentStatus = 'all' | "pending" | "in_progress" | "completed"
export type AssignmentType = "quiz" | "assignment"
export type AssignmentStatusList = ['all', "pending", "in_progress", "completed"]
export type { Tabs, TabsElement, MessageInfo }

