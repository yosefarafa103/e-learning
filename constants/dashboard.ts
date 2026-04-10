import GroupsTab from "@/components/atoms/groupPage/GroupsTab";
import ChargeTab from "@/components/pages/account/teacher/ChargeTab";
import CourseTab from "@/components/pages/account/teacher/CourseTab";
import InstructorSettings from "@/components/pages/account/teacher/Settings";
import { fakeChats, MessageInfo, TabsElement } from "@/types/dashboard";
type fakeMessge = {
    [key: string]: MessageInfo[]
}
export const tabs: TabsElement[] = [
    {
        element: CourseTab,
        key: "courses"
    },
    {
        element: ChargeTab,
        key: "charge"
    },
    {
        element: InstructorSettings,
        key: "settings"
    },
    {
        element: GroupsTab,
        key: "group"
    }
]
export const fakeMessages: fakeMessge = {
    teacher: [
        {
            from: "teacher",
            text: "Please submit your quiz today.",
            time: "09:30 AM",
        },
        { from: "me", text: "Thanks, I’ll do it now.", time: "09:32 AM" },
    ],
    classmates: [
        {
            from: "me",
            text: "When should we start the review?",
            time: "11:00 AM",
        },
        { from: "classmates", text: "At 7 PM on Zoom.", time: "11:05 AM" },
    ],
    support: [
        {
            from: "support",
            text: "Your issue has been resolved.",
            time: "Yesterday",
        },
        { from: "me", text: "Thanks for the quick help!", time: "Yesterday" },
    ],
}
export const chats: fakeChats = [
    {
        id: "teacher",
        name: "Dr. Ahmed Ali",
        last: "Please submit your quiz today.",
    },
    {
        id: "classmates",
        name: "Study Group",
        last: "Let’s review chapter 5 together.",
    },
    {
        id: "support",
        name: "Technical Support",
        last: "Your issue has been resolved.",
    },
];