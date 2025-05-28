getMeteo();
async function getMeteo() 
{
    const response=await fetch("/api/weather");
    try
    {
        if(!response.ok)
        {
            throw new Error("Nu sa potut extrage din API")
        }

        const data=await response.json();
        console.log(data.city);
        console.log(data.temperature);
        console.log(data.rainProbability);
    }
    catch(err)
    {
        console.error(err);
    }
}