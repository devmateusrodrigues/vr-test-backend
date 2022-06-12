import express, {Request, Response} from 'express';
import * as alunoService from '../services/aluno-service'

const router = express.Router();

router.get(
    '/alunos',
    (req: Request, res: Response) => {
        alunoService.getAlunos().then(
            (alunos) => {
                res.send(alunos);
            }
        )
    }
);

router.get(
    '/alunos/:id',
    (req: Request, res: Response) => {
        alunoService.getAlunoById(parseInt(req.params.id)).then(
            (aluno) => {
                res.send(aluno);
            }
        );
    }
);

router.post(
    '/alunos',
    (req: Request, res: Response) => {
        alunoService.saveAluno(req.body).then(
            () => {
                res.status(200).json(
                    { message: "Aluno inserido com sucesso!" }
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
    '/alunos',
    (req: Request, res: Response) => {
        alunoService.updateAluno(req.body).then(
            () => {
                res.status(200).json(
                    { message: "Aluno atualizado com sucesso!" }
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
    '/alunos/:id',
    (req: Request, res: Response) => {
        alunoService.deleteAluno(parseInt(req.params.id)).then(
            (aluno) => {
                res.send(aluno);
            }
        ).catch((error) => res.send(error.message));
    }
);

export default router;