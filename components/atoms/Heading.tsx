import React from 'react'

const Heading = ({ title }: { title: string }) => {
    return (
        <h3 className="text-2xl font-bold capitalize mb-7">  {title} </h3>
    )
}

export default Heading