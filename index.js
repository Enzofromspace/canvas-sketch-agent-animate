const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const point = {x: 800, y: 400};

    context.beginPath();
    context.arc(point.x, point.y, 10, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();

  };
};

canvasSketch(sketch, settings);
