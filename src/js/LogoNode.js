/* LogoNode
   ES6 class
*/

import DOMElement from 'famous/dom-renderables/DOMElement';

export class LogoNode {

  constructor(node) {
    // create local node onto the passed scene
    this.rootNode = node.addChild();

    // Create an [image] DOM element providing the logo 'node' with the 'src' path
    new DOMElement(this.rootNode, { tagName: 'img' })
        .setAttribute('src', './images/famous_logo.png');

    // Chainable API
    this.rootNode
        // Set size mode to 'absolute' to use absolute pixel values: (width 250px, height 250px)
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(250, 250)
        // Center the 'node' to the parent (the screen, in this instance)
        .setAlign(0.5, 0.5)
        // Set the translational origin to the center of the 'node'
        .setMountPoint(0.5, 0.5)
        // Set the rotational origin to the center of the 'node'
        .setOrigin(0.5, 0.5);

    return this.rootNode;
  }
}
