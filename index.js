const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let tarefas = [];
let currentId = 1;


app.get('/', (req, res) => {
  res.redirect('/tarefas');
});


app.get('/tarefas', (req, res) => {
  const { status } = req.query;
  let resultado = tarefas;

  
  if (status) {
    const statusBoolean = status === 'true';
    resultado = tarefas.filter(tarefa => tarefa.status === statusBoolean);
  }

  
  res.render('index', { tarefas: resultado });
});


app.post('/tarefas', (req, res) => {
  const { nome } = req.body;

  
  const tarefaExistente = tarefas.find(tarefa => tarefa.nome === nome);
  if (tarefaExistente) {
    return res.status(400).json({ error: 'Já existe uma tarefa com esse nome.' });
  }

  
  const novaTarefa = {
    id: currentId++,
    nome,
    status: false
  };
  tarefas.push(novaTarefa);
  res.redirect('/tarefas');
});


app.get('/tarefas/:id/editar', (req, res) => {
  const { id } = req.params;
  const tarefa = tarefas.find(t => t.id === parseInt(id));

  if (!tarefa) {
    return res.status(404).send('Tarefa não encontrada');
  }

  res.render('edit', { tarefa: tarefa, id: id });
});


app.put('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  const { nome, status } = req.body;
  const tarefaIndex = tarefas.findIndex(tarefa => tarefa.id === parseInt(id));

  if (tarefaIndex === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  
  const tarefaExistente = tarefas.find(tarefa => tarefa.nome === nome);
  if (tarefaExistente && tarefaExistente.id !== parseInt(id)) {
    return res.status(400).json({ error: 'Já existe uma tarefa com esse nome.' });
  }

  
  tarefas[tarefaIndex] = {
    ...tarefas[tarefaIndex],
    nome,
    status
  };

  res.redirect('/tarefas');
});


app.delete('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  const tarefaIndex = tarefas.findIndex(tarefa => tarefa.id === parseInt(id));

  if (tarefaIndex === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  tarefas.splice(tarefaIndex, 1);
  res.redirect('/tarefas');
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
