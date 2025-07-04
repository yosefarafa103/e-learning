import Tabs from "@/components/pages/myCourses/Tabs"
import WrapperTabsContent from "@/components/pages/myCourses/WrapperTabsContent"
const page = () => {

    return (
        <>
            <Tabs tabs={["All", "Inprogress", "Completed",]} />
            <WrapperTabsContent />
        </>
    )
}

export default page