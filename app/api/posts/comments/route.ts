import { dbConnection } from "@/lib/db";
import Comment, { IComment } from "@/models/comment.model";
import Post from "@/models/posts.model";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await dbConnection();
        const postid = req.nextUrl.searchParams.get("postId");
        const { author, content, }: IComment = await req.json();
        const comment = await Comment.create({ postId: postid, author, content });
        await Post.findByIdAndUpdate(postid, { $push: { replies: comment._id } }, { new: true });
        return Response.json({
            status: "Comment Created Successfully",
            comment
        }, {
            status: 201,
        })
    } catch (error: any) {
        console.log("Err: " + error);
        return Response.json({
            status: "Failed To Create Comment",
            err: error
        }, { status: 404 })
    }
}
