"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluebase_1 = __importDefault(require("../common/bluebase"));
const deepmerge_1 = __importDefault(require("deepmerge"));
// TODO: Only for evaluation, remove this
const sample_1 = __importDefault(require("./sample"));
/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions = {
    plugins: [
        // TODO: Only for evaluation, remove this
        sample_1.default
    ],
};
exports.default = deepmerge_1.default(bluebase_1.default, bootOptions);
//# sourceMappingURL=bluebase.js.map