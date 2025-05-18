var teoryText = document.getElementById("teoryText");
var teoryTitle = document.getElementById("teoryTitle");
var teorySubtitle = document.getElementById("teorySubtitle");
var previousButton = document.getElementById("previousButton");
var nextButton = document.getElementById("nextButton");
var teoryCard = document.getElementById("teoryCard");


function nextTeory()
{
    switch (teoryTitle.textContent)
    {
        case "Card 1":
            teoryText.innerHTML="Vom folosi un vector caracteristic pe care îl marcăm inițial <code>ciur[0]=ciur[1]=1</code>, deoarece aceste două numere nu sunt <code>prime</code>. Pentru numărul 2 vom avea <code>ciur[2]=0</code> și apoi vom marca cu 1 toate numerele pare mai mari sau egale decât 4( adică toți multiplii lui 2). În continuare ne vom ocupa doar de numerele <code>impare</code> mai mari sau egale cu 3.";
            teoryTitle.textContent="Card 2";
            teorySubtitle.textContent="Vectorul caracteristic";
            previousButton.style.backgroundColor ='#1864ab';
            previousButton.style.cursor = 'pointer';
            break;

        case "Card 2":
            teoryCard.style.height = "1070px";
            teoryText.innerHTML="<pre><code>#include <iostream> <br>using namespace std;<br><br>int ciur[1000003],N // Determinăm numerele prime mai mici decât un milion <br><br>int main()<br>{<br>   int i,j;<br>   cin>>N;<br>   ciur[0]=ciur[1]=1;<br><br>   //Marcăm cu 1 (nu sunt prime) toate numerele pare >= 4<br>   for(i=4;i<=N;i=i+2)<br>   {<br>      ciur[i] = 1;<br>   }<br><br>   //Parcurgem numerele impare >=3<br>   for(i=3;i<=N;i=i+2)<br>   {<br>      if(ciur[i]==0) //i este prim,dar multiplii săi nu<br>      {<br>         for(j=2*i;j<=N;j=j+1)<br>         {<br>            ciur[j] = 1;<br>         }<br>      }<br>   }<br><br>   for(i=0;i<=N;i++)<br>   {<br>      if(ciur[i]==0)<br>      {<br>         cout&lt;&lt;i&lt;&lt;' ';<br>      }<br>   }<br>   return 0;<br>}</code></pre>";                                                                                                                                      
            teoryTitle.textContent="Card 3";
            teorySubtitle.textContent="Cod neoptimizat";

            break;

        case "Card 3":
            teoryCard.style.height = "200px";
            teoryText.innerHTML="Dacă N = 100 vom observa că avem afișate 25 de numere prime și anume <code>2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89</code> și <code>97</code>. De asemenea observăm că numerele prime sunt <code>impare</code> și că numărul 2 este singurul număr <code>par</code> prim. Acest lucru se datorează faptului că toate numerele <code>pare</code> mai mari decât 2 sunt multiplii lui 2 și deci nu pot fi prime.";
            teoryTitle.textContent="Card 4";
            teorySubtitle.textContent="Observație";
            break;
            
        case "Card 4":
            teoryText.innerHTML="Algoritmul anterior (Card 2) nu este optim si pentru a crește timpul de execuție vom face câteva <code>modificări</code>. Observăm că dacă <code>i=5</code> primul multiplu marcat va fi 10, dar acesta a mai fost odată marcat și din acest motiv vom selecta doar multiplii <code>impari : 15, 25, 35</code>  ș.a.m.d.  având pasul 10 (dublul lui i)";
            teoryTitle.textContent="Card 5";
            teorySubtitle.textContent="Optimizare";
            break;

        case "Card 5":
            teoryCard.style.height = "1070px";
            teoryText.innerHTML="<pre><code>#include <iostream> <br>using namespace std;<br><br>int ciur[1000003],N // Determinăm numerele prime mai mici decât un milion <br><br>int main()<br>{<br>   int i,j;<br>   cin>>N;<br>   ciur[0]=ciur[1]=1;<br><br>   //Marcăm cu 1 (nu sunt prime) toate numerele pare >= 4<br>   for(i=4;i<=N;i=i+2)<br>   {<br>      ciur[i] = 1;<br>   }<br><br>   //Parcurgem numerele impare >=3<br>   for(i=3;i<=N;i=i+2)<br>   {<br>      if(ciur[i]==0) //i este prim,dar multiplii săi nu<br>      {<br>         for(j=3*i;j<=N;j=j+2*i) //Pasul va fi dublul lui i<br>         {<br>            ciur[j] = 1;<br>         }<br>      }<br>   }<br><br>   for(i=0;i<=N;i++)<br>   {<br>      if(ciur[i]==0)<br>      {<br>         cout&lt;&lt;i&lt;&lt;' ';<br>      }<br>   }<br>   return 0;<br>}</code></pre>";
            teoryTitle.textContent="Card 6";
            teorySubtitle.textContent="Cod semi-optimizat";
            break;
        
        case "Card 6":
            teoryCard.style.height = "200px";
            teoryText.innerHTML="<ul><li>Pentru 5:multiplul 15 a mai fost marcat și când <code>i=3</code> ,15 fiind și multiplu de 3.</li><li>Pentru 7:Multiplu 21 și el a fost marcat când <code>i=3<code> la fel ca și numărul 35 care este multiplu de 3 ,a fost marcat deja când i=3.</code>.</li></ul>";
            teoryTitle.textContent="Card 7";
            teorySubtitle.textContent="Observație";
            break;
        
        case "Card 7":
            teoryText.innerHTML="Încercăm să optimizăm și mai mult algoritmul. Observăm că pentru a marca multiplii lui <code>i</code> nu este necesar să parcurgem toți multiplii lui <code>i</code> ci doar pe cei care sunt mai mari decât <code>i*i</code>. De exemplu pentru 5, 25 este primul multiplu care nu a fost marcat și care este mai mare decât 5*5=25. De asemenea pentru 7,49 este primul multiplu care nu a fost marcat și care este mai mare decât 7*7=49.";
            teoryTitle.textContent="Card 8";
            teorySubtitle.textContent="Optimizare";
            break;

        case "Card 8":
            teoryText.innerHTML="<pre><code>#include <iostream> <br>using namespace std;<br><br>int ciur[1000003],N // Determinăm numerele prime mai mici decât un milion <br><br>int main()<br>{<br>   int i,j;<br>   cin>>N;<br>   ciur[0]=ciur[1]=1;<br><br>   //Marcăm cu 1 (nu sunt prime) toate numerele pare >= 4<br>   for(i=4;i<=N;i=i+2)<br>   {<br>      ciur[i] = 1;<br>   }<br><br>   //Parcurgem numerele impare >=3<br>   for(i=3;i*i<=N;i=i+2)<br>   {<br>      if(ciur[i]==0) //i este prim,dar multiplii săi nu<br>      {<br>         for(j=i*i;j<=N;j=j+2*i) //Pasul va fi dublul lui i<br>         {<br>            ciur[j] = 1;<br>         }<br>      }<br>   }<br><br>   for(i=0;i<=N;i++)<br>   {<br>      if(ciur[i]==0)<br>      {<br>         cout&lt;&lt;i&lt;&lt;' ';<br>      }<br>   }<br>   return 0;<br>}</code></pre>";
            teoryCard.style.height = "1070px";
            teoryTitle.textContent="Card 9";
            teorySubtitle.textContent="Cod optimizat";
            break;

        case "Card 9":
            teoryCard.style.height = "200px";
            teoryTitle.textContent="Card 10";
            teorySubtitle.textContent="Ultimă observație";
            teoryText.innerHTML="Complexitatea algoritmului este <code>O( N * log2( log2 (N))</code>, adică <code>O( N * log( log(N))</code>. De exemplu dacă <code>N=1000000</code> atunci adică <code>4*N</code> pași.";
            nextButton.style.backgroundColor ='gray';
            nextButton.style.cursor = 'not-allowed';
            

    }

}

function previousTeory()
{
    switch (teoryTitle.textContent)
    {
        case "Card 10":
            teoryCard.style.height = "1070px";
            teoryText.innerHTML="<pre><code>#include <iostream> <br>using namespace std;<br><br>int ciur[1000003],N // Determinăm numerele prime mai mici decât un milion <br><br>int main()<br>{<br>   int i,j;<br>   cin>>N;<br>   ciur[0]=ciur[1]=1;<br><br>   //Marcăm cu 1 (nu sunt prime) toate numerele pare >= 4<br>   for(i=4;i<=N;i=i+2)<br>   {<br>      ciur[i] = 1;<br>   }<br><br>   //Parcurgem numerele impare >=3<br>   for(i=3;i*i<=N;i=i+2)<br>   {<br>      if(ciur[i]==0) //i este prim,dar multiplii săi nu<br>      {<br>         for(j=i*i;j<=N;j=j+2*i) //Pasul va fi dublul lui i<br>         {<br>            ciur[j] = 1;<br>         }<br>      }<br>   }<br><br>   for(i=0;i<=N;i++)<br>   {<br>      if(ciur[i]==0)<br>      {<br>         cout&lt;&lt;i&lt;&lt;' ';<br>      }<br>   }<br>   return 0;<br>}</code></pre>";
            teoryTitle.textContent="Card 9";
            teorySubtitle.textContent="Cod optimizat";
            nextButton.style.backgroundColor ='#1864ab';
            nextButton.style.cursor = 'pointer';
            break;

        case "Card 9":
            teoryCard.style.height = "200px";
            teoryText.innerHTML="Încercăm să optimizăm și mai mult algoritmul. Observăm că pentru a marca multiplii lui <code>i</code> nu este necesar să parcurgem toți multiplii lui <code>i</code> ci doar pe cei care sunt mai mari decât <code>i*i</code>. De exemplu pentru 5, 25 este primul multiplu care nu a fost marcat și care este mai mare decât 5*5=25. De asemenea pentru 7,49 este primul multiplu care nu a fost marcat și care este mai mare decât 7*7=49.";
            teoryTitle.textContent="Card 8";
            teorySubtitle.textContent="Optimizare";
            break;

        case "Card 8":
            teoryText.innerHTML="Pentru 5:multiplul 15 a mai fost marcat și când <code>i=3</code> ,15 fiind și multiplu de 3.</li><li>Pentru 7:Multiplu 21 și el a fost marcat când <code>i=3<code> la fel ca și numărul 35 care este multiplu de 3 ,a fost marcat deja când i=3.</code>.";
            teoryTitle.textContent="Card 7";
            teorySubtitle.textContent="Observație";
            break;

        case "Card 7":
            teoryCard.style.height = "1070px";
            teoryText.innerHTML="<pre><code>#include <iostream> <br>using namespace std;<br><br>int ciur[1000003],N // Determinăm numerele prime mai mici decât un milion <br><br>int main()<br>{<br>   int i,j;<br>   cin>>N;<br>   ciur[0]=ciur[1]=1;<br><br>   //Marcăm cu 1 (nu sunt prime) toate numerele pare >= 4<br>   for(i=4;i<=N;i=i+2)<br>   {<br>      ciur[i] = 1;<br>   }<br><br>   //Parcurgem numerele impare >=3<br>   for(i=3;i<=N;i=i+2)<br>   {<br>      if(ciur[i]==0) //i este prim,dar multiplii săi nu<br>      {<br>         for(j=3*i;j<=N;j=j+2*i) //Pasul va fi dublul lui i<br>         {<br>            ciur[j] = 1;<br>         }<br>      }<br>   }<br><br>   for(i=0;i<=N;i++)<br>   {<br>      if(ciur[i]==0)<br>      {<br>         cout&lt;&lt;i&lt;&lt;' ';<br>      }<br>   }<br>   return 0;<br>}</code></pre>";
            teoryTitle.textContent="Card 6";
            teorySubtitle.textContent="Cod semi-optimizat";
            break;

        case "Card 6":
            teoryCard.style.height = "200px";
            teoryText.innerHTML="Algoritmul anterior (Card 2) nu este optim si pentru a crește timpul de execuție vom face câteva <code>modificări</code>. Observăm că dacă <code>i=5</code> primul multiplu marcat va fi 10, dar acesta a mai fost odată marcat și din acest motiv vom selecta doar multiplii <code>impari : 15, 25, 35</code>  ș.a.m.d.  având pasul 10 (dublul lui i)";
            teoryTitle.textContent="Card 5";
            teorySubtitle.textContent="Optimizare";
            break;

        case "Card 5":
            teoryText.innerHTML="Dacă N = 100 vom observa că avem afișate 25 de numere prime și anume <code>2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89</code> și <code>97</code>. De asemenea observăm că numerele prime sunt <code>impare</code> și că numărul 2 este singurul număr <code>par</code> prim. Acest lucru se datorează faptului că toate numerele <code>pare</code> mai mari decât 2 sunt multiplii lui 2 și deci nu pot fi prime.";
            teoryTitle.textContent="Card 4";
            teorySubtitle.textContent="Observație";
            break;

        case "Card 4":  
            teoryCard.style.height = "1070px";
            teoryText.innerHTML="<pre><code>#include <iostream> <br>using namespace std;<br><br>int ciur[1000003],N // Determinăm numerele prime mai mici decât un milion <br><br>int main()<br>{<br>   int i,j;<br>   cin>>N;<br>   ciur[0]=ciur[1]=1;<br><br>   //Marcăm cu 1 (nu sunt prime) toate numerele pare >= 4<br>   for(i=4;i<=N;i=i+2)<br>   {<br>      ciur[i] = 1;<br>   }<br><br>   //Parcurgem numerele impare >=3<br>   for(i=3;i<=N;i=i+2)<br>   {<br>      if(ciur[i]==0) //i este prim,dar multiplii săi nu<br>      {<br>         for(j=2*i;j<=N;j=j+1)<br>         {<br>            ciur[j] = 1;<br>         }<br>      }<br>   }<br><br>   for(i=0;i<=N;i++)<br>   {<br>      if(ciur[i]==0)<br>      {<br>         cout&lt;&lt;i&lt;&lt;' ';<br>      }<br>   }<br>   return 0;<br>}</code></pre>";                                                                                                                                      
            teoryTitle.textContent="Card 3";
            teorySubtitle.textContent="Cod neoptimizat";
            break;

        case "Card 3":  
            teoryCard.style.height = "200px";
            teoryText.innerHTML="Vom folosi un vector caracteristic pe care îl marcăm inițial <code>ciur[0]=ciur[1]=1</code>, deoarece aceste două numere nu sunt <code>prime</code>. Pentru numărul 2 vom avea <code>ciur[2]=0</code> și apoi vom marca cu 1 toate numerele pare mai mari sau egale decât 4( adică toți multiplii lui 2). În continuare ne vom ocupa doar de numerele <code>impare</code> mai mari sau egale cu 3.";
            teoryTitle.textContent="Card 2";
            teorySubtitle.textContent="Vectorul caracteristic";
            break;

        case "Card 2":
            teoryCard.style.height = "200px";
            teoryText.innerHTML="Se utilizează pentru a determină toate numerele <code>prime</code> mai mici sau egale cu <code>N</code>. Prin definiție un număr <code>x</code> este <code>prim</code> dacă și numai dacă are doar doi divizori. Numărul 2 este primul număr prim, și este <code>singurul</code> număr par prim.";
            teoryTitle.textContent="Card 1";
            teorySubtitle.textContent="Începutul";
            previousButton.style.backgroundColor ='gray';
            previousButton.style.cursor = 'not-allowed';
            break;
        
    }
}






const gridContainer = document.getElementById('grid');
const max = 150;

function createGrid() {
    gridContainer.innerHTML = '';
    for (let i = 1; i <= max; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = 'cell-' + i;
        cell.textContent = i;
        gridContainer.appendChild(cell);
    }
}

function highlight(num, type) {
    setTimeout(() => {
        const cell = document.getElementById('cell-' + num);
        if (cell) {
            cell.classList.add(type);
        }
    }, 15 * num); // mai rapid pentru 200 numere
}

function runCode() {
    createGrid();
    highlight(1, 'eliminated');
    const code = document.getElementById('code').value;
    try {
        const func = new Function('highlight', code + '\nciur(' + max + ');');
        func(highlight);
    } catch (e) {
        alert('Eroare în cod: ' + e.message);
    }
}

function RunButtonPressed()
{
    const btn =document.getElementById('runBtn');
    btn.disabled = true;
    btn.style.cursor = 'not-allowed';
    btn.style.backgroundColor = 'gray';

    runCode();
    
    setTimeout(()=>{
        btn.disabled = false;
        btn.style.cursor = 'pointer';
        btn.style.backgroundColor = '#1864ab';
    }, 3000);
}

createGrid(); 



