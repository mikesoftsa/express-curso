// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server on port ${3000}`)

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

// app.get('/about', (req, res) => {
//     res.send('About')
// })

// app.get('/weather', (req, res) => {
//     res.send('The current weather is Nice')
// })

// app.use((req, res) => {
//     res.status(404).send('No se encontró tu página')
// })

const express = require('express')

const app = express()

app.get('/products', (req, res) => {
    res.send('lista de productos')
})

app.post('/products', (req, res) => {
    res.send('creando productos')
})

app.put('/products', (req, res) => {
    res.send('actualizando un producto')
})

app.delete('/products', (req, res) => {
    res.send('eliminando un producto')
})

app.patch('/products', (req, res) => {
    res.send('actualizando una parte del producto')
})



app.listen(3000)
console.log(`Server on port ${3000}`)
