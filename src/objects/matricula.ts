import Usuario from "./usuario";
import Curso from "./curso";

export default class Matricula {
    id!: number;
    curso!: Curso;
    aluno!: Usuario;
}