import express from 'express'


const app = express() // variável com o express como função
app.use(express.json())

const users = []



// Tipo de rota/método HTTP e Endereço

//Cria um usuário
app.post('/users', (req, res) => {
    users.push(req.body)
    res.status(201).json(req) 
})

//Exibe todos usuários
app.get('/users', (req, res) => {
    res.status(200).json(users)
})


















app.listen(3000)