import axios from "axios";

export default async function getSubjects() {
    try {
        const res = await axios.get("https://e-learning-eight-tau.vercel.app/api/subjects")
        return res.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}