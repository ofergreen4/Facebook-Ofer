const connectdb = require('../db');
const { ObjectID } = require('mongodb');

function getUsersCollection() {
	return connectdb()
		.then((db) => {
			return db.collection('users');
		});
}

function getAllUsers() {
	return getUsersCollection()
		.then((collection) => {
			return collection.find({}).toArray();
		});
}

function getUser(id) {
	return getUsersCollection()
		.then((collection) => {
			return collection.findOne({ _id: ObjectID(id) });
		});
}

function insertUser(user) {
	return getUsersCollection()
		.then(collection => collection
			.insertOne(user));
}

function updateUser(userId, params) {
	return getUsersCollection()
		.then(collection => collection
		.updateUser(
			{ _id: ObjectID(userId) }, // first param - which object to update
			{ $set: params } // second param - what & how to update
		));
}

function deleteUser(userId) {
	return getUsersCollection()
		.then(collection => collection
			.deleteOne(
			{_id: ObjectID(userId) }
		));
}

module.exports = {
	getAllUsers,
	getUser,
	insertUser,
	updateUser,
	deleteUser
};