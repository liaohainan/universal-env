# universal-env

Judge runtime environment

## Install
```bash
$ npm install universal-env --save
```

## Usage
```javascript
import { isWeex, isWeb, isMiniApp, isReactNative, isNode } from 'universal-env';

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
