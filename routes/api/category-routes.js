const { Category, Product } = require('../../models');
const sequelize = require("../../config/connection");

// All
router.get('/', (req, res) => {
  Category.findAll({
    order: [["id", "ASC"]],
    attributes: [
      "id",
      "category_name"
    ], 
    include: [
      {
        model: Product, 
        attributes: ["id", "product_name", "price", "stock", "category_id"]
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
// One
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      "id",
      "category_name"
    ], 
    include: [
      {
        model: Product, 
        attributes: ["id", "product_name", "price", "stock", "category_id"]
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
// Create
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// Update
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Delete
router.delete('/:id', (req, res) => {
  router.delete('/:id', (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;
