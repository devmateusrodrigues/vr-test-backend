import {db} from '../database/connection'
import Matricula from '../objects/matricula';

export const getMatriculas = async () => {
    return await db.query('SELECT * FROM Matricula');
}

export async function getMatriculaById(id: number) {
    return await db.any('SELECT * FROM Matricula WHERE id_matricula = $1', [id]);
}

export const saveMatricula = async (matricula: Matricula) => {
    return await db.oneOrNone(
        'INSERT INTO Matricula(id_curso, id_usuario) VALUES ($1, $2)',
        [matricula.curso.id, matricula.aluno.id]
    );
}

export const deleteMatricula = async (id: number) => {
    return await db.any('DELETE FROM Matricula WHERE id_matricula = $1', [id]);
}