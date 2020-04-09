import p5 from "p5";


const s = (sketch) => {
  let xoff = 0;

  sketch.setup = () => {
    sketch.createCanvas(400, 400);
  };

  sketch.draw = () => {
    sketch.background(51);
    let x = sketch.map(sketch.noise(xoff), 0, 1, 0, sketch.width);
    xoff += 0.01;
    sketch.ellipse(x, 200, 24, 24);
  };
};

let myp5 = new p5(s);
