async function runCode() 
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