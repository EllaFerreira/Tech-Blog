const sequelize = require('../config/connection');
const userSeed = require('./user-seeds');
const seedComments = require("./comment-seeds");
const seedPosts = require("./post-seeds");

const seedDatabase = async() => {

    // await sequelize.query("SET FOREIGN_KEY_CHECKS=0;")

    await sequelize.sync({ force: true });

    await userSeed();
    await seedPosts();
    await seedComments();
    // await sequelize.query("SET FOREIGN_KEY_CHECKS=1;");
    process.exit(0)
}
seedDatabase();