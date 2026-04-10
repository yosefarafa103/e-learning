const WrapperBody = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="sm:px-[4vw] py-[1.6vw] w-full bg-background" >
            {children}
        </section>
    )
}
export default WrapperBody