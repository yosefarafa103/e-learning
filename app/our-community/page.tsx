import { Separator } from "@/components/ui/separator";
import { IPost } from "@/types/courses";
import { format } from "date-fns";
import Image from "next/image";
import img from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg"
import Link from "next/link";
import { Clock, MessageCircle } from "lucide-react";
import TranslatedHeading from "@/components/atoms/TranslatedHeading";
import AuthWrapper from "@/components/auth/AuthWrapper";
import AuthAreaHeader from "@/components/atoms/AuthAreaHeader";
import WrapperBody from "@/components/WrapperBody";
import { IComment } from "@/models/comment.model";
const page = async () => {
    const handelGetPosts = async () => {
        try {
            let data = await fetch(`https://e-learning-eight-tau.vercel.app/api/posts`).then(d => d.json())
            return data
        } catch (error) {
            console.log(error);
        }
    }
    const { posts }: { status: string, posts: IPost[] } = await handelGetPosts();
    return (
        <>
            <AuthWrapper>
                <TranslatedHeading title="commonQuestions" />
                <section className="mt-10">
                    {posts.filter((item) => item.visibility !== "private").map((el) => (
                        <>
                            <StudentCommentHead replies={el.replies || []} role={el.author.role} postId={el._id!} commentAuther={el.content} publishedDate={el.updatedAt!} />
                            <Separator className="mt-4" />
                        </>
                    ))}
                </section>
            </AuthWrapper>
        </>
    )
}

export default page


export function StudentCommentHead({ publishedDate, commentAuther, postId, role, replies }: { publishedDate: Date, commentAuther: string, postId: string, role: "student" | "teacher", replies: IComment[] }) {
    return (
        <>
            <Link href={`/posts/${postId}`} className="center-flex mt-5">
                <Image src={img} height={60} width={60} alt="s" className="rounded-[50%]" />
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold"> {commentAuther!?.slice(0, 10)} </h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1" title={format(publishedDate, "EEEE, MMMM d, yyyy")}> <Clock className="text-xs" /> {format(publishedDate, "EEEE, MMMM d, yyyy")} {<>
                        <MessageCircle className="ml-3" /> {replies.length}

                    </>
                    } </p>
                    <div>{role} </div>
                </div>
            </Link>
        </>
    )
}