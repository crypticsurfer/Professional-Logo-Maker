class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Square extends Shape {
    render(){
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}"/>`
    }
}

//create function to generate logo
function generateLogo(data) {
    return`<svg width="200" height="250" version="1.1 xmlns="http://www.w3.org/2000/svg">
    ${new Square("blue").render()}
    </svg>
    `;
}

module.exports = generateLogo;