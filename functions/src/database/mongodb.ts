import * as mongoose from "mongoose"
export class mongo {
    //mongodb+srv://Admin:FlowyMongoDB@cluster0.hobgl.mongodb.net/cluster0?retryWrites=true&w=majority
    async init(){
        try {
            await mongoose.connect("mongodb+srv://Admin:FlowyMongoDB@cluster0.hobgl.mongodb.net/cluster0?retryWrites=true&w=majority");
            console.log("Database connected!!!:::");
        } catch (e) {
            throw new Error("Error conectando con la base de datos :: src/database/mongodb.ts ::")
        }
    }
}