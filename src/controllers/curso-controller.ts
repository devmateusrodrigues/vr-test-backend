import express, {Request, Response} from 'express';
import * as cursoService from '../services/curso-service'

const router = express.Router();

router.get(
    '/cursos',
    (req: Request, res: Response) => {
        cursoService.getCursos().then(
            (cursos) => {
                res.send(cursos);
            }
        )
    }
);

router.get(
    '/cursos/:id',
    (req: Request, res: Response) => {
        cursoService.getCursoById(parseInt(req.params.id)).then(
            (curso) => {
                res.send(curso);
            }
        );
    }
);

router.post(
    '/cursos',
    (req: Request, res: Response) => {
        cursoService.saveCurso(req.body).then(
            () => {
                res.status(200).json(
                    { message: "Curso inserido com sucesso!" }
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
    '/cursos',
    (req: Request, res: Response) => {
        cursoService.updateCurso(req.body).then(
            () => {
                res.status(200).json(
                    { message: "Curso atualizado com sucesso!" }
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
    '/cursos/:id',
    (req: Request, res: Response) => {
        cursoService.deleteCurso(parseInt(req.params.id)).then(
            (curso) => {
                res.send(curso);
            }
        ).catch((error) => res.send(error.message));
    }
);

export default router;