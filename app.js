const fs=require('fs');
const {exec}=require('child_process');

const express=require('express');
const { title } = require('process');
const { kMaxLength } = require('buffer');
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

    const image=`compiler-${Date.now()}-${Math.random().toString(36).slice(2)}:latest`;
    const program=`program-${Date.now()}-${Math.random().toString(36).slice(2)}.cpp`;


    fs.writeFileSync(`running/${program}`,code);
    exec(`docker build -t ${image} --build-arg FILE=${program} .`,(err,stdout,stderr)=>
    {
        if(fs.existsSync(`running/${program}`))
        {
            fs.unlinkSync(`running/${program}`);
        }
        if(err) 
        {
            res.send(`program.cpp:\n${stderr}`);
            return;
        }
        exec(`docker run --cpus="0.5" --memory="128m" --pids-limit=64 --network=none --read-only --cap-drop=ALL --security-opt=no-new-privileges --rm ${image}`,(err,stdout,stderr)=>
        {
            exec(`docker rmi -f ${image}`,()=>{});
            exec(`docker image prune -f`);
            if(err)
            {
                res.send(`program.cpp:\n${stderr}`);   
                return;
            }
            res.send(stdout);
        });
    });
});

const weather = 
{
    city: "Suceava",
    date: "2025-06-01",
    temperature: 
    {
        current: 19,
        high: 24,
        low: 12,
        feelsLike: 19
    },
    conditions:
    {
        description: "Predominant însorit",
        clouds: true,
        rainProbability: 80,
        precipitation: 
        {
            type: "averse de ploaie",
            amount_mm: 15
        },
        lightnings: true,
        thunderstormRisk: true
    },
    wind: 
    {
        speed_kmh: 29,
        gusts_kmh: 35,
        direction: "SE"
    },
    humidity: 74,
    pressure_hPa: 1018,
    uvIndex: 1,
    dewPoint: 3,
    visibility_km: 16,
    airQuality:
    {
        index: "Moderat",
        description: "Calitate acceptabilă a aerului"
    },
    sun: 
    {
        sunrise: "05:15",
        sunset: "21:05"
    },
    moon: 
    {
        phase: "Lună în descreștere",
        illumination: "47.1%"
    },
    pollen: 
    {
        birch: 0,
        grass: 0,
        ragweed: 0
    },
    alerts: 
    [
        {
            type: "Cod galben",
            issuedBy: "Administraţia Naţională de Meteorologie",
            start: "14:00",
            end: "20:00",
            description: "Averse torențiale, descărcări electrice, intensificări ale vântului (50-70 km/h), vijelii și grindină. Cantități de apă de 15-25 l/mp, izolat până la 40 l/mp."
        }
    ]
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

app.get(`/soon`,(req,res)=>
{
    res.render("routes/soon",{title:"Coming soon"});
});

//////////FALLBACK

app.use((req,res)=>
{
    res.status(404).render('routes/404',{title:"404"});
});