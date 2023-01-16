const connection = require('../config/connection');
const {User, Thought} = require('../models');
const userData = require('./userData');
const thoughtData = require('./thoughtData');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.collection.insertMany(userData);
    // await Thought.collection.insertMany(thoughtData);
    process.exit(0);
});