const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const searchProducts = async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }

  try {
    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: query,  // recherche insensible à la casse par défaut en SQLite/PostgreSQL
        },
      },
    });
    res.json(products);
  } catch (error) {
    console.error('Error in searchProducts:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { searchProducts };
