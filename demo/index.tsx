
import { createElement, render } from 'rax';
import * as DriverDOM from 'driver-dom';
import { isWeb, platform, select } from '../src/';

const selectComponent = select({
  iOS: 'test',
  Android: 'testAndroid',
  Web: 'testWeb'
});

const App = () => <div>
  <div>isWeb: {JSON.stringify(isWeb)}</div>
  <div>platform: {platform}</div>
  <div>selectComponent: {selectComponent}</div>
</div>;

render(<App />, document.body, { driver: DriverDOM });