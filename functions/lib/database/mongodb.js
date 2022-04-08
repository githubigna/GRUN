"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongo = void 0;
const mongoose = require("mongoose");
class mongo {
    //mongodb+srv://Admin:FlowyMongoDB@cluster0.hobgl.mongodb.net/cluster0?retryWrites=true&w=majority
    async init() {
        try {
            await mongoose.connect("mongodb+srv://admin:aycaramba@cluster0.imeo3.mongodb.net/cluster0?retryWrites=true&w=majority");
            console.log("Database connected!!!:::");
        }
        catch (e) {
            throw new Error("Error conectando con la base de datos :: src/database/mongodb.ts ::");
        }
    }
}
exports.mongo = mongo;
//# sourceMappingURL=mongodb.js.map