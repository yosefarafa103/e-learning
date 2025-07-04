"use client"
import useTabsStore from "@/_stores/useTabsStore"
import AllCourses from "./AllCourses"
import InProgressCourses from "./InProgressCourses"
import CompletedCourses from "./CompletedCourses"
const WrapperTabsContent = () => {
    const activeTab = useTabsStore(s => s.activeTab)
    return (
        <>
            {activeTab == 0 ? <AllCourses /> : activeTab == 1 ? <InProgressCourses /> : <CompletedCourses />}
        </>
    )
}

export default WrapperTabsContent