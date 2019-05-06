var os = require("os");
var message = "The platform is ";

function main() {
    console.log(message + os.platform());
}
main();
var express = require("express");
var app = express();

app.get("/search/:search", function (req, res) {
    var search = req.params.search;
    res.redirect("https://www.google.com/search?ei=BzLQXLfnIdeLk74P1t2L2AU&q=+" + search + "&oq=+&gs_l=psy-ab.3..35i39l2j0i273l4j0l4.5868.5868..6971...0.0..0.204.204.2-1....1..0....1..gws-wiz.05meD8jIk4E")
});
app.get("/*", function (req, res) {
   res.send("<h1>Error 404</h1>");

});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

