import GroupsTab from "@/components/atoms/groupPage/GroupsTab";
import ChargeTab from "@/components/pages/account/teacher/ChargeTab";
import CourseTab from "@/components/pages/account/teacher/CourseTab";
import InstructorSettings from "@/components/pages/account/teacher/Settings";
import { TabsElement } from "@/types/dashboard";


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
