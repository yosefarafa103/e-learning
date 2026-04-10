"use client"
import PersonBlock from '@/components/atoms/PersonBlock'
import WrapperBody from '@/components/WrapperBody'
import img from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg"
import InstructorCourses from '@/components/InstructorCourses'
import FullHeading from '@/components/molecules/FullHeading'
import { useTranslation } from 'react-i18next'
const PageContent = () => {
    const { t } = useTranslation();
    return (
        <>
            <WrapperBody>
                <FullHeading lanKey={t("instructors")} desc={t("instructorSentins")} />
                <div className="grid grid-cols-5 gap-2">
                    {new Array(5).fill("0").map(() => (
                        <PersonBlock dimensions={{ height: 100, width: 100 }} personInfo='Arabic Mr' personName='Mohamed. A' character={img} />
                    ))}
                </div>
                <InstructorCourses />

            </WrapperBody>
        </>
    )
}

export default PageContent