// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
// Import Reactotron from 'reactotron-react-js';
const Reactotron = require('reactotron-react-js').default;
// const apisaucePlugin = require('reactotron-apisauce');
// const { trackGlobalErrors } = require('reactotron-react-js');

import { createPlugin, BlueBase, BootOptions } from '@bluebase/core';

// let ReactotronConfig = Reactotron;

export const ReactotronDebugger = createPlugin({
	key: 'reactotron',
	name: 'reactotron',
	categories: ['debugger'],


	defaultConfigs: {
		'plugins.reactotron.useTrackGlobalErrors': false,
		'plugins.reactotron.apisauce': false,
	},

	filters: {

		'bluebase.boot.end': (_bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {

			Reactotron.configure();
			// .use(BB.Configs.getValue('plugins.reactotron.useTrackGlobalErrors'))
			// .apisauce(BB.Configs.getValue('plugins.reactotron.apisauce'))
			Reactotron.connect();

			// Reactotron.clear()

			Reactotron.log('hello rendering world');
			BB.Logger.log('test====>');
		},
		'bluebase.plugins.initialize': (_bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {

			debugger;
			Reactotron
				.configure();
				// .use(BB.Configs.getValue('plugins.reactotron.useTrackGlobalErrors'))
				// .apisauce(BB.Configs.getValue('plugins.reactotron.apisauce'))
				.connect();

			// send data to logging provider here
		},
		'bluebase.logger.debug': (message: string, { params }: { params: any }, BB: BlueBase) => {

			Reactotron.log(message, params);

			Reactotron.display({
				message,
				params,
				BB
			})

			// send data to logging provider here
		}
	},

})
	/* only Native
* networking({ignoreContentTypes: /^(image)\/.*$/i, ignoreUrls: /\/(logs|symbolicate)$/,})
* asyncStorage({ignore: ['anything']})
* overlay()
* openInEditor
*/
