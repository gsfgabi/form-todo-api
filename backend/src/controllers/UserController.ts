import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public getUsers = (req: Request, res: Response): void => {
        try {
            const users = this.userService.findAll();
            res.status(200).json(users);
        } catch (error: any) {
            console.error('Erro ao buscar usuários:', error.message);
            res.status(500).json({ message: 'Erro interno do servidor ao buscar usuários.' });
        }
    };
}