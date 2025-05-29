const fs=require('fs');
const {exec}=require('child_process');

const express=require('express');
const app=express();

app.set('view engine','ejs');

app.listen(2100,'0.0.0.0',()=>
{
    console.log("Listening for requests on port 2100...");
});

app.use(express.static('public'));
app.use(express.json());

//////////API

app.post('/api/compile',(req,res)=>
{
    const code=req.body.code;
    const image=`compiler-${Date.now()}:latest`;
    const cppfile=`program-${Date.now()}.cpp`;


    fs.writeFileSync(cppfile,code);
    exec(`docker build --build-arg cppfile=${cppfile} -t ${image} .`,(err,stdout,stderr)=>
    {
        if(err)
        {
            res.send(`program.cpp:\n${stderr}`);
            if(fs.existsSync(cppfile))
            {
                fs.unlinkSync(cppfile);
            }
            return;
        }
        if(fs.existsSync(cppfile))
        {
            fs.unlinkSync(cppfile);
        }
        exec(`docker run --rm ${image}`,(err,stdout,stderr)=>
        {
            if(err)
            {
                res.send(`program.cpp:\n${stderr}`);
                exec(`docker rmi -f ${image}`);
                return;
            }
            res.send(stdout);
            exec(`docker rmi -f ${image}`);  
        });
    });
});

const weather=
{
    "city":"Suceava",
    "temperature":30,
    "rainProbability":80,
    "clouds":true,
    "lightnings":true,
    "danger":1
};

app.get('/api/weather',(req,res)=>
{
    res.json(weather);
});

//////////Routes

app.get('/',(req,res)=>
{
    res.render('routes/home',{title:"MNDCode"});
});

app.get('/compiler',(req,res)=>
{
    res.render('routes/compiler',{title:"Compiler"});
});

//Hard Lessons

app.get('/hard_lessons', (req, res) => {
    res.render('hard_lessons/hard_lessons', { title: "Hard Lessons" });
});

app.get('/hard_lessons/1',(req,res)=>
{
    res.render('hard_lessons/hard_lessons__1',{title:"Hard Lesson 1"});
});

app.get('/hard_lessons/2',(req,res)=>
{
    res.render('hard_lessons/hard_lessons__2',{title:"Hard Lesson 2"});
});

app.get('/hard_lessons/3',(req,res)=>
{
    res.render('hard_lessons/hard_lessons__3',{title:"Hard Lesson 3"});
});

//Languages

app.get('/languages/c',(req,res)=>
{
    res.render('languages/c',{title:"C"});
});

app.get('/languages/cpp',(req,res)=>
{
    res.render('languages/cpp',{title:"CPP"});
});

app.get('/languages/cs',(req,res)=>
{
    res.render('languages/cs',{title:"CS"});
});

app.get('/languages/go',(req,res)=>
{
    res.render('languages/go',{title:"GO"});
});

app.get('/languages/java',(req,res)=>
{
    res.render('languages/java',{title:"JAVA"});
});

//////////FALLBACK

app.use((req,res)=>
{
    res.status(404).render('routes/404',{title:"404"});
});