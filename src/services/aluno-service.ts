import {db} from '../database/connection'
import Aluno from '../objects/aluno';

export const getAlunos = async () => {
    return await db.query('SELECT * FROM Aluno');
}

export async function getAlunoById(id: number) {
    return await db.any('SELECT * FROM Aluno WHERE id_aluno = $1', [id]);
}

export const saveAluno = async (aluno: Aluno) => {
    return await db.oneOrNone(
        'INSERT INTO Aluno(nome) VALUES ($1)',
        [aluno.nome]
    );
}

export const updateAluno = async (aluno: Aluno) => {
    return await db.oneOrNone(
        'UPDATE Aluno SET nome = $1 WHERE id_aluno = $2',
        [aluno.nome, aluno.id]
    );
}

export const deleteAluno = async (id: number) => {
    return await db.any('DELETE FROM Aluno WHERE id_aluno = $1', [id]);
}