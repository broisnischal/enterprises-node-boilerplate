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
const app_1 = __importDefault(require("app"));
const redis_config_1 = __importDefault(require("./config/redis.config"));
const logger_1 = __importDefault(require("./log/logger"));
const mongoose_config_1 = __importDefault(require("./config/mongoose.config"));
const processEvents_1 = __importDefault(require("./processEvents"));
const server = app_1.default.listen(3000, () => __awaiter(void 0, void 0, void 0, function* () {
    yield redis_config_1.default.connect();
    yield (0, mongoose_config_1.default)();
    logger_1.default.info('Listening on port 3000');
}));
(0, processEvents_1.default)(server);
