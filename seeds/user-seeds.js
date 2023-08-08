const { User } = require('../models');

const seedDb = [
    {
        user_id: "1",
        username: "programmer123",
        email: "prog@gmail.com",
        password: "Password12345",
    },
    {
        user_id: "2",
        username: "MissPiggy",
        email: "missp@mail.com",
        password: "missP1",
    },
    {
        user_id: "3",
        username: "imthatgirl",
        email: "mail@mail.com",
        password: "123456",
    },
];

const userDb = () => User.bulkCreate(seedDb);

module.exports = userDb;