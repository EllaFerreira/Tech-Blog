const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Debug JS using DevTools is fun.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "How to use Notion as a project management tool?",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Why MongoDB is better than PostgreSQL.",
    user_id: 2,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
