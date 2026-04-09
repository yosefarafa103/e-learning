const WrapperBody = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="sm:px-[4vw] px-[10px] py-[1.6vw] w-full bg-background" >
            {children}
        </section>
    )
}
export default WrapperBody