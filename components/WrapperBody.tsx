const WrapperBody = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="sm:px-[4vw] px-[20px] py-[1.6vw] w-full" >
            {children}
        </section>
    )
}

export default WrapperBody