
import { createElement, render } from 'rax';
import * as DriverDOM from 'driver-dom';
import { isWeb, isAndroid, isIOS } from '../src/';

const App = () => <div>
  <div>isWeb: {JSON.stringify(isWeb)}</div>
  <div>isAndroid: {JSON.stringify(isAndroid)}</div>
  <div>isIOS: {JSON.stringify(isIOS)}</div>
</div>;

render(<App />, document.body, { driver: DriverDOM });