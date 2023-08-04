const express = require('express')
const { Client } = require('pg')
const app = express()
const postgres = require('postgres')

const sql = postgres("postgres://john310897:Gc2DXjI1ROqw@ep-aged-dew-06191585.ap-southeast-1.aws.neon.tech/neondb", { ssl: 'require' });

async function getPgVersion() {
    const result = await sql`select * from registration`;
    console.log(result);
}

getPgVersion();






app.get('/', function (req, res) {
    res.send("Welocme to GeeksforGeeks!");
});
app.listen(5000)