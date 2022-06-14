import {db} from '../database/connection'
import Usuario from '../objects/usuario';

export const getUsuarios = async () => {
    return await db.query('SELECT * FROM Usuario');
}

export async function getUsuarioById(id: number) {
    return await db.any('SELECT * FROM Usuario WHERE id_usuario = $1', [id]);
}

export const saveUsuario = async (usuario: Usuario) => {
    return await db.oneOrNone(
        'INSERT INTO Usuario(nome, email, senha, foto, id_tipo_usuario) VALUES ($1, $2, $3, $4, $5)',
        [usuario.nome, usuario.email, usuario.senha, usuario.foto, usuario.tipoUsuario.id]
    );
}

export const updateUsuario = async (usuario: Usuario) => {
    return await db.oneOrNone(
        'UPDATE Usuario SET nome = $1, email = $2, senha = $3, foto = $4, id_tipo_usuario = $5 WHERE id_usuario = $6',
        [usuario.nome, usuario.email, usuario.senha, usuario.foto, usuario.tipoUsuario.id, usuario.id]
    );
}

export const deleteUsuario = async (id: number) => {
    return await db.any('DELETE FROM Usuario WHERE id_usuario = $1', [id]);
}