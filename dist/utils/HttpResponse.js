"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpResponse {
    constructor(status, message, data, additionalParams) {
        this.status = status;
        this.message = message;
        this.data = data;
        Object.assign(this, additionalParams);
    }
    static success(status, message, data, additionalParams) {
        return new HttpResponse(status, message, data, additionalParams);
    }
    toString() {
        return JSON.stringify(this);
    }
}
exports.default = HttpResponse;
