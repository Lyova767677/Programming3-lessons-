var LivingCreature = require("./livingcreature.js");
module.exports = class Grass extends LivingCreature {



    mul() {
        this.multiply++;
        var newCell = Random = function (arr) {
            return arr[Math.floor(Math.random(0) * arr.length)];
        };

        if (newCell && this.multiply >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Grass(newX, newY, 1);
            this.multiply = 0;

        }
    }

}