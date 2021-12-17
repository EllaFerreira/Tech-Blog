const sequelize = require('../config/connection');
const userSeed = require('./user-seeds');
const seedComments = require("./comment-seeds");
const seedPosts = require("./post-seeds");

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    await userSeed();
    await seedComments();
    await seedPosts();
    process.exit(0)
}
seedDatabase();