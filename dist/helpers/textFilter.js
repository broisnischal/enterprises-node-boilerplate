"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterInput = void 0;
const unidecode_1 = __importDefault(require("unidecode"));
// import punycode from 'node:punycode';
// export const filterInput = (str: string): string => punycode.toUnicode(str);
const filterInput = (str) => (0, unidecode_1.default)(str);
exports.filterInput = filterInput;
