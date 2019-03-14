import { BlueBase, BlueBaseApp } from '@bluebase/core';
import React from 'react';
import { ReactotronDebugger } from '../index';
import TestRenderer from 'react-test-renderer';

test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(ReactotronDebugger);

	expect(BB.Plugins.has('@bluebase/plugin-reactotron')).toBeTruthy();
});
// test('data', async () => {
// 	const BB = new BlueBase();
// 	const filter = await BB.Filters.register();
// 	const rendered = TestRenderer.create(
// 		<BlueBaseApp BB={BB} plugins={{ ReactotronDebugger }} filters={{ filter }}  />
// 		);
// 	console.log('rendered', rendered);

// 	// expect(BB.Plugins.has('reactotron')).toBeTruthy();
// });