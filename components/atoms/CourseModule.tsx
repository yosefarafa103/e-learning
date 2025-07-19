import { BookOpen } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { useTranslation } from 'react-i18next';
type moduleType = { lessonName: string; desc: string }
const CourseModule = ({
    desc,
    lessonName
}: moduleType) => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)
    return (

        <section className='flex gap-5'>
            <Button variant={"ghost"} size={"lg"} className='bg-secondary/80' >
                <BookOpen />
            </Button>
            <section className='column'>
                <h3 className="collapsed-link_course"> {lessonName} </h3>
                <Collapsible onOpenChange={setOpen}>
                    <CollapsibleTrigger>
                        <>
                            {!open && <>
                                {desc.slice(0, 85)}
                                <Button className='my-2 block' variant={"outline"}>
                                    {t("showMore")}
                                </Button>
                            </>}
                        </>
                    </CollapsibleTrigger>
                    <CollapsibleContent className='paragraph'>
                        {open && desc}
                        <CollapsibleTrigger asChild>
                            <Button className='my-2 block' variant={"outline"}>
                                {t("showLess")}
                            </Button>
                        </CollapsibleTrigger>
                    </CollapsibleContent>
                </Collapsible>
            </section>
        </section>
    )
}

export default CourseModule