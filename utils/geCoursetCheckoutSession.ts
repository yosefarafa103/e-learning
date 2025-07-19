import axios from "axios";

export async function getCourseCheckoutSession() {
  const url = `http://localhost:3000/api/checkout`;
  try {
    const session = await axios.get(url);
    return session.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
