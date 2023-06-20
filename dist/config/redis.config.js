"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const logger_1 = __importDefault(require("log/logger"));
const redisClient = (0, redis_1.createClient)({
    url: process.env.REDIS_URL,
    legacyMode: true,
});
redisClient.on('error', err => {
    logger_1.default.error('error', err);
});
redisClient.on('connect', () => {
    logger_1.default.log('info', 'Redis connected');
});
process.on('SIGINT', () => {
    redisClient.quit();
});
exports.default = redisClient;
