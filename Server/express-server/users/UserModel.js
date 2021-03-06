const db = require('../db');
// define how a user object in the users collection will look like
const userSchema = new db.Schema({
    name: String,
    lastName: String,
    email: String
});

// create a working model from the schema that will change data in our database, on the users collection.
const User = db.model('User', userSchema);

module.exports = User;