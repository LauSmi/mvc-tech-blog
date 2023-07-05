const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I told my computer I needed a break. It gave me a KitKat.",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Life is like coding without bugs - surprising and satisfying!",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Life is like coding: one bug leads to another, but don't worry, we'll squash them all!",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Writing code is like painting a picture, each line adds a stroke of creativity!",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Coding is like a puzzle; it may seem confusing at first, but eventually, it all fits together!",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Remember, every bug you squash makes your code a little more humane.",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
