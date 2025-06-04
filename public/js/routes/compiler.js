
let cooldown=false;
const runBtn=document.getElementById("runBtn");

function runCode()
{
    if(cooldown==false)
    {
        SendRequest();

        cooldown=true;
        runBtn.style.backgroundColor="gray";
        runBtn.style.cursor = 'not-allowed';

        setTimeout(()=>
        {
            cooldown=false;
            runBtn.style.backgroundColor="#1864ab";
            runBtn.style.cursor = 'pointer';

        },700);
    }
}

async function SendRequest()
{
    const code = document.getElementById('code').value;
    const response = await fetch('/api/compile', 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code:code })
    });


    const result = await response.text();
    document.getElementById('output').textContent = result;
}
