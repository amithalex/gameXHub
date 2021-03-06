"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true, limit: '10kb' }));
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/index.html'));
});
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'Not exist',
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map