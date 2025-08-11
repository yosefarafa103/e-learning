import Heading from '@/components/atoms/Heading';
import { Separator } from '@/components/ui/separator';
import WrapperBody from '@/components/WrapperBody';
import { IPost } from '@/types/courses';
import img from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg"
import axios from 'axios';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { format, formatDistance } from 'date-fns';
import { Clock, Section, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IComment } from '@/models/comment.model';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import AddPostForm from '@/components/pages/posts/AddCommentToPost';
import { cn } from '@/lib/utils';
interface PostResponse {
    status: string,
    post: Pick<IPost, "author" | "content" | "createdAt" | "likes" | "replies" | "tags">
}
export async function Page({ params }: { params: Promise<{ postId: string }> }) {
    const { postId } = await params;
    const post: PostResponse = await (await axios.get(`https://e-learning-eight-tau.vercel.app/api/posts/${postId}`)).data
    const { author, content, createdAt, likes, replies } = post.post;
    return (
        <WrapperBody>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={"green"} className='my-2 ml-auto'> اضف تعليق </Button>
                </DialogTrigger>
                <DialogContent className='border-green-400'>
                    <AddPostForm />
                </DialogContent>
            </Dialog>
            <Heading title="المنشور" />
            <Separator />
            {/* @ts-ignore */}
            <Reply reply={{ author: author!._id?.toString() || "", content, createdAt: createdAt!, replies }} />
            {/*     <section className="center-flex !gap-2 my-5">
                <Button variant={'ghost'} size={"icon"} className="!border-[#284b63] border-[1px] border-solid">
                    <ThumbsUp stroke="#284b63" />
                </Button>
                {likes}
            </section> */}

            <Replies replies={replies!} />
        </WrapperBody>
    )
}
export default Page
type Replay = Pick<IComment, "content" | "createdAt" | "replies" | "author">
export function Replies({ replies }: { replies: Replay[] }) {
    return (
        <>
            <Heading title='Replies' />
            {!replies?.length && "No Replies Yet!"}
            <section className='pl-5'>
                {replies?.map((reply) =>
                    <Reply isSubComment key={reply.createdAt + ""} reply={reply} />
                )}
            </section>
        </>
    )
}


export function Reply({ reply: { author, content, createdAt, replies }, isSubComment = false }: { reply: Pick<IComment, "content" | "createdAt" | "replies" | "author">, isSubComment?: boolean }) {
    return (
        <>
            <section className={`${cn(!isSubComment ? "center-flex" : "flex gap-2 items-start")} mt-5`}>
                <Image src={img} height={isSubComment ? 40 : 60} width={isSubComment ? 40 : 60} alt="s" className="rounded-[50%]" />
                <div className={`flex flex-col ${cn(isSubComment ? "text-sm" : "")}`}>
                    <div className="flex gap-1 ">
                        <h3 className='mx-2 my-1 font-semibold'> {author.toString()} </h3>
                        <Badge variant={"orange"}>Student</Badge>
                        {/* <small className='px-1 flex items-center text-xs rounded-lg bg-orange-500 text-white'>  </small> */}
                    </div>
                    <section className='flex flex-col'>
                        <p className="text-muted-foreground text-xs flex items-center gap-1" > <Clock size={14} className="text-xs" /> {formatDistance(createdAt!, new Date(), { addSuffix: true })}  </p>
                        <h4 className='font-light mt-5' > {content} </h4>
                    </section>
                </div>
            </section>
            <Separator className='mt-4' />
        </>
    )
}