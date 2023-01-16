const { connect, connection } = require('mongoose');

connect('mongodb://localhost/weaselnet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
