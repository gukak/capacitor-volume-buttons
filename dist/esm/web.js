import { WebPlugin, Capacitor } from '@capacitor/core';
export class CapacitorVolumeButtonsWeb extends WebPlugin {
    constructor() {
        super(...arguments);
        this.platform = Capacitor.getPlatform();
    }
    addListener(eventName, listenerFunc) {
        if (this.platform === 'ios') {
            return super.addListener(eventName, listenerFunc);
        }
        else if (this.platform === 'android') {
            return super.addListener(eventName, listenerFunc);
        }
        else {
            console.log('CapacitorVolumeButtons is not supported on web');
            return super.addListener(eventName, listenerFunc);
        }
    }
}
//# sourceMappingURL=web.js.map