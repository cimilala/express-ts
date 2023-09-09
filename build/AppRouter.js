"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = require("express");
class AppRouter {
    static get Instance() {
        if (!AppRouter.routerInstance) {
            AppRouter.routerInstance = (0, express_1.Router)();
        }
        return AppRouter.routerInstance;
    }
}
exports.AppRouter = AppRouter;
