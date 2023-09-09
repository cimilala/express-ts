"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const user_service_1 = __importDefault(require("../service/user.service"));
const routes_1 = require("../decorators/routes");
const controller_1 = require("../decorators/controller");
const use_1 = require("../decorators/use");
const logger_1 = require("../middwares/logger");
const bodyValitador_1 = require("../decorators/bodyValitador");
let userService = new user_service_1.default();
let UserController = class UserController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield userService.login());
        });
    }
    insertMany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield userService.insertMany());
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield userService.find(req.body));
        });
    }
};
__decorate([
    (0, bodyValitador_1.bodyValitador)("username", "password"),
    (0, routes_1.post)("/user"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, routes_1.post)("/inseartMany"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "insertMany", null);
__decorate([
    (0, use_1.use)(logger_1.logger),
    (0, routes_1.post)("/find"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "find", null);
UserController = __decorate([
    (0, controller_1.controller)()
], UserController);
exports.default = UserController;
