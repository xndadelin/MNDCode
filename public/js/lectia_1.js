var teoryText = document.getElementById("teoryText");
var teoryTitle = document.getElementById("teoryTitle");
var teorySubtitle = document.getElementById("teorySubtitle");
var previousButton = document.getElementById("previousButton");
var nextButton = document.getElementById("nextButton");
var teoryCard = document.getElementById("teoryCard");
var code=document.getElementById("code");
var codeh2=document.getElementById("codeh2");


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
            codeh2.textContent="Optimizare 1";
            code.textContent=
`#include  
using namespace std;

int ciur[1000003],N // Determinăm numerele prime mai mici decât un milion 

int main()
{
   int i,j;
   cin>>N;
   ciur[0]=ciur[1]=1;

   //Marcăm cu 1 (nu sunt prime) toate numerele pare >= 4
   for(i=4;i<=N;i=i+2)
   {
      ciur[i] = 1;
   }

   //Parcurgem numerele impare >=3
   for(i=3;i<=N;i=i+2)
   {
      if(ciur[i]==0) //i este prim,dar multiplii săi nu
      {
         for(j=2*i;j<=N;j=j+1)
         {
            ciur[j] = 1;
         }
      }
   }

   for(i=0;i<=N;i++)
   {
      if(ciur[i]==0)
      {
         cout<<i<<' ';
      }
   }
   return 0;
}`;

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
            codeh2.textContent="Optimizare 2"
            code.textContent=
`#include  
using namespace std;
                <h2 id="codeh2">Code</h2>

int ciur[1000003],N // Determinăm numerele prime mai mici decât un milion 

int main()
{
   int i,j;
   cin>>N;
   ciur[0]=ciur[1]=1;

   //Marcăm cu 1 (nu sunt prime) toate numerele pare >= 4
   for(i=4;i<=N;i=i+2)
   {
      ciur[i] = 1;
   }

   //Parcurgem numerele impare >=3
   for(i=3;i<=N;i=i+2)
   {
      if(ciur[i]==0) //i este prim,dar multiplii săi nu
      {
         for(j=3*i;j<=N;j=j+2*i) //Pasul va fi dublul lui i
         {
            ciur[j] = 1;
         }
      }
   }

   for(i=0;i<=N;i++)
   {
      if(ciur[i]==0)
      {
         cout<<i<<' ';
      }
   }
   return 0;
}`;
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
            codeh2.textContent="Optimizare 3"
            code.textContent=
`
#include  
using namespace std;

int ciur[1000003],N // Determinăm numerele prime mai mici decât un milion 

int main()
{
   int i,j;
   cin>>N;
   ciur[0]=ciur[1]=1;

   //Marcăm cu 1 (nu sunt prime) toate numerele pare >= 4
   for(i=4;i<=N;i=i+2)
   {
      ciur[i] = 1;
   }

   //Parcurgem numerele impare >=3
   for(i=3;i*i<=N;i=i+2)
   {
      if(ciur[i]==0) //i este prim,dar multiplii săi nu
      {
         for(j=i*i;j<=N;j=j+2*i) //Pasul va fi dublul lui i
         {
            ciur[j] = 1;
         }
      }
   }

   for(i=0;i<=N;i++)
   {
      if(ciur[i]==0)
      {
         cout<<i<<' ';
      }
   }
   return 0;
}`;
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
            codeh2.textContent="Optimizare 2";
            code.textContent=
`
#include  
using namespace std;

int ciur[1000003],N // Determinăm numerele prime mai mici decât un milion 

int main()
{
   int i,j;
   cin>>N;
   ciur[0]=ciur[1]=1;

   //Marcăm cu 1 (nu sunt prime) toate numerele pare >= 4
   for(i=4;i<=N;i=i+2)
   {
      ciur[i] = 1;
   }

   //Parcurgem numerele impare >=3
   for(i=3;i<=N;i=i+2)
   {
      if(ciur[i]==0) //i este prim,dar multiplii săi nu
      {
         for(j=3*i;j<=N;j=j+2*i) //Pasul va fi dublul lui i
         {
            ciur[j] = 1;
         }
      }
   }

   for(i=0;i<=N;i++)
   {
      if(ciur[i]==0)
      {
         cout<<i<<' ';
      }
   }
   return 0;
}
`;
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
            codeh2.textContent="Optimizare 1";
            code.textContent=
`
#include  
using namespace std;

int ciur[1000003],N // Determinăm numerele prime mai mici decât un milion 

int main()
{
   int i,j;
   cin>>N;
   ciur[0]=ciur[1]=1;

   //Marcăm cu 1 (nu sunt prime) toate numerele pare >= 4
   for(i=4;i<=N;i=i+2)
   {
      ciur[i] = 1;
   }

   //Parcurgem numerele impare >=3
   for(i=3;i<=N;i=i+2)
   {
      if(ciur[i]==0) //i este prim,dar multiplii săi nu
      {
         for(j=2*i;j<=N;j=j+1)
         {
            ciur[j] = 1;
         }
      }
   }

   for(i=0;i<=N;i++)
   {
      if(ciur[i]==0)
      {
         cout<<i<<' ';
      }
   }
   return 0;
}
`
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
let intervalId;

function createGrid(max) {
    gridContainer.innerHTML = '';
    for (let i = 1; i <= max; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = 'cell-' + i;
        cell.textContent = i;
        gridContainer.appendChild(cell);
    }
}

function clearAllHighlights(N) {
    for (let i = 1; i <= N; i++) {
        const cell = document.getElementById('cell-' + i);
        if (cell) {
            cell.classList.remove('eliminated');
            cell.style.backgroundColor = '#69db7c'; // verde
        }
    }

    const cell1 = document.getElementById('cell-1');
    if (cell1) {
        cell1.classList.add('eliminated');
        cell1.style.backgroundColor = '#fa5252'; // roșu
    }
}

function sieveAnimated(N) {
    // Dacă e deja un interval activ, îl oprim
    if (intervalId) {
        clearInterval(intervalId);
    }

    const isPrime = Array(N + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    let p = 2;
    let multiple = 2 * p;

    intervalId = setInterval(() => {
        while (p <= N && !isPrime[p]) {
            p++;
            multiple = p * 2;
        }

        if (p > N) {
            clearInterval(intervalId);
            intervalId = null;
            return;
        }

        if (multiple > N) {
            p++;
            multiple = p * 2;
            return;
        }

        if (isPrime[multiple]) {
            isPrime[multiple] = false;
            const cell = document.getElementById('cell-' + multiple);
            if (cell) cell.classList.add('eliminated');
        }

        multiple += p;
    }, 100);
}

function runCode() {
    const N = parseInt(document.getElementById('NInput').value);
    if (isNaN(N) || N < 2 || N > 150) {
        alert('Introdu un număr între 2 și 150.');
        return;
    }

    // Resetăm orice animație anterioară
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }

    createGrid(N);
    clearAllHighlights(N);
    sieveAnimated(N);
}

function RunButtonPressed() {
    const btn = document.getElementById('runBtn');
    btn.disabled = true;
    btn.style.cursor = 'not-allowed';
    btn.style.backgroundColor = 'gray';

    runCode();

    setTimeout(() => {
        btn.disabled = false;
        btn.style.cursor = 'pointer';
        btn.style.backgroundColor = '#1864ab';
    }, 1000);
}


















let currentStep = 0;
let steps = [];
let N = 100;
let marked = [];
let isAnimating = false;
let timeouts = [];

function getN() {
    const val = parseInt(document.getElementById("NInput").value);
    return isNaN(val) ? 150 : Math.min(Math.max(val, 2), 150);
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2)
        if (n % i === 0) return false;
    return true;
}

function clearAllTimeouts() {
    for (let t of timeouts) clearTimeout(t);
    timeouts = [];
    isAnimating = false;
}

function generateSteps() {
    clearAllTimeouts();
    N = getN();
    currentStep = 0;
    marked = Array(N + 1).fill(true);
    marked[0] = marked[1] = false;

    const container = document.getElementById("stepsContainer");
    container.innerHTML = '';

    steps = [];
    for (let p = 2; p <= Math.sqrt(N); p++) {
        if (isPrime(p)) steps.push(p);
    }

    steps.forEach((p) => {
        const row = document.createElement("div");
        row.className = "stepRow";
        row.id = "row-" + p;
        row.style.marginBottom = "32px";

        for (let i = 0; i <= N; i++) {
            const box = document.createElement("div");
            box.className = "cellBox";
            box.id = `p${p}-cell-${i}`;

            const value = document.createElement("span");
            value.textContent = "1";

            box.appendChild(document.createTextNode(i));
            box.appendChild(value);
            row.appendChild(box);
        }

        container.appendChild(row);
    });

    updateButtons();
}

function applyStep(p, callback) {
    let i = p * 2;
    isAnimating = true;

    // Colorează primii deja marcați
    for (let j = 0; j <= N; j++) {
        const cell = document.getElementById(`p${p}-cell-${j}`);
        if (!cell) continue;

        const span = cell.querySelector("span");
        if (!marked[j]) {
            cell.classList.add("red");
            span.textContent = "0";
        }
    }

    const cellP = document.getElementById(`p${p}-cell-${p}`);
    if (cellP) {
        const span = cellP.querySelector("span");
        cellP.classList.add("green");
        span.textContent = "1";
    }

    function markNext() {
        if (i > N) {
            isAnimating = false;
            if (callback) callback();
            return;
        }

        if (i % p === 0) {
            marked[i] = false;

            const cell = document.getElementById(`p${p}-cell-${i}`);
            if (cell) {
                const span = cell.querySelector("span");
                cell.classList.add("red");
                span.textContent = "0";
            }
        }

        i += p;
        const timeoutId = setTimeout(markNext, 100);
        timeouts.push(timeoutId);
    }

    markNext();
}

function highlightRemainingPrimes() {
    for (let i = 2; i <= N; i++) {
        if (!marked[i]) continue;
        steps.forEach(p => {
            const cell = document.getElementById(`p${p}-cell-${i}`);
            if (cell) {
                const span = cell.querySelector("span");
                cell.classList.remove("red");
                cell.classList.add("green");
                span.textContent = "1";
            }
        });
    }
}

function nextStep() {
    if (isAnimating || currentStep >= steps.length) return;

    const p = steps[currentStep];
    applyStep(p, () => {
        currentStep++;
        updateButtons();
    });
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;

        const p = steps[currentStep]; // pasul curent la care dăm înapoi

        // Ștergem doar culorile din rândul p (pasul actual)
        for (let i = 0; i <= N; i++) {
            const cell = document.getElementById(`p${p}-cell-${i}`);
            if (cell) {
                cell.classList.remove("red", "green");
                const span = cell.querySelector("span");
                if (span) span.textContent = "1";
            }
        }

        // Refacem complet starea `marked`
        marked = Array(N + 1).fill(true);
        marked[0] = marked[1] = false;

        // Reaplicăm toți pașii anteriori (vizual + logic)
        for (let s = 0; s < currentStep; s++) {
            const stepP = steps[s];

            // Primul număr p
            const primeCell = document.getElementById(`p${stepP}-cell-${stepP}`);
            if (primeCell) {
                primeCell.classList.add("green");
                const span = primeCell.querySelector("span");
                if (span) span.textContent = "1";
            }

            // Multiplii
            for (let i = stepP * 2; i <= N; i += stepP) {
                marked[i] = false;
                const cell = document.getElementById(`p${stepP}-cell-${i}`);
                if (cell) {
                    cell.classList.add("red");
                    const span = cell.querySelector("span");
                    if (span) span.textContent = "0";
                }
            }
        }

        updateButtons();
    }
}




function updateButtons() {
    document.getElementById("btnPrev").disabled = currentStep === 0 || isAnimating;
    document.getElementById("btnNext").disabled = currentStep === steps.length || isAnimating;
}

document.getElementById("NInput").addEventListener('change', () => {
    generateSteps();
});

generateSteps();







var codeContent=document.getElementById("codeContent");


function codeFullscreen()
{
  if (document.fullscreenElement) 
    {
        document.exitFullscreen();
    }
    else 
    {
        codeContent.requestFullscreen();
    }
}


var grafContent=document.getElementById("grafContent");


function grafFullscreen()
{
  if (document.fullscreenElement) 
    {
        document.exitFullscreen();
    }
    else 
    {
        grafContent.requestFullscreen();
    }
}

var animContent=document.getElementById("animContent");

function animFullscreen()
{
  if (document.fullscreenElement) 
    {
        document.exitFullscreen();
    }
    else 
    {
        animContent.requestFullscreen();
    }
}
