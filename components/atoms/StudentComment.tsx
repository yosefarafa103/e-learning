import img from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg"
import { Star, ThumbsDown, ThumbsUp } from "lucide-react"
import Image from "next/image"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"

const StudentComment = () => {
    return (
        <>
            <div className="center-flex mt-5">
                <Image src={img.src} height={60} width={60} alt="s" className="rounded-[50%]" />
                <div className="column">
                    <h3 className="collapsed-link_course">Fatima Ali</h3>
                    <p className="paragraph special font-semibold">1 Month age</p>
                </div>
            </div>
            <div className="center-flex !gap-1 my-4 ml-2">
                {new Array(5).fill(0).map((el, i) => (
                    <Star size={20} fill={"#000"} />
                ))}
            </div>
            <p className="paragraph sm:w-[600px] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel beatae saepe maiores voluptatum quidem quia, unde qui commodi dignissimos reprehenderit ex modi consectetur illum minus sed laboriosam voluptatibus, aliquid ratione voluptate! Dicta eos iusto ad?</p>
            <section className="center-flex !gap-3 my-4">
                <Button variant={'ghost'} size={"icon"} className="!border-[#284b63] border-[1px] border-solid">
                    <ThumbsUp stroke="#284b63" />
                </Button>
                <Button variant={'ghost'} size={"icon"} className="!border-[#284b63] border-[1px] border-solid">
                    <ThumbsDown stroke="#284b63" />
                </Button>
            </section>
            <Separator className="mt-3" />
        </>
    )
}

export default StudentComment