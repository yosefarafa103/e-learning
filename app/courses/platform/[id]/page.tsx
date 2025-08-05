import BuyCourseButton from '@/components/atoms/BuyCourseButton';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import WrapperBody from '@/components/WrapperBody';
import { ICourse } from '@/types/courses';
import axios from 'axios';
import { Book, File, Gift, ShoppingBag, Timer, User } from 'lucide-react';
import React from 'react'
import Courses from "@/helpers/coursesData"
import formatNumberEU from '@/utils/formatNumber';

type Props = { params: Promise<{ id: string }> }
const courseService = new Courses()

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const course: { course: ICourse } = await courseService.handelGetCourseById(id);
    return {
        title: course.course.title,
        description: course.course.description,
    }
}
const page = async ({ params }: Props) => {
    const { id } = await params;
    const { course }: { course: ICourse } = await courseService.handelGetCourseById(id)

    return (
        <WrapperBody>
            <section className='w-full flex max-lg:flex-col gap-10'>
                <div className="flex-1">
                    <div className='h-[500px] bg-[#f7f7f7] rounded-2xl w-full'></div>
                    <div className="flex-col w-full flex gap-2 mt-5">
                        <div className="px-[2.4vw]">
                            <h3 className='text-4xl font-semibold'> {course?.instructor_id.name} </h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates suscipit voluptatem libero at, perspiciatis quos hic quidem quae cumque. Culpa amet et assumenda placeat saepe veniam fugiat aliquid incidunt laborum minima, optio odit repellendus molestias! Nesciunt itaque, rerum molestias numquam id repudiandae libero unde beatae illo. Porro reiciendis quibusdam excepturi quis sit! Esse culpa veritatis repellat? Nulla minima atque deleniti ipsa at! Ipsam odio pariatur cupiditate dolorem. Tempora suscipit, maxime veniam sint nam cupiditate fuga numquam exercitationem aperiam molestiae voluptates amet dolores quaerat magnam a quisquam impedit inventore doloremque, sapiente obcaecati facere. Ea, neque rem earum voluptates quisquam maxime quas!</p>
                        </div>
                    </div>
                </div>
                <div className="flex-[0.5]">
                    <h4 > <span className='text-[4.2vw]'> {formatNumberEU(course?.price)} </span> USD </h4>
                    <Button className='flex !py-3 w-full justify-start' variant={"ghost"} >
                        <Book />
                        <span>Lessons: </span>

                        {12}
                    </Button>
                    <Button className='flex !py-3 w-full justify-start' variant={"ghost"} >
                        <User />
                        <span>Students: </span>
                        <span> {course?.buyers.length} </span>
                    </Button>
                    <Button className='flex !py-3 w-full justify-start' variant={"ghost"} >
                        <File />
                        <span>Additional Recourses: </span>
                        <span>12</span>
                    </Button>
                    <Button className='flex !py-3 w-full justify-start' variant={"ghost"} >
                        <Timer />
                        <span>Duration: </span>
                        <span>8h And 23m</span>
                    </Button>
                    <div className="flex gap-4 mt-4">
                        <BuyCourseButton courseDescription={course?.description} courseId={course?._id!} price={formatNumberEU(course?.price)} imgs={[]} courseTitle={course?.title} variant='black' />
                        {/* <Button className='flex-1' size={"lg"} variant={"default"}></Button> */}
                        <Button className='flex-1' size={"lg"} variant={"outline"}> <Gift /> Buy As Gift</Button>
                    </div>
                    <Separator className='mt-4' />
                </div>
            </section>
        </WrapperBody>
    )
}

export default page