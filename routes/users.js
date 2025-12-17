const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/userController.js');

router.get('/api', usersController.initialSystem);

router.get('/user', usersController.getUser);

router.get('/users', usersController.getUserQuery);

router.post('/users', usersController.postUser);

router.put('/users/:id', usersController.putUser);

router.delete('/users', usersController.deleteUser);




module.exports = router;