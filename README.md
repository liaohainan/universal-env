# universal-env

Judge runtime environment and get system information

## Install
```bash
$ npm install universal-env --save
```

## Usage
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
Checks if environment is a weex environment.

### `isWeb: boolean`
Checks if environment is a web environment.

### `isMiniApp: boolean`
Checks if environment is a mini app environment.

### `isReactNative: boolean`
Checks if environment is a React Native environment.

### `isNode: boolean`
Checks if environment is a Node.js environment.

### `platform: string`
Get current platform value, like：Android，iOS，Web，default: `Web` 

#### Since
1.0.0

### `select(params: object)`
Use it to return platform specific component

#### Since
1.0.0

#### Arguments
| Property       | Type     | Description | Default |
| -------------- | -------- | ----------- | :-----: |
| params         | `object` | params   |    -    |
| params.Web     | `any`    | Web Component     |    -    |
| params.iOS     | `any`    | iOS Component     |    -    |
| params.Android | `any`    | Android Component |    -    |
