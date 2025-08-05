import { ICourse } from "@/types/courses";
import axios from "axios";
interface CoursesClass {
    getCoursesData: () => Promise<ICourse[]>;
    handelGetCourseById: (id: string) => Promise<ICourse>;
}

class Courses implements CoursesClass {
    private url: string
    constructor() {
        this.url = 'https://e-learning-eight-tau.vercel.app/api/courses'
    }
    async handelGetCourseById(id: string) {
        try {
            const course = await axios.get(`${this.url}/${id}`)
            return course.data
        } catch (err: any) {
            console.error(err);
            throw new Error('Failed to fetch course')
        }
    }
    async getCoursesData() {
        try {
            const response = await axios.get(this.url);
            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch courses')
        }
    }
}
export default Courses;