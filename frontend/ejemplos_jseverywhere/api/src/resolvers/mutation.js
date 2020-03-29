const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { AuthenticationError, ForbiddenError } = require('apollo-server-express');
require('dotenv').config();

const gravatar = require('../util/gravatar');

module.exports = {
    // agregar contexto de usuarios
    newNote: async (parent, args, { models, user }) => {
        // si no hay usuario en el contexto, arrojar error de autenticación
        if (!user) {
            throw new AuthenticationError('You must be signed in to create a note');
        }

        return await models.Note.create({
            content: args.content,
            // referencia id de mongo del autor
            author: mongoose.Types.ObjectId(user.id)
        });
    },
    deleteNote: async (parent, { id }, { models, user }) => {
        // si no es usuario, arrojar error de autenticación
        if (!user) {
            throw new AuthenticationError('You must be signed in to delete a note');
        }

        // encontrar la nota
        const note = await models.Note.findById(id);

        // si el propietario de la nota y el usuario actual no coinciden, arrojar error de prohibido
        if (note && String(note.author) !== user.id) {
            throw new ForbiddenError("You don't have permissions to delete the note");
        }

        try {
            // si todo sale bien, eliminar la nota
            await note.remove();
            return true;
        } catch (err) {
            // si hay un error de camino, devolver falso
            return false;
        }
    },
    updateNote: async (parent, { content, id }, { models, user }) => {
        // si no es usuario, arrojar error de autenticación
        if (!user) {
            throw new AuthenticationError('You must be signed in to update a note');
        }

        // encontrar la nota
        const note = await models.Note.findById(id);

        // si el propietario de la nota y el usuario actual no coinciden, arrojar error de prohibido
        if (note && String(note.author) !== user.id) {
            throw new ForbiddenError("You don't have permissions to update the note");
}
        // Actualizar la nota en la base de datos y devolver la nota actualizada
        return await models.Note.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: {
                    content
                }
            },
            {
                new: true
            }
        );
    },
    signUp: async (parent, { username, email, password }, { models }) => {
        // normalizar direccion email
        email = email.trim().toLowerCase();
        // hash password, cost 10
        const hashed = await bcrypt.hash(password, 10);
        // crear gravatar url
        const avatar = gravatar(email);
        try {
            const user = await models.User.create({
                username,
                email,
                avatar,
                password: hashed
            });
            // crear y devolver el token web json
            return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        } catch (err) {
            console.log(err);
            // si hay un problema al crear la cuenta, arrojar un error
            throw new Error('Error creating account');
        }
    },
    signIn: async (parent, { username, email, password }, { models }) => {
        if (email) {
            // normalizar email
            email = email.trim().toLowerCase();
        }

        const user = await models.User.findOne({
            $or: [{ email }, { username }]
        });

        // si no se encuentra usuario, arrojar error de autenticación
        if (!user) {
            throw new AuthenticationError('Error signing in');
        }

        // si las contraseñas no coinciden, arrojar error de autenticación
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new AuthenticationError('Error signing in');
        }

        // crear y devolver el token web json
        return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    },
    toggleFavorite: async (parent, { id }, { models, user }) => {
        // si no se pasa el contexto del usuario, arrojar error de autenticación
        if (!user) {
            throw new AuthenticationError();
        }
        // verificar si el usuario ya ha marcado la nota como favorita
        let noteCheck = await models.Note.findById(id);
        const hasUser = noteCheck.favoritedBy.indexOf(user.id);
        // si el usuario existe en la lista.
        // tirarlo de la lista y reducir favoriteCount en 1
        if (hasUser >= 0) {
            return await models.Note.findByIdAndUpdate(
                id,
                {
                    $pull: {
                        favoritedBy: mongoose.Types.ObjectId(user.id)
                    },
                    $inc: {
                        favoriteCount: -1
                    }
                },
                {
                    // Establecer new en true para devolver el documento actualizado
                    new: true
                }
            );
        } else {
            // si el usuario no existe en la lista
            // agregarlos a la lista e incrementar FavoriteCount en 1
            return await models.Note.findByIdAndUpdate(
                id,
                {
                    $push: {
                        favoritedBy: mongoose.Types.ObjectId(user.id)
                    },
                    $inc: {
                        favoriteCount: 1
                    }
                },
                {
                    new: true
                }
            );
        }
    },                    
}         
