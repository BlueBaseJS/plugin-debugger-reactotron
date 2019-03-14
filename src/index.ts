const Reactotron = require('reactotron-react-js').default;
const apisaucePlugin = require('reactotron-apisauce');
const { trackGlobalErrors } = require('reactotron-react-js');

import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';

export const ReactotronDebugger = createPlugin({

	categories: ['debugger'],
	key: '@bluebase/plugin-reactotron',
	name: 'Reactotron',
	version: '1.0.0',

	defaultConfigs: {
		'plugins.reactotron.apisauce': false,
		'plugins.reactotron.useTrackGlobalErrors': false,
		'plugins.reactotron.connect': false,
		'plugins.reactotron.configure': false
	},

	filters: {
		'bluebase.boot.end': (
			_bootOptions: BootOptions,
			_ctx: any,
			BB: BlueBase
		) => {
			Reactotron.configure(BB.Configs.getValue('plugins.reactotron.configure'))
				.use(apisaucePlugin(BB.Configs.getValue('plugins.reactotron.apisauce')))
				.use(
					trackGlobalErrors(
						BB.Configs.getValue('plugins.reactotron.trackGlobalErrors')
					)
				)
				.connect(BB.Configs.getValue('plugins.reactotron.connect'));
			BB.Logger.log('abc');
		},
		'bluebase.plugins.initialize': (
			_bootOptions: BootOptions,
			_ctx: any,
			BB: BlueBase
		) => {
			console.log('Initialize');
			Reactotron.configure(BB.Configs.getValue('plugins.reactotron.configure'))
				.use(apisaucePlugin(BB.Configs.getValue('plugins.reactotron.apisauce')))
				.connect(BB.Configs.getValue('plugins.reactotron.connect'))
				.clear();
		},
		'bluebase.logger.log': (
			message: string,
			{ params }: { params: any },
			_BB: BlueBase
		) => {
			Reactotron.log(message, params);
		}
		// 'bluebase.logger.warn': (message: string, { params }: { params: any }, BB: BlueBase) => {

		// 	Reactotron.warn(message, params);
		// 	return message;
		// },
		// 'bluebase.logger.error': (message: string, { params }: { params: any }, BB: BlueBase) => {

		// 	Reactotron.error(message, params);
		// },

		// 	Reactotron.error(message, params);

		// 	Reactotron.display({
		// 		BB,
		// 		message,
		// 		params,
		// 	});

		// }
	}
});
