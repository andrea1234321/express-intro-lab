import express from "express"
import { netflixShows } from "./data/netflixshows-data.js"

const app= express()

app.listen(3000, function(){
  console.log("listening on port 3000")
})

// app.get('/', function(req,res){
//   res.send('<h1>hello, friend</h1>')
// })

app.set('view engine', 'ejs')
app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/netflixShows', function(req, res){
  res.render('netflixShows/index', {
    netflixShows: netflixShows
  })
})

app.get('/', function(req,res){
  res.redirect('/netflixShows')
})