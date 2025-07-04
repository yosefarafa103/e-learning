"use client"
import PersonBlock from '@/components/atoms/PersonBlock'
import WrapperBody from '@/components/WrapperBody'
import img from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import InstructorCourses from '@/components/InstructorCourses'
import FullHeading from '@/components/molecules/FullHeading'
import { useTranslation } from 'react-i18next'
const PageContent = () => {
    const { t } = useTranslation();
    return (
        <>
            <WrapperBody>
                <FullHeading lanKey={t("instructors")} desc={t("instructorSentins")} />
                <Carousel
                    opts={{
                        align: "start",
                        loop: true
                    }}
                    className="w-full "

                >
                    <CarouselContent>
                        {new Array(10).fill("0").map(() => (
                            <CarouselItem className="sm: pl-4 basis-1/2  sm:basis-1/3  md:basis-1/4  lg:basis-1/6">
                                <PersonBlock dimensions={{ height: 300, width: 300 }} personInfo='Arabic Mr' personName='Mohamed. A' character={img} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <InstructorCourses />

            </WrapperBody>
        </>
    )
}

export default PageContent