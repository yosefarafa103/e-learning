
import { IPost } from "@/types/courses";
import { model, Schema,  } from "mongoose"
import User from "@/models/user.model"
import Comments from "@/models/comment.model"

const postSchema = new Schema<IPost>(
    {
        author: { type: Schema.Types.ObjectId, ref: User, required: true },
        content: {
            type: String, required: [true, "Post Should Have Content"],
        },
        tags: [{ type: String }],
        likes: {
            type: Number,
            default: 0
        },
        visibility: {
            type: String,
            enum: ["public", "private", "followers"],
            default: "public",
        },
        replies: [{ type: Schema.Types.ObjectId, ref: Comments, default: [] }],
    },
    {
        timestamps: true,
    }
);
export default model("post", postSchema)