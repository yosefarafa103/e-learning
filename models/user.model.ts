import { IUser } from "@/types/user"
import { model, Schema } from "mongoose"

import bcrypt from "bcrypt"
import Course from "./courses.model"
const usersSchema = new Schema<IUser>({
    name: { type: String, required: true, trim: true, minlength: 3, maxlength: 22 },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ['student', 'teacher'], default: 'student' },
    imgProfile: { type: String, default: "" },
    subjects: {
        type: [String],
        default: []
    },
    enrolled_courses: {
        type: [Schema.Types.ObjectId],
        ref: Course,
        default: []
    }
},
    {
        timestamps: true,
    })
usersSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


usersSchema.methods.comparePassword = async function (candidatePassword: string) {
    return bcrypt.compare(candidatePassword, this.password);
};
export default model("User", usersSchema)