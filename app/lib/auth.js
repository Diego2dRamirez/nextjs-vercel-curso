const bcrypt = require('bcryptjs');

// Función para encriptar contraseñas
export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

// Función para comparar contraseñas
export const comparePasswords = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};