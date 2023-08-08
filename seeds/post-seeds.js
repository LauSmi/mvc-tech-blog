const { Post } = require('../models');

const dbData = [
  {
    id: 1,
    title: 'Why do programmers prefer dark mode?',
    post_text: 'Because light attracts bugs.',
    user_id: 1,
  },
  {
    id: 2,
    title: 'How many developers does it take to screw in a lightbulb?',
    post_text: 'None. It`s a hardware problem.',
    user_id: 2,
  },
  {
    id: 3,
    title: 'Why did the programmer quit her job?',
    post_text: 'Because she didn`t get arrays',
    user_id: 3,
  },
];

const postDb = () => Post.bulkCreate(dbData);

module.exports = postDb;
