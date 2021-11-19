async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/bancodeteste");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectCustomers() {
    const conn = await connect()
    const [rows] = await conn.query("select * FROM produtos;")
    return rows
}

async function insertProduto(produto) {
    const conn = await connect();
    const sql = 'INSERT INTO produtos(titulo, descricao, categoria) VALUES (?, ?, ?);';
    const values = [produto.titulo, produto.descricao, produto.categoria];
    return await conn.query(sql, values);
}

module.exports = {selectCustomers, insertProduto}