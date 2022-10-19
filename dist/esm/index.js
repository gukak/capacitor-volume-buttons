import { registerPlugin } from '@capacitor/core';
const CapacitorVolumeButtons = registerPlugin('CapacitorVolumeButtons', {
    web: () => import('./web').then(m => new m.CapacitorVolumeButtonsWeb()),
});
export * from './definitions';
export { CapacitorVolumeButtons };
//# sourceMappingURL=index.js.map