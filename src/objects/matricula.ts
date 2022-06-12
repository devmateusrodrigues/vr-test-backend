import Aluno from "./aluno";
import Curso from "./curso";

export default class Matricula {
    id!: number;
    curso!: Curso;
    aluno!: Aluno;
}