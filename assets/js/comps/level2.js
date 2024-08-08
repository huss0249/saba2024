import Rectangle from './level1.js';

export default class MyHiFiRectangle extends Rectangle {
      constructor(height, width) {
      super(height,width);
      this.foo= "bar";  
   }
}