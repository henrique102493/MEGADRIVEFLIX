const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')


//CONFIGURANDO BODY-PARSER
app.use(bodyparser.urlencoded({extend:false}))
app.use(bodyparser.json())

//configurando ejs
app.set('view engine','ejs')

//configurando arquivos staticos
app.use(express.static('public'))

//rota principal
app.get('/',(req , res)=>{
    res.render('index')
})

//rota home
app.get('/home', (req , res)=>{
})

//iniciando o seridor

app.listen(port , ()=>{
    console.log('Servidor Online!')

})
