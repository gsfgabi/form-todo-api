interface User {
    id: number;
    name: string;
    age: number;
}

const users = [
    { id: 1, name: "Ana", age: 25 },
    { id: 2, name: "Pedro", age: 30 },
    { id: 3, name: "Maria", age: 22 }
];

function getUsersOver23(userList: User[]): string[] {
    return userList
        .filter((user: User) => user.age > 23)
        .map((user: User) => user.name);
}

const filteredNames = getUsersOver23(users);
console.log("Nomes dos usuários com mais de 23 anos:", filteredNames);

export type { User };
export { users, getUsersOver23 };