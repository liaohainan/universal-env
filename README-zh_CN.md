# universal-env [![npm](https://img.shields.io/npm/v/universal-env.svg)](https://www.npmjs.com/package/universal-env)

判断和获取运行时环境

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" />	<img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />

## 安装
```bash
$ npm install universal-env --save
```

## 示例
```javascript
import { isWeex, isWeb, isMiniApp, isReactNative, isNode } from 'universal-env';

```

## APIS
### `isWeex: boolean`
校验 weex 环境

### `isWeb: boolean`
校验 web 环境

### `isMiniApp: boolean`
校验小程序环境

### `isReactNative: boolean`
校验 React Native 环境

### `isNode: boolean`
校验 Node.js 环境

### `isAndroid: boolean`
校验 android 环境

### `isIOS: boolean`
校验 iOS 环境
