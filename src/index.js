// Famous dependencies
import DOMElement from 'famous/dom-renderables/DOMElement';
import FamousEngine from 'famous/core/FamousEngine';
import { SpinnerAnimation as Spinner } from './js/animation/SpinnerAnimation';
import { LogoNode as Logo } from './js/LogoNode';

// Boilerplate code to make your life easier
FamousEngine.init();

// Create a scene for the FamousEngine to render
var scene = FamousEngine.createScene();
var nextNode = scene.addChild();

// Get a node of the Famous Logo
var logo = new Logo(nextNode);
console.log('logonode', logo);

// Setup a custom component for animation
var animation = new Spinner(logo);
animation.start();
