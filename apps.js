window.addEventListener('DOMContentLoaded', function () {

    let squareSideInput = document.getElementById('square-length');
    let recHeightInput = document.getElementById('rectangle-height');
    let recWidthInput = document.getElementById('rectangle-width');

    const MAX = 600;
    let container = document.getElementById('shape-container');

    let sqButton = document.getElementById('sq-button');
    let rectanglebtn = document.getElementById('rectanglebtn');
    // // let circlebtn = document.getElementById('circlebtn');
    // // let trianglebtn = document.getElementById('trianglebtn');



    // circlebtn.addEventListener('click', () => {
    //     alert('Hello');
    // });

    // trianglebtn.addEventListener('click', () => {
    //     alert('Hello');
    // });

    class Shapes {
        constructor() {
            //this.div = document.createElement('div');
            //container.appendChild(this.div);
            //console.log(this);
        }
    }



    class Square extends Shapes {
        constructor(sideLength) {
            super();

            this.sideLength = squareSideInput.value
            this.makeSquare();
        }
        makeSquare() {
            if (this.sideLength < 600 && this.sideLength !== undefined) {
                this.div = document.createElement('div');
                this.div.classList.add('square');
                this.div.style.width = `${this.sideLength}px`;
                this.div.style.height = `${this.sideLength}px`;
                this.div.style.top = `${Math.floor(Math.random() * 600) + 1}px`
                this.div.style.left = `${Math.floor(Math.random() * 600) + 1}px`
                container.appendChild(this.div);
                console.log(this);
            } else {
                alert(`Nah son`)
            }

        }

    }

    sqButton.addEventListener('click', () => {
        new Square(null)
    });

    class Rectangle extends Shapes {
        constructor(width, height) {
            super();
            this.div = document.createElement('div');
            this.div.classList.add('rectangle');
            this.width = width;
            this.height = height;
            container.appendChild(this.div);
            this.div.style.width = `${this.width}px`;
            this.div.style.height = `${this.height}px`;
            this.width = recWidthInput.value
            this.height = recHeightInput.value
            this.div.style.top = `${Math.floor(Math.random() * 500)}px`
            this.div.style.left = `${Math.floor(Math.random() * 500)}px`
        }
    }
    rectanglebtn.addEventListener('click', () => {
        new Rectangle(0, MAX);
        //alert('Hello');
    });

    // class Circle extends Shapes {
    //     constructor() {}
    // }

    // class Triangle extends Shapes {
    //     constructor() {}
    //}

    // let square1 = new Square();

    //console.log(square1);



});