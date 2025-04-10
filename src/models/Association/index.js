const {Post} = require("./post.model")
const {User} = require("./user.model")

User.hasMany(Post, {
    foreignKey: "userId", 
    as: 'posts'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'userId', 
    as: 'user' 
  });

module.exports = {User, Post}