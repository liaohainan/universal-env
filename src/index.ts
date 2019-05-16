// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
declare const callNative: any;
declare const WXEnvironment: any;
declare const __fbBatchedBridgeConfig: any;
declare const my: any;

interface Option {
  Web?: any;
  iOS?: any;
  Android?: any;
}

let platform = 'Web';
if (typeof WXEnvironment === 'object') {
  platform = WXEnvironment.platform.toLowerCase() === 'ios' ? 'iOS' : 'Android';
}
export { platform };

export function select(option: Option): void {
  const keys = Object.keys(option);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].toLowerCase() === platform.toLowerCase()) {
      return option[keys[i]];
    }
  }
};

export const isWeb: boolean = typeof navigator === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
export const isNode: boolean = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
export const isWeex: boolean = typeof callNative === 'function' || typeof WXEnvironment === 'object' && WXEnvironment.platform !== 'Web';
export const isReactNative: boolean = typeof __fbBatchedBridgeConfig !== 'undefined';
export const isMiniApp: boolean = typeof my === 'object';
