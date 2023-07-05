const { User } = require('../models');

const userdata = [
  {
    username: 'newuser1',
    email: 'newemail1@example.com',
    password: 'newpassword1'
  },
  {
    username: 'newuser2',
    email: 'newemail2@example.com',
    password: 'newpassword2'
  },
  {
    username: 'newuser3',
    email: 'newemail3@example.com',
    password: 'newpassword3'
  },
  {
    username: 'newuser4',
    email: 'newemail4@example.com',
    password: 'newpassword4'
  },
  {
    username: 'newuser5',
    email: 'newemail5@example.com',
    password: 'newpassword5'
  },
  {
    username: 'newuser6',
    email: 'newemail6@example.com',
    password: 'newpassword6'
  },
  {
    username: 'newuser7',
    email: 'newemail7@example.com',
    password: 'newpassword7'
  },
  {
    username: 'newuser8',
    email: 'newemail8@example.com',
    password: 'newpassword8'
  },
  {
    username: 'newuser9',
    email: 'newemail9@example.com',
    password: 'newpassword9'
  },
  {
    username: 'newuser10',
    email: 'newemail10@example.com',
    password: 'newpassword10'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;