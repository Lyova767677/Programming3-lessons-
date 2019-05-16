// var os = require("os");
// var message = "The platform is ";

// function main() {
//     console.log(message + os.platform());
// }
// main();
// var express = require("express");
// var app = express();

// app.get("/search/:search", function (req, res) {
//     var search = req.params.search;
//     res.redirect("https://www.google.com/search?ei=BzLQXLfnIdeLk74P1t2L2AU&q=+" + search + "&oq=+&gs_l=psy-ab.3..35i39l2j0i273l4j0l4.5868.5868..6971...0.0..0.204.204.2-1....1..0....1..gws-wiz.05meD8jIk4E")
// });
// app.get("/*", function (req, res) {
//    res.send("<h1>Error 404</h1>");

// });

// app.listen(3000, function () {
//     console.log("Example is running on port 3000");
// });
// var express = require('express');
// var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// app.use(express.static("."));
// app.get('/', function (req, res) {
//    res.redirect('index.html');
// });
// server.listen(3000);


// io.sockets.on('connection', newConnection);

//     function newConnection(socket) {
//         console.log('new connection: ' + socket.id)
//         socket.on('mouse' , mouseMsg);

//         function mouseMsg(data){
//             socket.broadcast.emit('mouse' , data);
//             console.log(data);
//         }
//     }
var express = require('express');
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var fs = require("fs");

app.use(express.static("."));
app.get("/", function (req, res) {
    res.redirect("index.html");
})
server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var grass = require("./module/grass.js");
var bomb = require("./module/bomb.js");
var grasseater = require("./module/grasseater.js");
var livingcreature = require("./module/livingcreature.js");
var people = require("./module/people.js");
var predator = require("./module/predator.js");


grassArr = [];
grasseaterArr = [];
predatorArr = [];
bombArr = [];
livingcreatureArr = [];
peopleArr = [];

let matrix = []; // Մատրիցի ստեղծում
let rows = 100; // Տողերի քանակ
let columns = 100; // Սյուների քանակ

function getMatrix(rows, columns) {
    for (let y = 0; y < rows; y++) {
        matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
        for (let x = 0; x < columns; x++) {
            let a = Math.floor(Math.random() * 100);
            if (a >= 0 && a < 20) {
                matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
            }
            if (a >= 20 && a < 40) {
                matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
            }
            else if (a >= 40 && a < 50) {
                matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
            }
            else if (a >= 50 && a < 70) {
                matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
            }
            else if (a >= 70 && a < 90) {
                matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
            }
            else if (a >= 90 && a < 100) {
                matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
            }
        }
    }
    return matrix;
}
Random =function(arr){return arr[Math.floor(Math.random()*arr.length)];
}
matrix = getMatrix(rows, columns);

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            matrix[y][x] = new grass(x, y, 1);
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new grasseater(x, y, 2);
        }
        else if (matrix[y][x] == 3) {
            matrix[y][x] = new predator(x, y, 3);
        }
        else if (matrix[y][x] == 4) {
            matrix[y][x] = new bomb(x, y, 4);
        }
        else if (matrix[y][x] == 5) {
            matrix[y][x] = new people(x, y, 5);
        }
    }
}



function drawserver() {
    background("#acacac");

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
            }
            else if (matrix[y][x].index == 2) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 3) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 4) {
                matrix[y][x].boom();
            }
            else if (matrix[y][x].index == 5) {
                matrix[y][x].move();
            }
        }
    }
    io.sockets.emit("matrix", matrix);

}
setInterval(drawserver, 3000);