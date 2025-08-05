import mongoose, { Schema, model } from "mongoose";
import User from "@/models/user.model"
export interface IComment  {
    postId: mongoose.Types.ObjectId;
    author: mongoose.Types.ObjectId;
    content: string;
    replies?: string[];
    createdAt: Date;
    updatedAt: Date;
}

const CommentSchema: Schema<IComment> = new Schema(
    {
        postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
        author: { type: Schema.Types.ObjectId, ref: User, required: true },
        content: { type: String, required: true },
        replies: [{ type: String }],
    },
    { timestamps: true }
);
const CommentModel = model<IComment>("Comment", CommentSchema);
export default CommentModel;