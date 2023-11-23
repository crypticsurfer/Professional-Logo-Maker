const shapes = require('./shapes');
const Square = shapes.Square;
const Circle = shapes.Circle;
const Triangle = shapes.Triangle;

describe("Square", () => {
  test ("Creates a green square", () => {
      const shape = new Square("green")
      expect(shape.render()).toEqual('<rect x="25" y="25" width="150" height="150" fill="green"/>')
  })
})

describe("Circle", () => {
    test ("Creates a blue circle", () => {
        const shape = new Circle("blue")
        expect(shape.render()).toEqual('<circle cx="100" cy="100" r="75" fill="blue"/>')
    })
})

describe("Triangle", () => {
    test ("Creates a orange triangle", () => {
        const shape = new Triangle("orange")
        expect(shape.render()).toEqual('<polygon points="100, 25 165, 137.5 35, 137.5" fill="orange"/>')
    })
})