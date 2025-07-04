import Image, { StaticImageData } from 'next/image'
import React from 'react'

const PersonBlock = ({ character, personInfo, personName, dimensions }: { character: StaticImageData, personInfo: string, personName: string, dimensions: { width: number, height: number } }) => {
    return (
        <section className="center-flex mt-4 flex-col">
            <Image className="rounded-[50%] object-cover max-sm:w-40 max-md:w-[180px] " {...dimensions} src={character.src} alt="Instructor" />
            <section className="column">
                <h3 className="collapsed-link_course max-sm:text-center !font-semibold"> {personName} </h3>
                <p className="paragraph sepcail text-center"> {personInfo} </p>
            </section>
        </section>
    )
}

export default PersonBlock