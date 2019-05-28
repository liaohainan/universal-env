
import { createElement, render } from 'rax';
import * as DriverDOM from 'driver-dom';
import { isWeb } from '../src/';

const App = () => <div>
  <div>isWeb: {JSON.stringify(isWeb)}</div>
</div>;

render(<App />, document.body, { driver: DriverDOM });