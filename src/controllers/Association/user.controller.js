const { User, Post } = require("../../models/Association");

const createUser = async (req, res) => {
  try {
    const { name, posts } = req.body;
    const user = await User.create(
      { name, posts
       },
      { include: [{ model: Post, as: "posts" }] }
    );

    res.status(201).json({
      data: user,
    });
  } catch (error) {
    console.log("Error in createUser Api:", error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

const getAllUsersWithPosts = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Post, as: 'posts' }]
    });
    res.json(users);
  } catch (err) {
    console.log("Error", err);
    
    res.status(500).json({ error: err.message });
  }
};
module.exports = {createUser, getAllUsersWithPosts}