"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntercomError = void 0;
class IntercomError extends Error {
    isIntercomError = true;
    sdk = 'Intercom';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.IntercomError = IntercomError;
//# sourceMappingURL=IntercomError.js.map