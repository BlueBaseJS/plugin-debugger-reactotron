"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Reactotron = require('reactotron-react-js').default;
const apisaucePlugin = require('reactotron-apisauce');
const { trackGlobalErrors } = require('reactotron-react-js');
const core_1 = require("@bluebase/core");
exports.ReactotronDebugger = core_1.createPlugin({
    categories: ['debugger'],
    key: 'reactotron',
    name: 'reactotron',
    defaultConfigs: {
        'plugins.reactotron.apisauce': false,
        'plugins.reactotron.useTrackGlobalErrors': false,
        'plugins.reactotron.connect': false,
        'plugins.reactotron.configure': false
    },
    filters: {
        'bluebase.boot.end': (_bootOptions, _ctx, BB) => {
            Reactotron
                .configure(BB.Configs.getValue('plugins.reactotron.configure'))
                .use(apisaucePlugin(BB.Configs.getValue('plugins.reactotron.apisauce')))
                .use(trackGlobalErrors(BB.Configs.getValue('plugins.reactotron.apisauce')))
                .connect(BB.Configs.getValue('plugins.reactotron.connect'));
            BB.Logger.log('test====>');
        },
        'bluebase.plugins.initialize': (_bootOptions, _ctx, BB) => {
            Reactotron
                .configure(BB.Configs.getValue('plugins.reactotron.configure'))
                .use(apisaucePlugin(BB.Configs.getValue('plugins.reactotron.apisauce')))
                .connect(BB.Configs.getValue('plugins.reactotron.connect'));
            // send data to logging provider here
        },
        'bluebase.logger.debug': (message, { params }, BB) => {
            Reactotron.log(message, params);
            Reactotron.warn(message, params);
            Reactotron.error(message, params);
            Reactotron.display({
                BB,
                message,
                params,
            });
        }
    },
});
//# sourceMappingURL=index.js.map