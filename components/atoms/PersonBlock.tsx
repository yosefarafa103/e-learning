import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Card, CardContent } from '../ui/card'

const PersonBlock = ({ character, personInfo, personName, dimensions }: { character: StaticImageData, personInfo: string, personName: string, dimensions: { width: number, height: number } }) => {
    return (
        <Card >
            <CardContent className='border-blue-900/50'>
                <section className="mt-4 flex-col">
                    <Image className="rounded-xl object-cover w-full max-sm:w-40 max-md:w-[180px] " {...dimensions} src={character.src} alt="Instructor" />
                    <section className="column">
                        <h3 className="collapsed-link_course max-sm:text-center mt-4 !font-semibold"> {personName} </h3>
                        <p className="text-muted-foreground max-sm:text-center"> {personInfo} </p>
                    </section>
                </section>
            </CardContent>
        </Card>
    )
}

export default PersonBlock