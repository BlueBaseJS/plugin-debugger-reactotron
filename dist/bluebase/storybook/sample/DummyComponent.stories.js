"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@bluebase/core");
const storybook_addon_1 = __importDefault(require("@bluebase/storybook-addon"));
const DummyComponent = core_1.getComponent('DummyComponent');
storybook_addon_1.default('BlueBase', module)
    .add('DummyComponent', () => (react_1.default.createElement(DummyComponent, null)));
//# sourceMappingURL=DummyComponent.stories.js.map