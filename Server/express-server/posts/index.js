const collection = require('./collection');
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	collection
		.getAllPosts()
		.then(data => res.send(data));
});

router.get('/:postId', (req, res) => {
	collection
		.getPost(req.params.postId)
		.then(data => res.send(data))
});

module.exports = router;