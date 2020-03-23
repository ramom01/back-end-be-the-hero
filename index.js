const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send('Projeto criado!')
})

app.listen(3333)