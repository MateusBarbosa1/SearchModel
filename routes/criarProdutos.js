module.exports = (app) => {
  const productController = require("../controllers/criarProdutosController");
  app.get("/criar-produto", (req, res) => {
    productController.renderPage(app, req, res);
  });
  app.post("/create-product", (req, res) => {
    productController.createProduct(app, req, res);
  });
};
