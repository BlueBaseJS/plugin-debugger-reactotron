// tslint:disable: no-var-requires
const Reactotron = require('reactotron-react-js').default;
const apisaucePlugin = require('reactotron-apisauce');
const { trackGlobalErrors } = require('reactotron-react-js');

import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';

import { VERSION } from './version';

export default createPlugin({
	categories: ['debugger'],
	key: 'plugin-reactotron',
	name: 'Reactotron Plugin',
	version: VERSION,

	defaultConfigs: {
		'plugins.reactotron.apisauce': false,
		'plugins.reactotron.configure': false,
		'plugins.reactotron.connect': false,
		'plugins.reactotron.useTrackGlobalErrors': false,
	},

	filters: {
		'bluebase.boot.end': (
			bootOptions: BootOptions,
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

			return bootOptions;
		},

		'bluebase.plugins.initialize': (
			bootOptions: BootOptions,
			_ctx: any,
			BB: BlueBase
		) => {
			Reactotron.configure(BB.Configs.getValue('plugins.reactotron.configure'))
				.use(apisaucePlugin(BB.Configs.getValue('plugins.reactotron.apisauce')))
				.connect(BB.Configs.getValue('plugins.reactotron.connect'))
				.clear();

			return bootOptions;
		},

		'bluebase.logger.log': (message: string, { params }: { params: any }) => {
			Reactotron.log(message, params);
			return message;
		},

		'bluebase.logger.warn': (message: string, { params }: { params: any }) => {
			Reactotron.warn(message, params);
			return message;
		},

		'bluebase.logger.error': (message: string, { params }: { params: any }) => {
			Reactotron.error(message, params);
			return message;
		},
	},
});
