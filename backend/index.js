const express = require('express')
const app = express();
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.listen(3000, () => console.log("OK"));

const mysql = require('mysql2/promise');

async function createConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'Share'
  });
  return connection;
}

app.get('/', (req, res) => {
    res.send("Evelin");
})

app.get('/doador', async (req, res) => {
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM doador');
    connection.end();
    return res.status(200).json(rows);
  });
  
  app.get('/doador/:id', async (req, res) => {
    const { id } = req.params;
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM doador WHERE id = ?', [id]);
    connection.end();
    if (rows.length === 0) return res.status(400).json({ mensagem: 'Não encontrado.' });
    return res.status(200).json(rows);
  });
  
  app.post('/doador', async (req, res) => {
    const { nome, cpf, email, telefone, endereco, cep, rua, complemento, cidade, estado } = req.body;
    const connection = await createConnection();
    const [result] = await connection.execute('INSERT INTO doador (nome, cpf, email, telefone, endereco, cep, rua, complemento, cidade, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [nome, cpf, email, telefone, endereco, cep, rua, complemento, cidade, estado]);
    connection.end();
    return res.status(200).json(result);
  });
  
  app.put('/doador/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, email, telefone, endereco, cep, rua, complemento, cidade, estado } = req.body;
    const connection = await createConnection();
    const [updateResult] = await connection.execute('UPDATE doador SET nome = ?, cpf = ?, email = ?, telefone = ?, endereco = ?, cep = ?, rua = ?, complemento = ?, cidade = ?, estado = ? WHERE id = ?',
      [nome, cpf, email, telefone, endereco, cep, rua, complemento, cidade, estado, id]);
    connection.end();
    if (updateResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Doador não encontrado.' });
    return res.status(200).json({ mensagem: 'Doador alterado com sucesso.' });
  });
  
  app.delete('/doador/:id', async (req, res) => {
    const { id } = req.params;
    const connection = await createConnection();
    const [deleteResult] = await connection.execute('DELETE FROM doador WHERE id = ?', [id]);
    connection.end();
    if (deleteResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Doador não encontrado.' });
    return res.status(200).json({ mensagem: 'Doador excluído com sucesso.' });
  });

  // Métodos CRUD para a tabela usuario

// Listar todos os usuários
app.get('/usuario', async (req, res) => {
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM usuario');
    connection.end();
    return res.status(200).json(rows);
  });
  
  // Obter um usuário pelo ID
  app.get('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM usuario WHERE id = ?', [id]);
    connection.end();
    if (rows.length === 0) return res.status(400).json({ mensagem: 'Usuário não encontrado.' });
    return res.status(200).json(rows);
  });
  
  // Criar um novo usuário
  app.post('/usuario', async (req, res) => {
    const { nome, email, senha } = req.body;
    const connection = await createConnection();
    const [result] = await connection.execute('INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha]);
    connection.end();
    return res.status(200).json(result);
  });
  
  // Atualizar um usuário pelo ID
  app.put('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const connection = await createConnection();
    const [updateResult] = await connection.execute('UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id = ?',
      [nome, email, senha, id]);
    connection.end();
    if (updateResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    return res.status(200).json({ mensagem: 'Usuário alterado com sucesso.' });
  });
  
  // Excluir um usuário pelo ID
  app.delete('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const connection = await createConnection();
    const [deleteResult] = await connection.execute('DELETE FROM usuario WHERE id = ?', [id]);
    connection.end();
    if (deleteResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    return res.status(200).json({ mensagem: 'Usuário excluído com sucesso.' });
  });

// Métodos CRUD para a tabela campanhas

// Listar todas as campanhas
app.get('/campanhas', async (req, res) => {
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM campanhas');
    connection.end();
    return res.status(200).json(rows);
  });
  
  // Obter uma campanha pelo ID
  app.get('/campanhas/:id', async (req, res) => {
    const { id } = req.params;
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM campanhas WHERE id = ?', [id]);
    connection.end();
    if (rows.length === 0) return res.status(400).json({ mensagem: 'Campanha não encontrada.' });
    return res.status(200).json(rows);
  });
  
  // Criar uma nova campanha
  app.post('/campanhas', async (req, res) => {
    const { id_usuario, nome, data_inicio, data_termino, descricao, valor_desejado, url_video, url_imagem } = req.body;
    const connection = await createConnection();
    const [result] = await connection.execute('INSERT INTO campanhas (id_usuario, nome, data_inicio, data_termino, descricao, valor_desejado, url_video, url_imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [id_usuario, nome, data_inicio, data_termino, descricao, valor_desejado, url_video, url_imagem]);
    connection.end();
    return res.status(200).json(result);
  });
  
  // Atualizar uma campanha pelo ID
  app.put('/campanhas/:id', async (req, res) => {
    const { id } = req.params;
    const { id_usuario, nome, data_inicio, data_termino, descricao, valor_desejado, url_video, url_imagem } = req.body;
    const connection = await createConnection();
    const [updateResult] = await connection.execute('UPDATE campanhas SET id_usuario = ?, nome = ?, data_inicio = ?, data_termino = ?, descricao = ?, valor_desejado = ?, url_video = ?, url_imagem = ? WHERE id = ?',
      [id_usuario, nome, data_inicio, data_termino, descricao, valor_desejado, url_video, url_imagem, id]);
    connection.end();
    if (updateResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Campanha não encontrada.' });
    return res.status(200).json({ mensagem: 'Campanha alterada com sucesso.' });
  });
  
  // Excluir uma campanha pelo ID
  app.delete('/campanhas/:id', async (req, res) => {
    const { id } = req.params;
    const connection = await createConnection();
    const [deleteResult] = await connection.execute('DELETE FROM campanhas WHERE id = ?', [id]);
    connection.end();
    if (deleteResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Campanha não encontrada.' });
    return res.status(200).json({ mensagem: 'Campanha excluída com sucesso.' });
  });
  
// Métodos CRUD para a tabela doacao

// Listar todas as doações
app.get('/doacao', async (req, res) => {
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM doacao');
    connection.end();
    return res.status(200).json(rows);
  });
  
  // Obter uma doação pelo ID
  app.get('/doacao/:id', async (req, res) => {
    const { id } = req.params;
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM doacao WHERE id = ?', [id]);
    connection.end();
    if (rows.length === 0) return res.status(400).json({ mensagem: 'Doação não encontrada.' });
    return res.status(200).json(rows);
  });
  
  // Criar uma nova doação
  app.post('/doacao', async (req, res) => {
    const { id_doador, id_campanha, valor, data, status, forma_pagamento } = req.body;
    const connection = await createConnection();
    const [result] = await connection.execute('INSERT INTO doacao (id_doador, id_campanha, valor, data, status, forma_pagamento) VALUES (?, ?, ?, ?, ?, ?)',
      [id_doador, id_campanha, valor, data, status, forma_pagamento]);
    connection.end();
    return res.status(200).json(result);
  });
  
  // Atualizar uma doação pelo ID
  app.put('/doacao/:id', async (req, res) => {
    const { id } = req.params;
    const { id_doador, id_campanha, valor, data, status, forma_pagamento } = req.body;
    const connection = await createConnection();
    const [updateResult] = await connection.execute('UPDATE doacao SET id_doador = ?, id_campanha = ?, valor = ?, data = ?, status = ?, forma_pagamento = ? WHERE id = ?',
      [id_doador, id_campanha, valor, data, status, forma_pagamento, id]);
    connection.end();
    if (updateResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Doação não encontrada.' });
    return res.status(200).json({ mensagem: 'Doação alterada com sucesso.' });
  });
  
  // Excluir uma doação pelo ID
  app.delete('/doacao/:id', async (req, res) => {
    const { id } = req.params;
    const connection = await createConnection();
    const [deleteResult] = await connection.execute('DELETE FROM doacao WHERE id = ?', [id]);
    connection.end();
    if (deleteResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Doação não encontrada.' });
    return res.status(200).json({ mensagem: 'Doação excluída com sucesso.' });
  });