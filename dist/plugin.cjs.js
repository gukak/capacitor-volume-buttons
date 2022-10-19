'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorVolumeButtons = core.registerPlugin('CapacitorVolumeButtons', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorVolumeButtonsWeb()),
});

class CapacitorVolumeButtonsWeb extends core.WebPlugin {
    constructor() {
        super(...arguments);
        this.platform = core.Capacitor.getPlatform();
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorVolumeButtonsWeb: CapacitorVolumeButtonsWeb
});

exports.CapacitorVolumeButtons = CapacitorVolumeButtons;
//# sourceMappingURL=plugin.cjs.js.map
