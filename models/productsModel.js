const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createProduct(dataBody) {
  try {
    await prisma.products.create({
      data: {
        name: dataBody.name_product,
        price: Number.parseFloat(dataBody.price_product),
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  createProduct,
};
