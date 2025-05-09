const express=require('express');
const app=express();

app.set('view engine','ejs');

app.listen(2000,'0.0.0.0');
console.log("Listening for requests on port 3000...");

app.use(express.static('public'));

app.get('/',(req,res)=>
{
    res.render('home',{title:"TheName"});
});

app.get('/compiler',(req,res)=>
{
    res.render('compiler',{title:"Compiler"});
});

app.get('/lectii',(req,res)=>
{
    res.render('lectii',{title:"Lectii"});
});

app.get('/lectii/1',(req,res)=>
{
    res.render('lectii_1',{title:"Lectia 1"});
});

app.get('/lectii/2',(req,res)=>
{
    res.render('lectii_2',{title:"Lectia 2"});
});

app.get('/lectii/3',(req,res)=>
{
    res.render('lectii_3',{title:"Lectia 3"});
});

app.use((req,res)=>
{
    res.status(404).render('404',{title:"404"});
});
