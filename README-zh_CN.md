# universal-env

判断和获取运行时环境及系统信息

## 安装
```bash
$ npm install universal-env --save
```

## 示例
```javascript
import { isWeex, isWeb, isMiniApp, isReactNative, isNode, platform, select } from 'universal-env';
import AndroidComponent from './AndroidComponent';
import IOSComponent from './IOSComponent';

// maybe iOS, Android, or Web
console.log(platform);
const DestComponent = select({
  iOS: IOSComponent,
  Android: AndroidComponent
});
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

### `platform: string`
系统名：Android，iOS，Web，默认值为 `Web` 


### `select(params: object)`
用它来返回特定平台的组件

#### 入参
| 成员           | 类型     | 描述        | 默认值 |
| -------------- | -------- | ----------- | :----: |
| params         | `object` | 参数对象    |   -    |
| params.Web     | `any`    | Web组件     |   -    |
| params.iOS     | `any`    | iOS组件     |   -    |
| params.Android | `any`    | Android组件 |   -    |
