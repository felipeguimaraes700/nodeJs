const express = require('express')
const app = express();

app.set("view engine", "ejs")

app.get("/", function (req, res){
    const items = [
        {
            title: "D",
            message:"esenvolver aplicações/ serviços de forma fácil"
        },
        {
            title: "E",
            message:"screver rapidamente"
        },
        {
            title: "M",
            message:"uita dedicação"
        },
        {
            title: "A",
            message:"ssociar oportunidades"
        },
        {
            title: "I",
            message:"maginação aplicada"
        },
        {
            title: "S",
            message:"abadoria desenvolvida"
        }
    ]

    const subtitle ="uma linguagem de modelagem para criação de páginas HTML utilizando javascript"

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,})
})

app.get("/sobre", function (req, res){
    res.render("pages/about")
})

app.listen(8080)
console.log('servidor ligado')