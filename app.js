var express = require("express"),
    app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function (req, res) {
    res.render("index");
});
app.get("/menu", function (req, res) {
    res.render("menu");
});
app.get("/book", function (req, res) {
    res.render("book");
});
app.get("/contact", function (req, res) {
    res.render("contact");
});
app.listen(process.env.PORT, process.env.IP);

