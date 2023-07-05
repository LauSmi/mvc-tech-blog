const { Post } = require('../models');

const postData = [
    {
        title: 'Understanding Sequelize Data Types in Node.js',
        post_text: 'Sequelize, a popular ORM (Object-Relational Mapping) library in Node.js, provides several built-in data types that you can use when defining a model for your database. For simple databases, you might commonly use INTEGER for numeric values and STRING for textual data.',
        user_id: 1,
    },
    {
        title: 'Using Handlebars Template Engine for Modularity in Node.js',
        post_text: 'Handlebars, an npm package, is a powerful template engine that enhances code modularity, reusability, and maintainability. By creating templates, you can set up a layout that is shared across multiple pages, such as a home page and a user dashboard, improving the organization of your Node.js applications.',
        user_id: 2,
    },
    {
        title: 'Exploring Handlebars Partials for Code Reusability',
        post_text: 'Handlebars offers a fantastic feature called "partials" that allows you to create reusable code snippets for common elements like post information or comments. By employing partials, you can easily include these code snippets whenever you need them on your website, reducing duplication and improving code efficiency in your Node.js applications.',
        user_id: 2,
    },
    {
        title: 'Implementing User Sessions in Express.js',
        post_text: 'In Node.js, establishing user sessions is crucial for user authentication and maintaining stateful interactions. With packages like Express Session, you can create and manage sessions on your server. A session establishes a secure link between the user and the website, often using cookies to maintain authentication over multiple requests. Cookies can have an expiry time or be set indefinitely to cater to your application requirements.',
        user_id: 3,
    },
    {
        title: 'Securing User Passwords with Hashing in Node.js',
        post_text: 'User authentication demands utmost security for sensitive data like passwords. In Node.js, hashing is a common practice to safeguard passwords. By utilizing packages like bcrypt, you can efficiently hash passwords during user registration and verify them during login. Hashing transforms the password into an irreversible and unique string, ensuring that sensitive information remains protected in your Node.js applications.',
        user_id: 4,
    },
    {
        title: 'Building Web Servers with Express.js',
        post_text: 'Express.js, a minimalist web application framework in Node.js, simplifies the process of creating web servers. With just a few lines of code, you can quickly set up a server that handles HTTP requests and responses. Its intuitive API and flexibility make Express.js a popular choice for hosting dynamic webpages and building powerful backends in Node.js applications.',
        user_id: 5,
    },
];


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;