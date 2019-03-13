import { BlueBase } from '@bluebase/core';
import { ReactotronDebugger } from '../index';

test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(ReactotronDebugger);

	expect(BB.Plugins.has('@bluebase/plugin-reactotron')).toBeTruthy();
});
