interface User {
    id: number;
    name: string;
    email: string;
}

export class UserService {
    private users: User[] = [
        { "id": 1, "name": "Ana", "email": "ana@email.com" },
        { "id": 2, "name": "Pedro", "email": "pedro@email.com" },
        { "id": 3, "name": "Mariana", "email": "mariana@email.com" },
        { "id": 4, "name": "Carlos", "email": "carlos@email.com" }
    ];

    public findAll(): User[] {
        console.log('Buscando todos os usuários do serviço.');
        return this.users;
    }
}