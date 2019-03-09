"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { BootOptions, BlueBase } from "@bluebase/core";
const src_1 = require("../../src");
// This file contain all the apps, plugins and configuration which are required
// for booting bluebase. see https://blueeast.gitbooks.io/bluebase/
exports.default = {
    plugins: [
        src_1.ReactotronDebugger
    ],
    configs: {
        'plugins.reactotron.configure': true,
        'plugins.reactotron.connect': true,
        'plugins.reactotron.apisauce': true,
    },
};
//# sourceMappingURL=bluebase.js.map