import { registerComponent } from 'aframe';

function clickToStateComponent(handler) {
  return {
    init() {
      this.el.addEventListener('click', handler);
    }
  }
}

class App {
  constructor (config = {}) {
    this.createComponents();
    this.dirty = false;
    this.currentText = 'foo';
  }

  createComponents() {
    registerComponent('overlay-text', this.getComponentInterface());
    registerComponent('toggle-states', clickToStateComponent(this.toggleState.bind(this)));
  }

  toggleState(event) {
    this.dirty = true;
    this.currentText = 'bar'
  }

  getComponentInterface() {
    const app = this;

    return {
      tick() {
        if (app.dirty) {
          this.el.setAttribute('text', app.textVal);
          app.dirty = false;
        }
      }
    }
  }

  get textVal() {
    return `color: white; align: center; value: ${this.currentText}; width: 10; height: auto`;
  }
}

new App();