
```markdown

## Requisitos

* Node.js - [Baixe e instale aqui](https://nodejs.org/)
* npm (geralmente já incluso na instalação do Node.js)

## Instalação

1. Clone o repositório:

   ```bash
   git clone url
   cd pasta
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

1. Inicie o servidor:

   ```bash
   npm start     # ou para desenvolvimento: npm run dev
   ```

2. [Acesse](http://localhost:3000/) a aplicação através do seu navegador.

## Rotas Disponíveis

- **GET /tarefas**: Retorna todas as tarefas ou filtra tarefas com base no status
- **POST /tarefas**: Adiciona uma nova tarefa. Exemplo de corpo do pedido:
   
   ```json
   {
       "nome": "Trabalhar na API"
   }
   ```

- **GET /tarefas/:id/editar**: Mostra o formulário de edição para a tarefa selecionada.
- **PUT /tarefas/:id**: Atualiza uma tarefa existente. Exemplo de corpo do pedido:

   ```json
   {
       "nome": "Entregar atividade do prof. Cláudio",
       "status": true
   }
   ```

- **DELETE /tarefas/:id**: Remove uma tarefa pelo ID.


Aluno: João Gabriel Barros Guimarães
