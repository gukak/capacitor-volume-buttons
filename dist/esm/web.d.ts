import type { ListenerCallback, PluginListenerHandle } from '@capacitor/core';
import { WebPlugin } from '@capacitor/core';
import type { CapacitorVolumeButtonsPlugin } from './definitions';
export declare class CapacitorVolumeButtonsWeb extends WebPlugin implements CapacitorVolumeButtonsPlugin {
    private platform;
    addListener(eventName: string, listenerFunc: ListenerCallback): Promise<PluginListenerHandle> & PluginListenerHandle;
}
