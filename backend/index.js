const express = require('express')
const app = express();
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.listen(3000, () => console.log("OK"));

const mysql = require('mysql2/promise')
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
})

app.get('/', (req, res) => {
    res.send("Evelin");
})

const getAllPessoas = async () => {
    const [query] = await connection
        .execute('select * from TestePessoa.Pessoa')
    return query;
}

app.get('/pessoa', async (req, res) => {
    const consulta = await getAllPessoas()
    return res.status(200).json(consulta)
})

app.get('/pessoa/:id', async (req, res) => {
    const { id } = req.params;
    const [query] = await connection.execute('select * from TestePessoa.Pessoa where id = ?', [id]);
    if (query.lenght === 0) return res.status(400).json({ mensagem: 'Nao encontrado.' })
    return res.status(200).json(query);
})

app.post('/pessoa', async (req, res) => {
    const { nome, email } = req.body
    const [query] = await connection.execute('insert into TestePessoa.Pessoa (nome,email) values(?,?)', [nome, email])
    return res.status(200).json(query)
})

app.get('/pessoa/:nome', async (req, res) => {
    const { nome } = req.params;
    const [query] = await connection.execute('select * from TestePessoa.Pessoa where nome = ?', [nome]);
    if (query.lenght === 0) return res.status(400).json({ mensagem: 'Nao encontrado.' })
    return res.status(200).json(query);
})

app.put('/pessoa/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    const [updateResult] = await connection.execute('UPDATE TestePessoa.Pessoa SET nome = ?, email = ? WHERE id = ?', [nome, email, id]);
    if (updateResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Pessoa não encontrada.' });
    return res.status(200).json({ mensagem: 'Pessoa alterada com sucesso.' });
})

app.delete('/pessoa/:id', async (req, res) => {
    const { id } = req.params;
    const [deleteResult] = await connection.execute('DELETE FROM TestePessoa.Pessoa WHERE id = ?', [id]);
    if (deleteResult.affectedRows === 0) return res.status(404).json({ mensagem: 'Pessoa não encontrada.' });
    return res.status(200).json({ mensagem: 'Pessoa excluída com sucesso.' });
})