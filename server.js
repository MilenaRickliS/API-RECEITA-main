const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path')

app.use(express.static(path.join(__dirname)))

app.get('/api/recipes', (req, res)=>{
    res.sendFile(path.join(__dirname, 'receitas.json'))
})

app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
