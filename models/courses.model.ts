import { Schema, model } from 'mongoose';
import Lesson from './lesson.model';

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    instructor_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    lessons: {
        type: [Schema.Types.ObjectId],
        ref: Lesson,
        default: []
    },
    rating: {
        type: Number,
        default: 0,
    },
    buyers: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        default: [],
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: false },
});

const Course = model('Course', courseSchema);
export default Course;
