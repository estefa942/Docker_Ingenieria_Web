const httpStatus = require('http-status');
const user = require('./user');

const getUsers = async (req, res) => {
  try {
    const users = await user.getUsers();
    return res
      .status(httpStatus.OK)
      .send(users);
  } catch (error) {
    console.error(error);
  return res
     .status(httpStatus.INTERNAL_SERVER_ERROR)
     .send({ message: 'Interal server error' });
  }
 };

const getUserById = async (req, res) => {
  const {id} = req.params;
  try {
    const user = await user.getUserById(id);

    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: 'Not found' });
    }else if (user){
      return res
      .status(httpStatus.OK)
      .send(user);
    }
   
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

const createUser = async (req, res) => {
  const { body } = req;
  try {
    const newUser = await user.createUser(body);
    if (!newUser) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: 'Cannot create user' });
    } else if (newUser) {
      return res
        .status(httpStatus.OK)
        .send(newUser);
    }
  } catch (error) {
    console.error(error);
    if (error.name === 'MongoError') {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ message: error.errmsg });
    }
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Internal server error' });
  }
};

const updateUser = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  try {
    const updatedUser = await user.updateUser(id, body);
    if (!updatedUser) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: 'user not updated' });
    } else if (updatedUser) {
      return res
        .status(httpStatus.OK)
        .send(updatedUser);
    }
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Internal server error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const {id} = req.params
    const deletedUser = await user.deleteUser(id);

    if (!deletedUser) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: 'Not found user' });
    }else if(deletedUser){
      return res
      .status(httpStatus.OK)
      .send(`user with id ${deletedUser} was deleted`);
    }
    
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
