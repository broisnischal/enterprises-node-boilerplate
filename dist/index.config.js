"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const conf = {
    app: {
        mongoURI: (_a = process.env.MONGO_URI) !== null && _a !== void 0 ? _a : 'mongodb://127.0.0.1:27017/test',
        port: (_b = process.env.PORT) !== null && _b !== void 0 ? _b : 5000,
    },
};
exports.default = conf;
