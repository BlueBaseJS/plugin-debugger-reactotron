"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
// Import Reactotron from 'reactotron-react-js';
const Reactotron = require('reactotron-react-js').default;
// const apisaucePlugin = require('reactotron-apisauce');
// const { trackGlobalErrors } = require('reactotron-react-js');
const core_1 = require("@bluebase/core");
// let ReactotronConfig = Reactotron;
exports.ReactotronDebugger = core_1.createPlugin({
    key: 'reactotron',
    name: 'reactotron',
    categories: ['debugger'],
    defaultConfigs: {
        'plugins.reactotron.useTrackGlobalErrors': false,
        'plugins.reactotron.apisauce': false,
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
        'bluebase.plugins.initialize': (_bootOptions, _ctx, BB) => {
            debugger;
            Reactotron
                .configure();
            // .use(BB.Configs.getValue('plugins.reactotron.useTrackGlobalErrors'))
            // .apisauce(BB.Configs.getValue('plugins.reactotron.apisauce'))
        }
        // .use(BB.Configs.getValue('plugins.reactotron.useTrackGlobalErrors'))
        // .apisauce(BB.Configs.getValue('plugins.reactotron.apisauce'))
        ,
        // .use(BB.Configs.getValue('plugins.reactotron.useTrackGlobalErrors'))
        // .apisauce(BB.Configs.getValue('plugins.reactotron.apisauce'))
        : 
            .connect()
    },
    'bluebase.logger.debug': (message, { params }, BB) => {
        Reactotron.log(message, params);
        Reactotron.display({
            message,
            params,
            BB
        });
        // send data to logging provider here
    }
});
/* only Native
* networking({ignoreContentTypes: /^(image)\/.*$/i, ignoreUrls: /\/(logs|symbolicate)$/,})
* asyncStorage({ignore: ['anything']})
* overlay()
* openInEditor
*/
//# sourceMappingURL=same.js.map