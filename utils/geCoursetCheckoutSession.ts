import axios from "axios";

export async function getCourseCheckoutSession() {
  const url = `https://e-learning-eight-tau.vercel.app/api/checkout`;
  try {
    const session = await axios.get(url);
    return session.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
