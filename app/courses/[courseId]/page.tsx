import PageContent from '@/components/pages/coursePage/PageContent'
import { CoursesData } from '@/constants/courses'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

type Props = {
    params: Promise<{ courseId: string }>
}
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { courseId } = await params
    return {
        title: `${CoursesData[+courseId - 1].title}`,
    }
}
const page = () => {
    return (
        <PageContent />
    )
}

export default page