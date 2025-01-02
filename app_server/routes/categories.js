var express = require("express");
var router = express.Router();

const CategoryController = require("../controller/category");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari CATEGORY router');
// });

//insert
router.post("/", CategoryController.createCategory);

//select
router.get("/", CategoryController.readCategory);

//delete
router.delete("/:kdCategory", CategoryController.deleteCategory);

//update
router.put("/:kdCategory", CategoryController.updateCategory);

module.exports = router;
