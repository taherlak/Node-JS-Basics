const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('View Engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname+'/views'));

// to put site under maintenance
// app.use((req,res,next) => {
//   res.render('maintenance.hbs');
// });

app.get('/',(req,res) => {
  res.send({
    name : 'Something',
    work : 'Something',
    type : ['Something',
            'Something'
    ]
  });
});

app.get('/about',(req,res) => {
  res.render('about.hbs',{
    name : 'Final exam page',
    course : 'CLRETN'
  });
});

app.get('/home',(req,res)=>{
  res.render('home.hbs',{
    name: 'Welcome Page',
    date : new Date().getFullYear(),
    message : 'Welcome to the Home Page'
  })
})

app.get('/bad',(req,res) => {
  res.send({
    errorMessage : 'Error : Bad request'
  });
});

app.listen(3000,()=>{
  console.log('Server running on port 3000');
});
