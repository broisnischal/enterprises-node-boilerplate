"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const redis_config_1 = __importDefault(require("./config/redis.config"));
const logger_1 = __importDefault(require("./log/logger"));
const handleProcessEvent = (server) => {
    process.on('SIGINT', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            server.close(() => {
                logger_1.default.info('Server closed gracefully');
                process.exit(0);
            });
            yield mongoose_1.default.connection.close();
            yield redis_config_1.default.quit();
        }
        catch (error) {
            logger_1.default.error(error);
            process.exit(0);
        }
    }));
    process.on('SIGTERM', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            server.close(() => {
                logger_1.default.info('Server closed gracefully');
                process.exit(0);
            });
            yield mongoose_1.default.connection.close();
            logger_1.default.info('Mongodb connection closed');
            yield redis_config_1.default.quit();
            logger_1.default.info('Redis connection closed');
        }
        catch (error) {
            logger_1.default.error('Error occurred while closing the server:', error);
            process.exit(1);
        }
    }));
};
exports.default = handleProcessEvent;
