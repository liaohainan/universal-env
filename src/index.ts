// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
declare const callNative: any;
declare const WXEnvironment: any;
declare const __fbBatchedBridgeConfig: any;
declare const my: any;

const isWebPure: boolean = typeof navigator === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
export const isMiniApp: boolean = typeof my === 'object' && typeof my.getSystemInfo !== 'undefined';
export const isWeb: boolean = isWebPure && !isMiniApp;
export const isNode: boolean = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
export const isWeex: boolean = typeof callNative === 'function' || typeof WXEnvironment === 'object' && WXEnvironment.platform !== 'Web';
export const isReactNative: boolean = typeof __fbBatchedBridgeConfig !== 'undefined';

let miniAppSystemInfo: any = {};
if (isMiniApp) {
  miniAppSystemInfo = my.getSystemInfoSync();
}

export const isAndroid = (() => {
  if (isMiniApp) {
    return ['Android', 'android'].includes(miniAppSystemInfo.platform);
  } else if (isWeex) {
    return navigator.platform.toLowerCase() === 'android';
  } else if (isWeb) {
    return Boolean(navigator.userAgent.match(/android/i));
  }
  return false;
})();

export const isIOS = (() => {
  if (isMiniApp) {
    return ['iPhone OS', 'iOS'].includes(miniAppSystemInfo.platform);
  } else if (isWeex) {
    return navigator.platform.toLowerCase() === 'ios';
  } else if (isWeb) {
    return Boolean(navigator.userAgent.match(/(iphone|ipod|ipad)/i));
  }
  return false;
})();
