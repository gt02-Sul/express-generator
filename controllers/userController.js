const User = require("../models/User");

let users = [
    {id: 1, name: "Carlos Terceiro", email: "carlos.terceiro@email.com"},
    {id: 2, name: "Natan Primeiro", email: "natan.primeiro@email.com"}
]

const getAllUsers = async (req, res) => {
    const users = await User.getAll();

    res.json(users);
};

const getUserById = async (req, res, next) => {
    const userId = parseInt(req.params.id);
    const user = await User.getById(userId);

    if(!user) {
        const error = new Error("Usuário não encontrado!");
        error.statusCode = 404;
        return next(error);
    }
    res.json(user);
};

const createUser = async (req, res) => {
    const {name, email} = req.body;
    if(!name || !email) {
        return res
        .status(400)
        .json({error: "Nome e email são obrigatórios"});
    }
    const newUser = {
        name,
        email
    }

    await User.create(newUser);
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const {name, email} = req.body;

    const userIndex = users.findIndex((u) => u.id == userId);
    if (userIndex === -1) {
        return res.status(400).json({error: "Usuário não encontrado"});
    }
    users[userIndex] = {
        ...users[userIndex],
        name,
        email
    };
    res.json(users[userIndex]);
}

const deleteUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    await User.deleteById(userId);
    res.json({message: "Usuário deletado com sucesso!"})
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}