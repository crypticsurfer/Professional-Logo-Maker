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
        return `<circle cx="100" cy="100" r="75" fill="${this.color}">`
    }
}

class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
  }

//create function to generate logo
function generateLogo(data) {
    //ensure that text is only 3 characters
    //text and shape color are actual colors
    //create logo
    return`<svg width="250" height="250" version="1.1 xmlns="http://www.w3.org/2000/svg">
    ${new Square("blue").render()}
    </svg>
    `;
}

module.exports = generateLogo;