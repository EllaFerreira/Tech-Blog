const { Post } = require("../models");

const postData = [
  {
    title: "Stop using console.log to debug and start using your DevTools.",
    content: "Set your break point and step through our code to find the values as the broweser sees it.",
    user_id: 1,
  },
  {
    title: "Notion for project management",
    content: "For overall projec management, documentation, notes and wikis.",
    user_id: 2,
  },
  {
    title: "Most popular database in 2021",
    content: "A popular NoSQL database ",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
