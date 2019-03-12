import { BootOptions } from '@bluebase/core';
declare const _default: {
    plugins: import("@bluebase/core/dist/registries/BlueBaseModuleRegistry").BlueBaseModuleRegistryInputItem<Partial<import("@bluebase/core").PluginValue>>[];
    configs: {
        'plugins.reactotron.configure': boolean;
        'plugins.reactotron.connect': boolean;
        'plugins.reactotron.apisauce': boolean;
    };
} & BootOptions;
export default _default;
