"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Reactotron = require('reactotron-react-js').default;
const core_1 = require("@bluebase/core");
exports.ReactotronDebugger = core_1.createPlugin({
    key: 'reactotron',
    name: 'reactotron',
    categories: ['debugger'],
    defaultConfigs: {
        'plugins.reactotron.useTrackGlobalErrors': false,
        'plugins.reactotron.apisauce': false
    },
    filters: {
        'bluebase.boot.end': (_bootOptions, _ctx, BB) => {
            Reactotron.configure();
            // .use(BB.Configs.getValue('plugins.reactotron.useTrackGlobalErrors'))
            // .apisauce(BB.Configs.getValue('plugins.reactotron.apisauce'))
            Reactotron.connect();
            // Reactotron.clear()
            Reactotron.log('hello rendering world');
            BB.Logger.log('test====>');
        },
        'bluebase.plugins.initialize': (_bootOptions, _ctx, _BB) => {
            Reactotron.configure()
                // .use(BB.Configs.getValue('plugins.reactotron.useTrackGlobalErrors'))
                // .apisauce(BB.Configs.getValue('plugins.reactotron.apisauce'))
                .connect();
            // send data to logging provider here
        },
        'bluebase.logger.debug': (message, { params }, BB) => {
            Reactotron.log(message, params);
            Reactotron.display({
                message,
                params,
                BB
            });
        }
    }
});
//# sourceMappingURL=sampleCode.js.map