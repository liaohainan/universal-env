// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
import { SystemInfo } from './type';

declare const document: any;
declare const callNative: any;
declare const WXEnvironment: any;
declare const my: any;
declare const wx: any;

let _systemInfo: SystemInfo = {
  platform: ''
};

function checkNavigator(): boolean {
  return (
    typeof navigator === 'object' &&
    (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')
  );
}

function checkDOM(): boolean {
  return typeof document === 'object' && typeof document.getElementById !== 'undefined';
}

function checkProcess(): boolean {
  return (
    typeof process !== 'undefined' &&
    !!(process.versions && process.versions.node)
  );
}

function checkWeex(): boolean {
  return (
    typeof callNative === 'function' ||
    typeof WXEnvironment === 'object' && WXEnvironment.platform !== 'Web'
  );
}

function checkMpType(container): boolean {
  return (
    container !== null && typeof container.navigateTo === 'function'
  );
}

function getMpSystemInfo(container): SystemInfo {
  return container.getSystemInfoSync();
}

function getSystemInfo(): SystemInfo {
  if (_systemInfo.platform.length === 0) {
    if (isMiniApp) {
      return _systemInfo = getMpSystemInfo(my);
    }
    if (isWechatMiniprogram) {
      return _systemInfo = getMpSystemInfo(wx);
    }
    if (isWeex) {
      return _systemInfo = navigator;
    }
  }
  return _systemInfo;
}

function checkPlatform(platform): boolean | void | string {
  switch (platform) {
    case 'ios':
      if (isWeb) {
        return Boolean(navigator.userAgent.match(/(iphone|ipod|ipad)/i));
      }
      return (
        ['ios', 'iOS', 'iPhone OS'].indexOf(getSystemInfo().platform) > -1
      );
    case 'android':
      if (isWeb) {
        return Boolean(navigator.userAgent.match(/android/i));
      }
      return getSystemInfo().platform.toLowerCase() === 'android';
  }
}

export const isWeb = checkNavigator() && checkDOM();
export const isNode = checkProcess();
export const isWeex = checkWeex();
export const isMiniApp = checkMpType(typeof my === 'object' ? my : null);
export const isWechatMiniprogram = checkMpType(typeof wx === 'object' ? wx : null);
export const isAndroid = checkPlatform('android');
export const isIOS = checkPlatform('ios');

