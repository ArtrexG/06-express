const express = require('express')
const app = express()
const hbs = require('hbs');

const port = process.env.PORT || 3000
app.set('view engine', 'hbs');
 
app.use(express.static(__dirname+'/public'));
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar',(texto)=>{
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() +palabra.slice(1).toLowerCase();
        
    });
    return palabras.join(' ');
})
app.get('/',  (req, res)=> {
  
  res.render('home',{
      name: 'arturo',
      
  });
  
  
})
app.get('/about',  (req, res)=> {
    
    res.render('about')
    
    console.log('hi')
})

 
app.listen(port,()=>{
    console.log(`Escichando puerto ${port}`)
})