// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
import { SystemInfo } from './type';

declare const document: any;
declare const callNative: any;
declare const WXEnvironment: any;
declare const my: any;
declare const wx: any;

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

function getMpSystemInfo(container): SystemInfo {
  return container.getSystemInfoSync();
}

function getSystemInfo(): SystemInfo | void {
  if (isMiniApp) {
    return getMpSystemInfo(my);
  }
  if (isWechatMiniprogram) {
    return getMpSystemInfo(wx);
  }
  if (isWeex) {
    return navigator;
  }
}

function checkPlatform(platform, systemInfo): boolean {
  switch (platform) {
    case 'ios':
      if (isWeb) {
        return Boolean(navigator.userAgent.match(/(iphone|ipod|ipad)/i));
      }
      if (systemInfo) {
        return (
          ['ios', 'iOS', 'iPhone OS'].indexOf(systemInfo.platform) > -1
        );
      }
      return false;
    case 'android':
      if (isWeb) {
        return Boolean(navigator.userAgent.match(/android/i));
      }
      if (systemInfo) {
        return systemInfo.platform.toLowerCase() === 'android';
      }
      return false;
    default:
      return false;
  }
}

export const isWeb = checkNavigator() && checkDOM();
export const isNode = checkProcess();
export const isWeex = checkWeex();
export const isMiniApp = typeof my === 'object' && typeof my.navigateTo === 'function';
export const isWechatMiniprogram = typeof wx === 'object' && typeof wx.navigateTo === 'function';

const systemInfo = getSystemInfo();

export const isAndroid = checkPlatform('android', systemInfo);
export const isIOS = checkPlatform('ios', systemInfo);

