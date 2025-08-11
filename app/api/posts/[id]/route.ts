import { dbConnection } from "@/lib/db";
import Post from "@/models/posts.model";
import { IPost } from "@/types/courses";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    await dbConnection();

    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
    if (!id) {
        return NextResponse.json({ status: "Missing ID" }, { status: 400 });
    }

    try {
        const post = await Post.findById(id).populate("author").populate("replies");
        if (!post) {
            return NextResponse.json({ status: "Post Not Found" }, { status: 404 });
        }
        return NextResponse.json(
            {
                status: "Successfully",
                post,
            },
            {
                status: 200,
            }
        );
    } catch (error: any) {
        console.error("Err: ", error);
        return NextResponse.json(
            {
                status: "Failed To Get Post",
                err: error.message,
            },
            { status: 500 }
        );
    }
}

export async function PATCH(req: Request) {
    await dbConnection();

    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
        return NextResponse.json({ status: "Missing ID" }, { status: 400 });
    }

    try {
        const updatedPost: IPost = await req.json();
        let post;
        if (updatedPost.replies) {
            post = await Post.findByIdAndUpdate(
                id,
                { $push: { replies: { $each: updatedPost.replies } } },
                { new: true }
            );
        } else {
            post = await Post.findByIdAndUpdate(id, updatedPost, { new: true });
        }
        return NextResponse.json(
            {
                status: "Post Updated Successfully",
                post,
            },
            {
                status: 200,
            }
        );
    } catch (error: any) {
        console.error("Err: ", error);
        return NextResponse.json(
            {
                status: "Failed To Update Post",
                err: error.message,
            },
            { status: 500 }
        );
    }
}
