
const Reactotron = require('reactotron-react-js').default;
import { createPlugin, BlueBase, BootOptions } from '@bluebase/core';

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

			Reactotron
				.configure()
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
		}
	},

})
