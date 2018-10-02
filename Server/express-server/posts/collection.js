const connectdb = require('../db');
const { ObjectID } = require('mongodb');

function getPostsCollection() {
	return connectdb()
		.then((db) => {
			return db.collection('posts');
		});
}

function getAllPosts() {
	return getPostsCollection()
		.then((collection) => {
			return collection.find({}).toArray();
		});
}

function getPost(id) {
	return getPostsCollection()
		.then((collection) => {
			return collection.findOne({ _id: ObjectID(id) });
		});
}

module.exports = {
	getAllPosts,
	getPost
};