import { registerComponent } from 'aframe';

class App {
  constructor (config = {}) {
    console.log('app initialized', config);
  }
}

new App({ foo: 'bar' });