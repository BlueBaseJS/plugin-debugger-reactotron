// import { BootOptions, BlueBase } from "@bluebase/core";
import { ReactotronDebugger } from '../../src';
// import { BlueBase } from '@bluebase/core';
// const BB = new BlueBase();

// BR.hooks.register('');

// This file contain all the apps, plugins and configuration which are required
// for booting bluebase. see https://blueeast.gitbooks.io/bluebase/
export default {

	configs: {
		'plugins.reactotron.apisauce': true,
		'plugins.reactotron.configure': true,
		'plugins.reactotron.connect': true,
		'plugins.reactotron.trackGlobalErrors': true,
	},
	plugins: [
		ReactotronDebugger
	],

    // BB,


};
