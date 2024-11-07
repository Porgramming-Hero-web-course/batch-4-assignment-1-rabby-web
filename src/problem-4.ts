type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number | undefined {
  if (shape.shape === "circle") {
    const shapeArea = Math.PI * Math.pow(shape.radius, 2);
    return parseFloat(shapeArea.toFixed(2));
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  }
}

// circle area
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

// rectangle area
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea);
