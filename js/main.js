class Player {
    constructor() {
        this.width = 20;
        this.height = 10;
        this.positionX = 0;
        this.positionY = 0;
        this.createDomElement()


    }
    createDomElement() {

        this.domElement = document.createElement("div")
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const board = document.getElementById("board");
        board.appendChild(this.domElement);


    }

    // creating the element
    moveRight() {
        //  console.log("moving right...") tested its working!

        this.positionX++
        this.domElement.style.left = this.positionX + "vw";
    }
    moveLeft() {
        // console.log("moving left...") tested if its working!

        this.positionX--
        this.domElement.style.left = this.positionX + "vw";

    }

   
}

class Obstacle{
    constructor(){
        this.width = 15;
        this.height = 10;
        this.positionX = 50-this.width/2;
        this.positionY = 90;
        this.domElement = null;

        this.createDomElement();
    }

    createDomElement(){

        this.domElement = document.createElement("div")
        this.domElement.className= "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const board = document.getElementById("board");
        board.appendChild(this.domElement);


    }

    moveDown(){
        this.positionY--;
        console.log("moving down")
        this.domElement.style.bottom = this.positionY + "vh"
    }

    
}



const player = new Player();

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
        player.moveLeft()
    } else if (e.code === "ArrowRight") {
        player.moveRight()
    }


});

const obstacleArr = [];
setInterval(() => {
    obstacleArr.push(new Obstacle())

}, 2000);


setInterval(()=>{
    obstacleArr.forEach((obstcale)=>{
            obstcale.moveDown();
    })
},100)