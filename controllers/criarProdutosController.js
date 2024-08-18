module.exports.renderPage = (app, req, res) => {
  res.render("criarProdutos");
};
module.exports.createProduct = async (app, req, res) => {
  console.log(req.body);
  const productModel = require("../models/productsModel");

  await productModel.createProduct(req.body);

  res.redirect("/");
};
