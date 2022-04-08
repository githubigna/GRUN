"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryUpdate = exports.categoryUpdateSchema = void 0;
const mongoose = require("mongoose");
exports.categoryUpdateSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    flag: {
        type: Boolean,
        default: false,
    },
    store_id: {
        type: String,
        require: true
    },
    hook_id: {
        type: String,
        require: true
    },
});
exports.categoryUpdate = mongoose.model('CategoryUpdate', exports.categoryUpdateSchema);
//# sourceMappingURL=categorySchema.js.map