const { Router } = require("express");
const Mainrouter = Router();

// Admin Routeer
const adminRoutes = require('./adminRoutes');
Mainrouter.use(adminRoutes);

// Client Router
const clientRoutes = require("./clientRoutes");
Mainrouter.use(clientRoutes);


module.exports = Mainrouter;
