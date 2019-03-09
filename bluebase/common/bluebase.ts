// import { BootOptions, BlueBase } from "@bluebase/core";
import { ReactotronDebugger } from '../../src';

// This file contain all the apps, plugins and configuration which are required
// for booting bluebase. see https://blueeast.gitbooks.io/bluebase/
export default {

    plugins: [
        ReactotronDebugger
    ],
	configs: {
        'plugins.reactotron.configure': true,
        'plugins.reactotron.connect': true,
        'plugins.reactotron.apisauce': true,
    },

};
