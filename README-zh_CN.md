# universal-env

判断和获取运行时环境

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
校验weex环境

### `isWeb: boolean`
校验web环境

### `isMiniApp: boolean`
校验小程序环境

### `isReactNative: boolean`
校验React Native环境

### `isNode: boolean`
校验Node.js环境
