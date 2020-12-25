const express = require('express');

const router = express.Router();

let postController = require('../controllers/post_controller');

router.post('/create', postController.create);

module.exports = router;