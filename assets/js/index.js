import { tween } from 'popmotion';
import '../sass/main.sass'

import Debucsser from 'debucsser';

// pass all the custom properties you want
const config = {
  color: 'palevioletred', // color of the outline
  width: '1px', // width of the outline
  grayscaleOnDebugAll: false, // apply grayscale filter to every element 
  customClass: 'exampleClass',  // a class existent in your stylesheet
}

// init the debugger
const debug = new Debucsser(config).init();