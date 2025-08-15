import mongoose from "mongoose";

export interface ISubject {
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}

export interface SchemaType extends Document {
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}

const subjectSchema = new mongoose.Schema<SchemaType>(
    {
        title: { type: String, required: true },
        description: { type: String },
        // @ts-ignore
        thumbnail: { type: String },
        teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        category: { type: String },
        level: { type: String },
        studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        progressTracking: { type: Boolean, default: true },

    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }

    }
);

module.exports = mongoose.model('Subject', subjectSchema);
