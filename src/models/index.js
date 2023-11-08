const ToDo = require('./ToDo');
const User = require('./User');

User.hasMany(ToDo);
ToDo.belongsTo(User);
