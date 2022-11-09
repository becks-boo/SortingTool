const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 6000;
const app = express();
const indexRouter = require("./routes/index");

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`File-Sorting app listening on port ${PORT}`);
})

app.use("/", indexRouter);