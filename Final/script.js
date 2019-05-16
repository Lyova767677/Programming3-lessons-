// // var clickCount = 0;
// // function clickHandler(evt){
// //    clickCount++;
// //    console.log(evt);
// //    var str = "Thanks for clicking " + clickCount;
// //    this.innerText = str;
// // }

// // var p = document.getElementById("pElement");
// // p.addEventListener("click", clickHandler);

// //      // 1

// // function bodyClick(evt){
// //     console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);
// //  }
// //  window.onclick = bodyClick;


// //     // 2

// //     function bodyClick(evt) {
// //         console.log(evt.pageX, evt.pageY);
// //      }
// //      window.onclick = bodyClick;

// //     // 3

// //     function windowLoad() {
// //         console.log("Window is loaded");
// //      }
// //      window.onload = windowLoad;

// //     //4

// //     function click(evt) {
// //         console.log(evt.pageX, evt.pageY);
// //      }
// //      window.onclick = click;

// // 5

// // function keydown(evt) {
// //     console.log("You printed" + evt.key);

// //  }
// //  window.onkeydown = keydown;
// var socket;
// function setup() {
//     createCanvas(600, 400);
//     background("#acacac");

//     socket = io.connect("http://localhost:3000");
//     socket.on('mouse', newDrawing);
// }
// function newDrawing(data) {
//     noStroke();
//     fill(255, 0, 100);
//     ellipse(data.x, data.y, 20, 20)
// }
// function mouseDragged() {
//     console.log(mouseX + "," + mouseY);
//     var data = {
//         x: mouseX,
//         y: mouseY
//     }
//     socket.emit('mouse', data);
//     noStroke();
//     fill(255);
//     ellipse(mouseX, mouseY, 20, 20)
// }


var side = 20;
var socket = io();



function setup() {
    frameRate(5);
    createCanvas(20 * side, 20 * side);
    background("blue");
}


function drawMatrix(matrix) {
    background("#acacac")
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
        }
    }
}
sockets.on("matrix", drawMatrix);