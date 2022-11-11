const express = require("express");
const handlebars = require("express-handlebars");
const uploadRouter = require("./router");
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(uploadRouter);

app.listen(PORT, () => {
    console.log(`File-Sorting app listening on port ${PORT}`);
});