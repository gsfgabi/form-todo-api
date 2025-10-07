
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface User {
  id: number;
  name: string;
  age: number;
}

export type TodoFilter = 'all' | 'active' | 'completed';