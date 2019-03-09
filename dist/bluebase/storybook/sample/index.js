"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DummyComponent_1 = __importDefault(require("./DummyComponent"));
const core_1 = require("@bluebase/core");
exports.default = core_1.createPlugin({
    key: 'dummy-plugin',
    name: 'DummyPlugin',
    components: {
        DummyComponent: DummyComponent_1.default,
    }
});
//# sourceMappingURL=index.js.map