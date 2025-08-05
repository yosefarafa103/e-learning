import { dbConnection } from "@/lib/db";
import Post from "@/models/posts.model"
import { IPost } from "@/types/courses";
export async function GET() {
    try {
        await dbConnection();
        const posts = await Post.find()
        return Response.json({
            status: "Successfully",
            posts
        }, {
            status: 200,
        })
    } catch (error: any) {
        console.log("Err: " + error);
        return Response.json({
            status: "Failed To Create Post",
            err: error
        }, { status: 404 })

    }
}

export async function POST(req: Request) {
    try {
        await dbConnection();
        const { author, content, visibility, tags, }: IPost = await req.json();
        const post = await Post.create({ author, content, visibility, tags })
        return Response.json({
            status: "Post Created Successfully",
            post
        }, {
            status: 201,
        })
    } catch (error: any) {
        console.log("Err: " + error);
        return Response.json({
            status: "Failed To Create Post",
            err: error
        }, { status: 404 })
    }
}


