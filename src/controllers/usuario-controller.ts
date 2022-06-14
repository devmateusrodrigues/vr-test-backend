import express, {Request, Response} from 'express';
import * as usuarioService from '../services/usuario-service'

const router = express.Router();

router.get(
    '/usuarios',
    (req: Request, res: Response) => {
        usuarioService.getUsuarios().then(
            (usuarios) => {
                res.send(usuarios);
            }
        )
    }
);

router.get(
    '/usuarios/:id',
    (req: Request, res: Response) => {
        usuarioService.getUsuarioById(parseInt(req.params.id)).then(
            (usuario) => {
                res.send(usuario);
            }
        );
    }
);

router.post(
    '/usuarios',
    (req: Request, res: Response) => {
        usuarioService.saveUsuario(req.body).then(
            () => {
                res.status(200).json(
                    { message: "Usuário inserido com sucesso!" }
                );
            }
        ).catch(
            (error) => {
                res.status(303).json(
                    { message: "Ocorreu um erro " + error.message }
                )
            }
        );
    }
);

router.put(
    '/usuarios',
    (req: Request, res: Response) => {
        usuarioService.updateUsuario(req.body).then(
            () => {
                res.status(200).json(
                    { message: "Usuário atualizado com sucesso!" }
                );
            }
        ).catch(
            (error) => {
                res.status(303).json(
                    { message: "Ocorreu um erro " + error.message }
                )
            }
        );
    }
);

router.delete(
    '/usuarios/:id',
    (req: Request, res: Response) => {
        usuarioService.deleteUsuario(parseInt(req.params.id)).then(
            (usuario) => {
                res.send(usuario);
            }
        ).catch((error) => res.send(error.message));
    }
);

export default router;