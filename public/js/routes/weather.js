
start();
async function start () 
{
    const respons=await fetch('/api/weather',{method:"GET"})
    try
    {
        if(respons.ok==false)
        {
            throw new Error("ERROR)");
        }
        const data=await respons.json();
    }
    catch(err)
    {
        console.log(err);
    }
}