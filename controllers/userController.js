const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.getByEmail(email);
        if (!user) {
            return res.status(401).json({ 
 error: 'Credenciais inválidas' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({
 error: 'Credenciais inválidas' });
        }

        // Geração do token JWT
        const token = jwt.sign({ userId: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro no servidor' });
    }
};

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
    const {name, email, password} = req.body;
    if(!name || !email) {
        return res
        .status(400)
        .json({error: "Nome e email são obrigatórios"});
    }
    const newUser = {
        name,
        email,
        password
    }

    await User.create(newUser);
    res.status(201).json(email);
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
    deleteUser,
    login
}