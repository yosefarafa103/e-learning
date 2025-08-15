import React from 'react'

const GridWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="my-5 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {children}
        </section>
    )
}

export default GridWrapper