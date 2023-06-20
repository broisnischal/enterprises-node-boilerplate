"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line object-curly-newline
const mongoose_1 = require("mongoose");
const model_enum_1 = __importDefault(require("enum/v1/model.enum"));
const tokenSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        refPath: 'userModel',
        index: {
            unique: true,
            background: true,
        },
    },
    userModel: {
        type: String,
        enum: ['Agent', 'Admin', 'User'],
    },
    type: {
        type: String,
        enum: model_enum_1.default.token.type,
        required: true,
    },
});
const tokenModel = (0, mongoose_1.model)('Token', tokenSchema);
exports.default = tokenModel;
