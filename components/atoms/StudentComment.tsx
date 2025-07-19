import img from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg"
import { Star, ThumbsDown, ThumbsUp } from "lucide-react"
import Image from "next/image"
import { Separator } from "../ui/separator";
import { formatDistanceToNow } from "date-fns"
import { Button } from "../ui/button"
interface Props {
    text: string;
    numberOfLikes: number;
    commentAuther: string;
    commentAutherImg: string;
    publishedDate: string
}
const StudentComment = ({ numberOfLikes, text, commentAuther, commentAutherImg, publishedDate }: Props) => {
    return (
        <>
            <div className="center-flex mt-5">
                <Image src={commentAutherImg} height={60} width={60} alt="s" className="rounded-[50%]" />
                <div className="column">
                    <h3 className="collapsed-link_course"> {commentAuther.slice(1)} </h3>
                    <p title={publishedDate} className="paragraph special font-semibold capitalize"> {formatDistanceToNow(publishedDate).replaceAll("about", "")} </p>
                </div>
            </div>
            <div className="center-flex !gap-1 my-4 ml-2">
                {new Array(5).fill(0).map((el, i) => (
                    <Star size={20} fill={"#000"} />
                ))}
            </div>
            <p className="paragraph sm:w-[600px] "> {text} </p>
            <section className="center-flex !gap-2 my-4">
                <Button variant={'ghost'} size={"icon"} className="!border-[#284b63] border-[1px] border-solid">
                    <ThumbsUp stroke="#284b63" />
                </Button>
                <b>{numberOfLikes > 0 ? numberOfLikes : ""}</b>
                <Button variant={'ghost'} size={"icon"} className="!border-[#284b63] border-[1px] border-solid mx-3">
                    <ThumbsDown stroke="#284b63" />
                </Button>
            </section>
            <Separator className="mt-3" />
        </>
    )
}

export default StudentComment