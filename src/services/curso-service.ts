import {db} from '../database/connection'
import Curso from '../objects/curso';

export const getCursos = async () => {
    return await db.query('SELECT * FROM Curso');
}

export async function getCursoById(id: number) {
    return await db.any('SELECT * FROM Curso WHERE id_curso = $1', [id]);
}

export const saveCurso = async (curso: Curso) => {
    return await db.oneOrNone(
        'INSERT INTO Curso(descricao, ementa) VALUES ($1, $2)',
        [curso.descricao, curso.ementa]
    );
}

export const updateCurso = async (curso: Curso) => {
    return await db.oneOrNone(
        'UPDATE curso SET descricao = $1, ementa = $2 WHERE id_curso = $3',
        [curso.descricao, curso.ementa, curso.id]
    );
}

export const deleteCurso = async (id: number) => {
    return await db.any('DELETE FROM Curso WHERE id_curso = $1', [id]);
}