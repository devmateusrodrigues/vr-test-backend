import express, {Request, Response} from 'express';
import * as matriculaService from '../services/matricula-service'

const router = express.Router();

router.get(
    '/matriculas',
    (req: Request, res: Response) => {
        matriculaService.getMatriculas().then(
            (matriculas) => {
                res.send(matriculas);
            }
        )
    }
);

router.get(
    '/matriculas/:id',
    (req: Request, res: Response) => {
        matriculaService.getMatriculaById(parseInt(req.params.id)).then(
            (matricula) => {
                res.send(matricula);
            }
        );
    }
);

router.post(
    '/matriculas',
    (req: Request, res: Response) => {
        matriculaService.saveMatricula(req.body).then(
            () => {
                res.status(200).json(
                    { message: "Matricula inserida com sucesso!" }
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
    '/matriculas/:id',
    (req: Request, res: Response) => {
        matriculaService.deleteMatricula(parseInt(req.params.id)).then(
            (matricula) => {
                res.send(matricula);
            }
        ).catch((error) => res.send(error.message));
    }
);

export default router;