"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluebase_1 = __importDefault(require("../common/bluebase"));
const deepmerge_1 = __importDefault(require("deepmerge"));
/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions = {
// config: {
// 	wallpaper: {
// 		backgroundColor: 'white',
// 		resizeMode: 'cover',
// 		source: require('./../../assets/web/wallpaper.png'),
// 	},
// }
};
exports.default = deepmerge_1.default(bluebase_1.default, bootOptions);
//# sourceMappingURL=bluebase.js.map