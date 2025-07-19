import { dbConnection } from "@/lib/db";
import Post, { IPost } from "@/models/posts.model"
export async function GET() {
    await dbConnection();
    return Response.json({
        posts: [1, 2, 3]
    }, {
        status: 200
    })
}

export async function POST(req: Request) {
    await dbConnection();
    try {
        
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