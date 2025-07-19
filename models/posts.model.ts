
import { model, Schema, ObjectId } from "mongoose"

export interface IPost {
    author: ObjectId
    content: string;
    tags?: string[];
    likes?: number;
    visibility?: 'public' | 'private' | 'followers';

    replies?: []
    createdAt?: Date;
    updatedAt?: Date;
}

const postSchema = new Schema<IPost>(
    {
        author: { type: Schema.Types.ObjectId, ref: "User", required: true },
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
        replies: [{ type: Schema.Types.ObjectId, ref: "Post", default: [] }],
    },
    {
        timestamps: true,
    }
);
export default model("post", postSchema)