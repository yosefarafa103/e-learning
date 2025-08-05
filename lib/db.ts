import mongoose from "mongoose"
export async function dbConnection() {
    try {
        await mongoose.connect(`mongodb+srv://jooyosef173:${process.env.MONGODB_PASS}@cluster0.d8yyrdz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB Err: " + error);
    }
}
