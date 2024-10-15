
```markdown
# API de Gerenciamento de Tarefas

Esta é uma API simples desenvolvida em Express.js para gerenciar uma lista de tarefas. A aplicação permite a adição, visualização, atualização e exclusão de tarefas.

## Requisitos

* Node.js - [Baixe e instale aqui](https://nodejs.org/)
* npm (geralmente já incluso na instalação do Node.js)

## Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd seu-projeto
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Estrutura do Projeto

```
- seu-projeto/
  - package.json                # Dependências e scripts do projeto
  - index.js                    # Código principal da API
  - views/                      # Templates EJS para as páginas
    - index.ejs                # Página para listar tarefas
    - form.ejs                 # Página para adicionar novas tarefas
    - edit.ejs                 # Página para editar tarefas
  - public/                     # Arquivos estáticos (CSS)
    - styles.css                # Estilos da aplicação
```

## Uso

1. Inicie o servidor:

   ```bash
   npm start     # ou para desenvolvimento: npm run dev
   ```

2. [Acesse](http://localhost:3000/) a aplicação através do seu navegador.

## Rotas Disponíveis

- **GET /tarefas**: Retorna todas as tarefas ou filtra tarefas com base no status (`/tarefas?status=true` ou `/tarefas?status=false`).
- **POST /tarefas**: Adiciona uma nova tarefa. Exemplo de corpo do pedido:
   
   ```json
   {
       "nome": "Comprar pão"
   }
   ```

- **GET /tarefas/:id/editar**: Mostra o formulário de edição para a tarefa selecionada.
- **PUT /tarefas/:id**: Atualiza uma tarefa existente. Exemplo de corpo do pedido:

   ```json
   {
       "nome": "Comprar leite",
       "status": false
   }
   ```

- **DELETE /tarefas/:id**: Remove uma tarefa pelo ID.

## Exemplo de Uso

Integre a API com qualquer cliente HTTP como Postman para fazer requisições a várias rotas definidas isso também pode ser otimizado com uma interface frontend.

Aluno: João Gabriel Barros Guimarães
