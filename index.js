const express = require('express')
const app = express()

const ms = require('ms')

var startTime;

app.get("/api", (req, res) => res.json({
    up: "!"
}))

app.get("/api/uptime", (req, res) => res.json({
    uptime: ms(Date.now() - startTime, {long: true})
}))

app.listen(process.env.PORT || 80, () => {
    startTime = Date.now();
})