// // const http = require('http')
// // const fs = require('fs')

// // const server = http.createServer((req, res) => {
// //     const read = fs.createReadStream('./static/index.html')
// //     read.pipe(res)
// // })

// // server.listen(3000)
// // console.log(`Server on port ${3000}`)

// // app.get('/', (req, res) => {
// //     res.send('Hello world')
// // })

// // app.get('/about', (req, res) => {
// //     res.send('About')
// // })

// // app.get('/weather', (req, res) => {
// //     res.send('The current weather is Nice')
// // })

// // app.use((req, res) => {
// //     res.status(404).send('No se encontró tu página')
// // })

// const express = require('express')

// const app = express()

// app.get('/products', (req, res) => {
//     res.send('lista de productos')
// })

// app.post('/products', (req, res) => {
//     res.send('creando productos')
// })

// app.put('/products', (req, res) => {
//     res.send('actualizando un producto')
// })

// app.delete('/products', (req, res) => {
//     res.send('eliminando un producto')
// })

// app.patch('/products', (req, res) => {
//     res.send('actualizando una parte del producto')
// })

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

// app.get('/miarchivo', (req, res) => {
//     res.sendFile('./javascript.png', {
//         root: __dirname
//     })
// })

// app.get('/user', (req, res) => {
//     res.json({
//         "name": "mike",
//         "lastname": "ray",
//         "age": 40,
//         "points": [1, 2, 3],
//         "address": {
//             "city": "new york",
//             "street": "some street 123"
//         }
//     })
// })


// app.get('/isAlive', (req, res) => {
//     res.sendStatus(204)
// })



// app.listen(3000)
// console.log(`Server on port ${3000}`)

// const express = require("express");

// const app = express();

// app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// app.post('/user', (req, res) => {
//     console.log(req.body)
//     res.send('Nuevo usuario creado')
// })

// app.listen(3000);
// console.log(`Server on port ${3000}`)

const express = require("express");

const app = express();

app.get('/hello/:username', (req, res) => {

    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
    console.log(req.params.x)
    console.log(req.params.y)

    const { x, y } = req.params

    const result = parseInt(x) + parseInt(y)
    console.log(result)

    res.send(`Rresult: ${result}`)
})

app.get('/user/:username/photo', (req, res) => {
    if (req.params.username === 'mike') {
        return res.sendFile('./javascript.png', { root: __dirname })
    }

    res.send('el usuario no tiene acceso')
})

app.get('/nombre/:nombre/age/:age', (req, res) => {
    res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`)
})



app.listen(3000);
console.log(`Server on port ${3000}`)
