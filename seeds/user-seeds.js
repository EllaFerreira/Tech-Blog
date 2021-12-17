const { User } = require("../models");

const userData = [
  {
    username: "Ella",
    password: "password1",
  },
  {
    username: "Pedro",
    password: "password2",
  },
  {
    username: "Paty",
    password: "password3",
  },
];

const userSeed = () => User.bulkCreate(userData);

module.exports = userSeed;
