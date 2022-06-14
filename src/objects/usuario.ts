import TipoUsuario from "./tipoUsuario";

export default class Usuario {
    id!: number;
    nome!: string;
    email!: string;
    senha!: string;
    foto!: string;
    tipoUsuario!: TipoUsuario;
}