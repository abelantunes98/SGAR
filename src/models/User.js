const mongoose = require('../dataBase');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    cpf: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    endereco: {
        type: String,
        required: true,
    },
    cargo: {
        type: String,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Gerando Hash para senha antes de salvar usuário.
UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;