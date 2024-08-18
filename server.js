const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "./public")));
app.set("views", path.join(__dirname, "./views"));

require("./routes/home")(app);
require("./routes/criarProdutos")(app);

app.listen(9090, () => {
  console.log("server running on port 9090!");
});
