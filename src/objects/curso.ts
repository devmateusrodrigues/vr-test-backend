import Usuario from "./usuario";

export default class Curso {
    id!: number;
    descricao!: string;
    ementa!: string;
    professor!: Usuario;
    alunos!: Usuario[];
}