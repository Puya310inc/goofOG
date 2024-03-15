// auth.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = [
  { username: 'user1', password: 'password123' },
  { username: 'user2', password: 'password456' }
];
