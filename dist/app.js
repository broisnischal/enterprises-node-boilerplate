"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sanitize_1 = __importDefault(require("./helpers/sanitize"));
const HttpResponse_1 = __importDefault(require("./utils/HttpResponse"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '5mb' }));
app.use(sanitize_1.default);
app.post('/test', (req, res) => {
    const additionalParams = { res: 'asdf' };
    const response = new HttpResponse_1.default(200, 'OK', { test: req.body }, additionalParams);
    return res.send(response);
});
app.get('/', (req, res) => res.send('Hello World!'));
exports.default = app;
