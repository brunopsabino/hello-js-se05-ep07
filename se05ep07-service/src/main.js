const cfg = require("../knexfile")
const knex = require("knex")(cfg.development)
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())

// Vamos adicionar rotas depois

knex.migrate.latest().then(_ => {
  app.listen(3000, _ => {
    console.log("server online")
  })
})