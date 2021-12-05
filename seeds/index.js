const sequelize = require('../config/connection');
const userSeed = require('./user-seeds');
const commentsSeed = require('./comment-seeds');
const postSeed = require('./post-seeds');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    await userSeed();
    await commentsSeed();
    await postSeed();
    process.exit(0)
}
seedDatabase();