(async() => {
    const http = require('http')
    const app = require('./app')

    //BD
    const db = require("./db")
    console.log("Começou!")
    console.log('INSERT INTO PRODUTOS')
    await db.insertProduto({ titulo: "Berma", descricao: "Berma pesada", categoria: "Bermuda"})
    console.log('SELECT * FROM produtos')
    const produtos = await db.selectCustomers()
    console.log(produtos)

    //PORTA
    const port = process.env.PORT || 3000
    const server = http.createServer(app)
    server.listen(port)
})()