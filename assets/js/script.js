import '../scss/main.scss'
import Debucsser from 'debucsser';

const config = {
    color: 'rgb(56, 189, 255)', // color of the outline
    width: '2px', // width of the outline
    grayscaleOnDebugAll: false, // apply grayscale filter to every element 
    customClass: 'exampleClass',  // a class existent in your stylesheet
  }
  
  // init the debugger
  const debug = new Debucsser(config).init();