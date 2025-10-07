Este projeto demonstra conhecimentos em **HTML, CSS, JavaScript/Vue.js, TypeScript, SQL e Node.js**.

## 📋 Estrutura do Projeto

```
form-todo-api/
├── frontend/
│   ├── index.html              # Formulário de cadastro (HTML + CSS)
│   ├── todo-list.html          # To-Do List (Vue.js com componentes inline)
│   ├── typescript-demo.html    # Demonstração TypeScript
│   ├── css/
│   │   └── global.css          # Estilos globais
│   └── src/
│       └── utils/
│           └── FilterUsers.ts  # Função TypeScript
├── backend/
│   ├── src/
│   │   ├── main.ts             # Servidor Node.js
│   │   ├── controllers/
│   │   │   └── UserController.ts
│   │   ├── services/
│   │   │   └── UserService.ts
│   │   └── routes/
│   │       └── userRoutes.ts
│   └── tsconfig.json
├── database/
│   └── query.sql              # Query SQL
└── README.md
```

## 🚀 Como Executar

1. **Instalar dependências:**
```bash
npm install
```

2. **Executar backend:**
```bash
npm run dev
```

3. **Acessar aplicações:**
- Formulário: `frontend/index.html`
- To-Do List: `frontend/todo-list.html`
- Demo TypeScript: `frontend/typescript-demo.html`
- API: `http://localhost:3000/users`

## 📝 Detalhamento dos Requisitos

### 1. HTML + CSS ✅

**Arquivo**: `frontend/index.html` e `frontend/css/global.css`

**Implementado:**
- ✅ Formulário com campos: Nome, E-mail, Senha
- ✅ Botão estilizado
- ✅ Validação básica (campos obrigatórios)
- ✅ Layout responsivo

**Decisões de Design e Implementação:**

**Estrutura HTML Semântica**

Escolhi usar elementos HTML semânticos como `<form>`, `<label>` e `<input>` porque eles fornecem significado estrutural ao conteúdo, melhorando a acessibilidade para usuários com leitores de tela e outros dispositivos assistivos. O elemento `<form>` agrupa logicamente os campos relacionados, enquanto `<label>` cria uma associação clara entre o texto descritivo e o campo de entrada correspondente.

**Organização do CSS em Arquivo Separado**

Separei os estilos em um arquivo `global.css` para promover reutilização e manutenibilidade. Este arquivo contém variáveis CSS para cores e espaçamentos, classes utilitárias como `.form-input` e `.btn-primary`, e estilos de reset básicos. Esta abordagem permite que múltiplas páginas compartilhem os mesmos estilos, mantendo consistência visual e facilitando mudanças futuras no design.

**Validação HTML5 Nativa**

Implementei validação usando atributos HTML5 nativos como `required`, `type="email"` e `minlength` em vez de JavaScript customizado. Esta decisão foi tomada porque a validação nativa do HTML5 é mais eficiente, funciona mesmo com JavaScript desabilitado, e fornece feedback visual consistente entre diferentes navegadores. O navegador automaticamente mostra mensagens de erro apropriadas e aplica estilos visuais para campos inválidos.

### 2. JavaScript / Vue.js ✅

**Arquivo**: `frontend/todo-list.html`

**Implementado:**
- ✅ Adicionar novas tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Remover tarefas da lista
- ✅ Filtros (Todas, Pendentes, Concluídas)

**Decisões de Arquitetura e Implementação:**

**Escolha do Vue.js 3 e Componentes Inline**

Quando comecei a desenvolver o to-do list, minha primeira tentativa foi criar componentes Vue.js em arquivos separados (`.vue`), seguindo as melhores práticas de desenvolvimento moderno. Isso funcionaria perfeitamente em um ambiente com bundler como Vite ou Webpack, mas quando tentei abrir o HTML diretamente no navegador, encontrei um problema técnico: o navegador bloqueia requisições `fetch()` para arquivos locais devido à política de CORS (Cross-Origin Resource Sharing). 

Diante dessa limitação, tomei a decisão de implementar os componentes inline usando `defineComponent()` do Vue.js 3. Esta abordagem mantém todos os benefícios da arquitetura de componentes - separação de responsabilidades, reutilização e organização - mas sem depender de ferramentas de build externas. O código fica limpo, funcional e pode ser executado diretamente no navegador.

**Estrutura de Componentes: TodoItem e TodoList**

Separei a aplicação em dois componentes principais pensando na responsabilidade única de cada um. O `TodoItem` é responsável apenas por renderizar uma tarefa individual e comunicar eventos para o componente pai. Ele recebe os dados da tarefa via props e emite eventos quando o usuário interage com ela (marcar como concluída ou remover). 

O `TodoList` é o componente principal que gerencia todo o estado da aplicação. Ele contém a lista de tarefas, os filtros, a lógica de adicionar novas tarefas e a persistência no localStorage. Esta separação permite que cada componente tenha uma responsabilidade clara e bem definida, facilitando a manutenção e compreensão do código.

**Comunicação Entre Componentes via Props e Emits**

Implementei a comunicação entre componentes usando o padrão props-down, events-up do Vue.js. O componente pai (`TodoList`) passa dados para o filho (`TodoItem`) através de props, e o filho comunica mudanças de volta através de eventos emitidos. Esta abordagem mantém um fluxo de dados unidirecional e previsível, evitando problemas de sincronização e facilitando o debug quando algo não funciona como esperado.

**Gerenciamento de Estado Reativo**

Utilizei a API de reatividade do Vue.js 3 com `data()` para gerenciar o estado da aplicação. Todas as mudanças nos dados (adicionar tarefa, marcar como concluída, filtrar) são automaticamente refletidas na interface graças ao sistema de reatividade do Vue. Isso elimina a necessidade de manipular o DOM manualmente e garante que a interface sempre esteja sincronizada com os dados.

**Persistência Local com localStorage**

Implementei a persistência das tarefas usando localStorage para que o usuário não perca suas tarefas ao recarregar a página. Esta decisão foi tomada pensando na simplicidade - localStorage é nativo do navegador, não requer configuração adicional e funciona perfeitamente para este tipo de aplicação. O código trata erros graciosamente caso o localStorage não esteja disponível ou tenha problemas de espaço.

**Validação e Experiência do Usuário**

Adicionei validações para evitar tarefas duplicadas e campos vazios, melhorando a experiência do usuário. Para a remoção de tarefas, integrei o SweetAlert2 para mostrar uma confirmação elegante antes de excluir, evitando exclusões acidentais. Estas decisões foram tomadas pensando na usabilidade e na prevenção de erros comuns que usuários podem cometer.

### 3. TypeScript ✅

**Arquivo**: `frontend/src/utils/FilterUsers.ts`

**Decisões de Implementação:**

**Definição de Interface para Estrutura de Dados**

Criei a interface `User` para definir explicitamente a estrutura esperada de um objeto usuário. Esta decisão foi tomada porque o TypeScript é uma linguagem de tipagem estática, e definir interfaces claras ajuda a prevenir erros durante o desenvolvimento. Quando alguém usar esta função, o TypeScript verificará automaticamente se os dados passados seguem a estrutura definida, evitando erros como tentar acessar propriedades inexistentes ou passar tipos incorretos.

**Função Pura com Tipagem Explícita**

Implementei a função `getUsersOver23` como uma função pura que recebe um array de usuários e retorna apenas os nomes daqueles com mais de 23 anos. A tipagem explícita `userList: User[]` e `: string[]` torna a intenção da função cristalina - qualquer desenvolvedor que ler este código entenderá imediatamente o que a função faz, quais dados ela espera e o que ela retorna. Esta clareza é especialmente valiosa em projetos maiores onde múltiplas pessoas trabalham no mesmo código.

**Uso de Métodos Funcionais**

Utilizei `filter()` e `map()` em sequência para implementar a lógica de forma declarativa. Esta abordagem é mais legível que loops imperativos e expressa claramente a intenção: primeiro filtrar usuários com idade maior que 23, depois extrair apenas os nomes. O TypeScript garante que cada etapa da transformação seja type-safe, prevenindo erros em tempo de compilação.

**Implementação:**
```typescript
interface User {
    id: number;
    name: string;
    age: number;
}

function getUsersOver23(userList: User[]): string[] {
    return userList
        .filter(user => user.age > 23)
        .map(user => user.name);
}
```
- **Por que**: TypeScript garante que só recebemos objetos com `id`, `name` e `age`

### 4. Banco de Dados (SQL) ✅

**Arquivo**: `database/query.sql`

**Decisões de Implementação:**

**Query SQL Simples e Eficiente**

Escolhi uma query SQL simples que lista todos os usuários ordenados pela data de criação mais recente primeiro. Esta abordagem é eficiente porque usa apenas uma tabela (`users`) e um índice simples na coluna `created_at`. Em aplicações reais, esta coluna teria um índice para otimizar consultas de ordenação.

**Uso de ORDER BY DESC**

Utilizei `ORDER BY created_at DESC` para mostrar os usuários mais recentes primeiro, que é o comportamento esperado na maioria das aplicações - usuários querem ver primeiro o que foi criado mais recentemente. Esta é uma convenção comum em interfaces de usuário e melhora a experiência do usuário.

**Implementação:**
```sql
SELECT id, name, email, created_at
FROM users
ORDER BY created_at DESC;
```

### 5. Backend (Node.js) ✅

**Arquivo**: `backend/src/main.ts`

**Decisões de Arquitetura:**

**Padrão MVC para Separação de Responsabilidades**

Implementei o padrão MVC (Model-View-Controller) para organizar o código do backend de forma clara e escalável. O `UserController` é responsável apenas por receber requisições HTTP e retornar respostas, delegando a lógica de negócio para o `UserService`. Esta separação permite que cada camada tenha uma responsabilidade específica, facilitando testes, manutenção e evolução do código.

**Service Layer para Lógica de Negócio**

Criei uma camada de serviço (`UserService`) que contém a lógica de negócio pura, independente de detalhes de HTTP ou banco de dados. Esta abordagem permite reutilizar a mesma lógica em diferentes contextos (API REST, GraphQL, CLI) e facilita a criação de testes unitários, já que a lógica de negócio está isolada das dependências externas.

**Roteamento Organizado**

Separei as rotas em um arquivo dedicado (`userRoutes.ts`) para manter o arquivo principal limpo e organizar as rotas por recurso. Esta estrutura facilita a adição de novas rotas e mantém o código organizado conforme a aplicação cresce.

**Implementação:**
```typescript
app.get('/users', UserController.getUsers);
```
- **TypeScript**: Tipagem no backend

## 🏗 Organização de Projeto 

### Frontend (Vue.js)
```
frontend/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── views/          # Páginas
│   ├── services/       # Comunicação com API
│   ├── utils/          # Funções auxiliares
│   └── types/          # Tipos TypeScript
├── public/             # Arquivos estáticos
└── package.json
```

**Motivo**: Separação clara entre componentes, páginas e utilitários.

### Backend (Node.js)
```
backend/
├── src/
│   ├── controllers/    # Lógica de controle
│   ├── services/       # Lógica de negócio
│   ├── routes/         # Definição de rotas
│   ├── models/         # Modelos de dados
│   └── middleware/     # Middlewares
└── package.json
```

**Motivo**: Padrão MVC facilita manutenção e testes.
