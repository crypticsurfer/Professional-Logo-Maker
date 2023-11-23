class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Square extends Shape {
    render(){
        return `<rect x="25" y="25" width="150" height="150" fill="${this.color}"/>`
    }
}
class Circle extends Shape {
    render(){
        return `<circle cx="100" cy="100" r="75" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
      return `<polygon points="100, 25 165, 137.5 35, 137.5" fill="${this.color}"/>`
    }
  }


//create function to generate logo
function generateLogo(data) {
  
  var backgroundShape;

  switch(data["shape"]) {
    case "Square":
      backgroundShape = new Square(data["shape-color"]);
      break;

    case "Circle":
      backgroundShape = new Circle(data["shape-color"]);
      break;

    case "Triangle":
      backgroundShape = new Triangle(data["shape-color"]);
      break;

    default:
      backgroundShape = new Triangle(data["shape-color"]);
      break;
  }

  const text = `<text text-anchor="middle" dominant-baseline="middle" x="100" y="100" font-weight="bold" font-size="20px" letter-spacing="2" fill="${data["text-color"]}">${data["text"]}</text>`

    return`<svg width="250" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${backgroundShape.render()}
    ${text}
    </svg>
    `;
}

module.exports = generateLogo;