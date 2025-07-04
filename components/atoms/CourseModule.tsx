import { BookOpen } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const CourseModule = () => {
    return (

        <section className='flex gap-5'>
            <Button variant={"ghost"} size={"lg"} className='bg-secondary/80' >
                <BookOpen />
            </Button>
            <section className='column'>
                <h3 className="collapsed-link_course">Module 2: The Arabic Alphapets</h3>
                <p className='paragraph '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </section>
        </section>
    )
}

export default CourseModule