const router = require("express").Router();
const userRoutes = require("./book-routes");

router.use("/books", bookRoutes);

module.exports = router;
