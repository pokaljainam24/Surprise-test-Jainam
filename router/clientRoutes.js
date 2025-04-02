const { Router } = require("express");
const clientRoutes = Router();
const clientController = require('../controller/clientController')

clientRoutes.get('/', clientController.openBlogPage);


module.exports = clientRoutes;