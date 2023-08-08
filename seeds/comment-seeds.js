const { Comment } = require('../models')

const sendComments = [
    {
        user_id: 1, 
        post_id: 1,
        comment_text: "I love Tech Blogs.",
    },
    {
        user_id: 2, 
        post_id: 2, 
        comment_text: "Wow, so cool.",
    },
    {
        user_id: 3, 
        post_id: 3, 
        comment_text: "Tech Blogs are the best.",
    },
]

const commentDb = () => Comment.bulkCreate(sendComments); 

module.exports = commentDb;