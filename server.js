import express from "express"

const app= express()

app.listen(3000, function(){
  console.log("listening on port 3000")
})

app.get('/', function(req,res){
  res.send('<h1>hello, friend</h1>')
})

app.set('view engine', 'ejs')
app.get('/home', function(req, res) {
  res.render('home')
})