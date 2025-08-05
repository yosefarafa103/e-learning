import { Schema, model } from "mongoose";
const lessonSchema = new Schema({
    course_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Course',
    },
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    content: {
        type: String,
        required: true,
    },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: false },
});

const Lesson = model('Lesson', lessonSchema);
export default Lesson;