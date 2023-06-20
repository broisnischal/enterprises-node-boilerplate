"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeString = void 0;
const textFilter_1 = require("./textFilter");
const sanitizeString = (str) => (0, textFilter_1.filterInput)(str);
exports.sanitizeString = sanitizeString;
// Middleware for the app
const sanitizeInput = (req, res, next) => {
    req.body = Object.entries(req.body).reduce((acc, [key, value]) => {
        acc[key] = typeof value === 'string' ? (0, exports.sanitizeString)(value) : value;
        return acc;
    }, {});
    next();
};
// sanitizedString = sanitizedString.replace(/<script.*?>.*?<\/script>/gi, ''); // Remove script tags
// sanitizedString = sanitizedString.replace(/<.*?>/g, ''); // Remove all HTML tags
// sanitizedString = sanitizedString.replace(/[^\w\s.-]/g, ''); // Remove special characters except for period (.), hyphen (-), and space
// sanitizedString = sanitizedString.replace(/\s+/g, ' '); // Replace multiple consecutive spaces with a single space
exports.default = sanitizeInput;
