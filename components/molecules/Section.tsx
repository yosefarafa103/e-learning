import React from 'react'
interface Props {
    title: string;
    subtitle?: string;
    desc?: string;
    children?: React.ReactNode
}
const Section = ({ title, desc, subtitle, children }: Props) => {
    return (
        <section className="w-full py-4 bg-background">
            <div className="max-w-6xl mx-auto px-6 sm:text-center">
                <h2 className="sm:text-4xl text-xl font-bold text-primary mb-4">
                    {title}
                    <span className="text-indigo-600">{subtitle}</span>
                </h2>
                <div className="w-24 h-1 bg-indigo-500 sm:mx-auto mb-8 rounded-full" />
                <p className="text-lg text-primary leading-relaxed max-w-3xl mx-auto">
                    {desc}
                </p>
            </div>
            <>
                {children}
            </>
        </section>
    )
}

export default Section
