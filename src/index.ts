// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
declare const callNative: any;
declare const WXEnvironment: any;
declare const __fbBatchedBridgeConfig: any;
declare const my: any;
declare const wx: any;

const isWeb: boolean = document && typeof document.getElementById !== 'undefined';
export const isNode: boolean = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
export const isWeex: boolean = typeof callNative === 'function' || typeof WXEnvironment === 'object' && WXEnvironment.platform !== 'Web';
export const isReactNative: boolean = typeof __fbBatchedBridgeConfig !== 'undefined';
export const isMiniApp: boolean = !isWeb && typeof my === 'object' && typeof my.getSystemInfo !== 'undefined';
export const isWechatApp: boolean = typeof wx === 'object' && typeof wx.getSystemInfo !== 'undefined';

let systemInfo: any = {};
if (isMiniApp) {
  systemInfo = my.getSystemInfoSync();
}
if (isWechatApp) {
  systemInfo = wx.getSystemInfoSync();
}
if (isWeex) {
  systemInfo = navigator;
}

export const isAndroid = (() => {
  if (isMiniApp || isWechatApp || isWeex) {
    const platform = systemInfo.platform || '';
    return platform.toLowerCase() === 'android';
  } else if (isWeb) {
    return Boolean(navigator.userAgent.match(/android/i));
  }
  return false;
})();

export const isIOS = (() => {
  if (isMiniApp || isWechatApp || isWeex) {
    return ['ios', 'iOS', 'iPhone OS'].indexOf(systemInfo.platform) > -1;
  } else if (isWeb) {
    return Boolean(navigator.userAgent.match(/(iphone|ipod|ipad)/i));
  }
  return false;
})();

