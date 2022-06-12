import {db} from '../database/connection'
import Matricula from '../objects/matricula';

export const getMatriculas = async () => {
    return await db.query('SELECT * FROM Curso_aluno');
}

export async function getMatriculaById(id: number) {
    return await db.any('SELECT * FROM Curso_aluno WHERE id_curso_aluno = $1', [id]);
}

export const saveMatricula = async (matricula: Matricula) => {
    return await db.oneOrNone(
        'INSERT INTO Curso_aluno(id_curso, id_aluno) VALUES ($1, $2)',
        [matricula.curso.id, matricula.aluno.id]
    );
}

export const deleteMatricula = async (id: number) => {
    return await db.any('DELETE FROM Curso_aluno WHERE id_curso_aluno = $1', [id]);
}