const express = require('express');
const userRouter = require('./user.router');
const toDoRouter = require('./toDo.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter);
router.use('/todos', toDoRouter);

module.exports = router;