/* SpinnerAnimation
    ES6 class
*/
export class SpinnerAnimation {
  constructor(node) {
    // store a reference to the node
    this.node = node;
    // get an id from the node so that we can update
    this.id = node.addComponent(this);
  }
  onUpdate(time) {
    // set a rotation based on time
    this.node.setRotation(0, time / 1000, 0);
    // request the update on the next frame
    this.node.requestUpdateOnNextTick(this.id);
  }
  start() {
    // Let the magic begin...
    this.node.requestUpdate(this.id);
  }
}
