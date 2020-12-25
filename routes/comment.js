const express = require('express');

const router = express.Router();

let commentController = require('../controllers/comment_controller');

router.post('/create', commentController.create);

module.exports = router;