const { Router } = require("express");
const adminRoutes = Router();
const adminController = require('../controller/adminController');
const upload = require("../middleware/imgUpload");

adminRoutes.get('/login', adminController.openLoginPage);
adminRoutes.get('/register', adminController.openRegisterPage)

adminRoutes.get('/createblog', adminController.openCreateBlogPage);
adminRoutes.post('/createblog', upload, adminController.addBlog);

adminRoutes.get('/editblog/:id', adminController.openEditBlogPage);
adminRoutes.post('/editblog/:id', upload, adminController.EditBlog);

adminRoutes.get('/delete/:id', adminController.DeletBlog);

adminRoutes.get('/viewBlog/:id', adminController.singleBlogPage);

module.exports = adminRoutes;