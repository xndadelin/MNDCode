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
            teoryText.innerHTML="We will use a characteristic array which we initially mark as <code>ciur[0]=ciur[1]=1</code>, because these two numbers are not <code>prime</code>. For number 2, we will have <code>ciur[2]=0</code>, and then we will mark with 1 all even numbers greater than or equal to 4 (i.e., all multiples of 2). Next, we will only deal with <code>odd</code> numbers greater than or equal to 3.";
            teoryTitle.textContent="Card 2";
            teorySubtitle.textContent="Characteristic Array";
            previousButton.style.backgroundColor ='#1864ab';
            previousButton.style.cursor = 'pointer';
            break;

        case "Card 2":
            teoryCard.style.height = "1280px";
            teoryText.innerHTML="<pre><code>#include <iostream> <br>using namespace std;<br><br>int ciur[1000003],N // We determine the prime numbers smaller than one million <br><br>int main()<br>{<br>   int i,j;<br>   cin>>N;<br>   ciur[0]=ciur[1]=1;<br><br>   //Mark with 1 (not prime) all even numbers >= 4<br>   for(i=4;i<=N;i=i+2)<br>   {<br>      ciur[i] = 1;<br>   }<br><br>   //Traverse odd numbers >=3<br>   for(i=3;i<=N;i=i+2)<br>   {<br>      if(ciur[i]==0) //i is prime, but its multiples are not<br>      {<br>         for(j=2*i;j<=N;j=j+1)<br>         {<br>            ciur[j] = 1;<br>         }<br>      }<br>   }<br><br>   for(i=0;i<=N;i++)<br>   {<br>      if(ciur[i]==0)<br>      {<br>         cout&lt;&lt;i&lt;&lt;' ';<br>      }<br>   }<br>   return 0;<br>}</code></pre>";                                                                                                                                      
            teoryTitle.textContent="Card 3";
            teorySubtitle.textContent="Unoptimized Code";
            codeh2.textContent="Optimization 1";
            code.textContent=
`#include  
using namespace std;

int ciur[1000003],N // We determine the prime numbers smaller than one million 

int main()
{
   int i,j;
   cin>>N;
   ciur[0]=ciur[1]=1;

   //Mark with 1 (not prime) all even numbers >= 4
   for(i=4;i<=N;i=i+2)
   {
      ciur[i] = 1;
   }

   //Traverse odd numbers >=3
   for(i=3;i<=N;i=i+2)
   {
      if(ciur[i]==0) //i is prime, but its multiples are not
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
            teoryText.innerHTML="If N = 100, we will see that 25 prime numbers are printed, namely <code>2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89</code> and <code>97</code>. We also notice that prime numbers are <code>odd</code> and that number 2 is the only <code>even</code> prime number. This is because all <code>even</code> numbers greater than 2 are multiples of 2 and therefore cannot be prime.";
            teoryTitle.textContent="Card 4";
            teorySubtitle.textContent="Observation";
            break;
            
        case "Card 4":
            teoryText.innerHTML="The previous algorithm (Card 2) is not optimal and in order to increase execution speed, we will make some <code>modifications</code>. We notice that if <code>i=5</code> the first marked multiple will be 10, but it has already been marked before and for this reason we will select only the <code>odd</code> multiples: 15, 25, 35 etc., using a step of 10 (double of i).";
            teoryTitle.textContent="Card 5";
            teorySubtitle.textContent="Optimization";
            break;

        case "Card 5":
            teoryCard.style.height = "1280px";
            teoryText.innerHTML="<pre><code>#include <iostream> <br>using namespace std;<br><br>int ciur[1000003],N // We determine the prime numbers smaller than one million <br><br>int main()<br>{<br>   int i,j;<br>   cin>>N;<br>   ciur[0]=ciur[1]=1;<br><br>   //Mark with 1 (not prime) all even numbers >= 4<br>   for(i=4;i<=N;i=i+2)<br>   {<br>      ciur[i] = 1;<br>   }<br><br>   //Traverse odd numbers >=3<br>   for(i=3;i<=N;i=i+2)<br>   {<br>      if(ciur[i]==0) //i is prime, but its multiples are not<br>      {<br>         for(j=3*i;j<=N;j=j+2*i) //Step will be double of i<br>         {<br>            ciur[j] = 1;<br>         }<br>      }<br>   }<br><br>   for(i=0;i<=N;i++)<br>   {<br>      if(ciur[i]==0)<br>      {<br>         cout&lt;&lt;i&lt;&lt;' ';<br>      }<br>   }<br>   return 0;<br>}</code></pre>";
            teoryTitle.textContent="Card 6";
            teorySubtitle.textContent="Semi-optimized Code";
            codeh2.textContent="Optimization 2"
            code.textContent=
`#include  
using namespace std;

int ciur[1000003],N // We determine the prime numbers smaller than one million 

int main()
{
   int i,j;
   cin>>N;
   ciur[0]=ciur[1]=1;

   //Mark with 1 (not prime) all even numbers >= 4
   for(i=4;i<=N;i=i+2)
   {
      ciur[i] = 1;
   }

   //Traverse odd numbers >=3
   for(i=3;i<=N;i=i+2)
   {
      if(ciur[i]==0) //i is prime, but its multiples are not
      {
         for(j=3*i;j<=N;j=j+2*i) //Step will be double of i
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
            teoryText.innerHTML="<ul><li>For 5: multiple 15 was already marked when <code>i=3</code>, since 15 is also a multiple of 3.</li><li>For 7: multiple 21 was also marked when <code>i=3</code>, just like number 35 which is also a multiple of 3 and was already marked when i=3.</li></ul>";
            teoryTitle.textContent="Card 7";
            teorySubtitle.textContent="Observation";
            break;
        
        case "Card 7":
            teoryText.innerHTML="We try to optimize the algorithm even more. We observe that in order to mark the multiples of <code>i</code>, it is not necessary to go through all of them, but only those greater than <code>i*i</code>. For example, for 5, 25 is the first unmarked multiple and it is greater than 5*5=25. Similarly, for 7, 49 is the first unmarked multiple and greater than 7*7=49.";
            teoryTitle.textContent="Card 8";
            teorySubtitle.textContent="Optimization";
            break;

        case "Card 8":
            teoryText.innerHTML="<pre><code>#include <iostream> <br>using namespace std;<br><br>int ciur[1000003],N // We determine the prime numbers smaller than one million <br><br>int main()<br>{<br>   int i,j;<br>   cin>>N;<br>   ciur[0]=ciur[1]=1;<br><br>   //Mark with 1 (not prime) all even numbers >= 4<br>   for(i=4;i<=N;i=i+2)<br>   {<br>      ciur[i] = 1;<br>   }<br><br>   //Traverse odd numbers >=3<br>   for(i=3;i*i<=N;i=i+2)<br>   {<br>      if(ciur[i]==0) //i is prime, but its multiples are not<br>      {<br>         for(j=i*i;j<=N;j=j+2*i) //Step will be double of i<br>         {<br>            ciur[j] = 1;<br>         }<br>      }<br>   }<br><br>   for(i=0;i<=N;i++)<br>   {<br>      if(ciur[i]==0)<br>      {<br>         cout&lt;&lt;i&lt;&lt;' ';<br>      }<br>   }<br>   return 0;<br>}</code></pre>";
            teoryCard.style.height = "1280px";
            teoryTitle.textContent="Card 9";
            teorySubtitle.textContent="Optimized Code";
            codeh2.textContent="Optimization 3"
            code.textContent=
`
#include  
using namespace std;

int ciur[1000003],N // We determine the prime numbers smaller than one million 

int main()
{
   int i,j;
   cin>>N;
   ciur[0]=ciur[1]=1;

   //Mark with 1 (not prime) all even numbers >= 4
   for(i=4;i<=N;i=i+2)
   {
      ciur[i] = 1;
   }

   //Traverse odd numbers >=3
   for(i=3;i*i<=N;i=i+2)
   {
      if(ciur[i]==0) //i is prime, but its multiples are not
      {
         for(j=i*i;j<=N;j=j+2*i) //Step will be double of i
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
            teorySubtitle.textContent="Final Observation";
            teoryText.innerHTML="The complexity of the algorithm is <code>O(N * log2(log2(N)))</code>, that is <code>O(N * log(log(N)))</code>. For example, if <code>N=1000000</code> this means <code>4*N</code> steps.";
            nextButton.style.backgroundColor ='gray';
            nextButton.style.cursor = 'not-allowed';
    }
}


function previousTeory()
{
    switch (teoryTitle.textContent)
    {
        case "Card 10":
            teoryCard.style.height = "1280px";
            teoryText.innerHTML="<pre><code>#include <iostream> <br>using namespace std;<br><br>int ciur[1000003],N // We determine the prime numbers less than one million <br><br>int main()<br>{<br>   int i,j;<br>   cin>>N;<br>   ciur[0]=ciur[1]=1;<br><br>   //Mark with 1 (not prime) all even numbers >= 4<br>   for(i=4;i<=N;i=i+2)<br>   {<br>      ciur[i] = 1;<br>   }<br><br>   //Traverse odd numbers >=3<br>   for(i=3;i*i<=N;i=i+2)<br>   {<br>      if(ciur[i]==0) //i is prime, but its multiples are not<br>      {<br>         for(j=i*i;j<=N;j=j+2*i) //Step will be twice i<br>         {<br>            ciur[j] = 1;<br>         }<br>      }<br>   }<br><br>   for(i=0;i<=N;i++)<br>   {<br>      if(ciur[i]==0)<br>      {<br>         cout&lt;&lt;i&lt;&lt;' ';<br>      }<br>   }<br>   return 0;<br>}</code></pre>";
            teoryTitle.textContent="Card 9";
            teorySubtitle.textContent="Optimized Code";
            nextButton.style.backgroundColor ='#1864ab';
            nextButton.style.cursor = 'pointer';
            break;

        case "Card 9":
            teoryCard.style.height = "200px";
            teoryText.innerHTML="We try to further optimize the algorithm. We observe that to mark the multiples of <code>i</code> it is not necessary to go through all multiples of <code>i</code>, but only those greater than <code>i*i</code>. For example, for 5, 25 is the first unmarked multiple greater than 5*5=25. Similarly, for 7, 49 is the first unmarked multiple greater than 7*7=49.";
            teoryTitle.textContent="Card 8";
            teorySubtitle.textContent="Optimization";
            break;

        case "Card 8":
            teoryText.innerHTML="For 5: multiple 15 was already marked when <code>i=3</code>, as 15 is also a multiple of 3.</li><li>For 7: Multiple 21 was also marked when <code>i=3<code>, as was number 35 which is a multiple of 3 and was marked already when i=3.</code>.";
            teoryTitle.textContent="Card 7";
            teorySubtitle.textContent="Observation";
            break;

        case "Card 7":
            teoryCard.style.height = "1280px";
            teoryText.innerHTML="<pre><code>#include <iostream> <br>using namespace std;<br><br>int ciur[1000003],N // We determine the prime numbers less than one million <br><br>int main()<br>{<br>   int i,j;<br>   cin>>N;<br>   ciur[0]=ciur[1]=1;<br><br>   //Mark with 1 (not prime) all even numbers >= 4<br>   for(i=4;i<=N;i=i+2)<br>   {<br>      ciur[i] = 1;<br>   }<br><br>   //Traverse odd numbers >=3<br>   for(i=3;i<=N;i=i+2)<br>   {<br>      if(ciur[i]==0) //i is prime, but its multiples are not<br>      {<br>         for(j=3*i;j<=N;j=j+2*i) //Step will be twice i<br>         {<br>            ciur[j] = 1;<br>         }<br>      }<br>   }<br><br>   for(i=0;i<=N;i++)<br>   {<br>      if(ciur[i]==0)<br>      {<br>         cout&lt;&lt;i&lt;&lt;' ';<br>      }<br>   }<br>   return 0;<br>}</code></pre>";
            teoryTitle.textContent="Card 6";
            teorySubtitle.textContent="Semi-optimized code";
            codeh2.textContent="Optimization 2";
            code.textContent=
`
#include  
using namespace std;

int ciur[1000003],N // We determine the prime numbers less than one million 

int main()
{
   int i,j;
   cin>>N;
   ciur[0]=ciur[1]=1;

   //Mark with 1 (not prime) all even numbers >= 4
   for(i=4;i<=N;i=i+2)
   {
      ciur[i] = 1;
   }

   //Traverse odd numbers >=3
   for(i=3;i<=N;i=i+2)
   {
      if(ciur[i]==0) //i is prime, but its multiples are not
      {
         for(j=3*i;j<=N;j=j+2*i) //Step will be twice i
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
            teoryText.innerHTML="The previous algorithm (Card 2) is not optimal, and to increase the execution speed, we will make some <code>modifications</code>. We observe that if <code>i=5</code> the first marked multiple will be 10, but it has already been marked before, and for this reason we will only select the <code>odd</code> multiples: <code>15, 25, 35</code> etc., with step 10 (twice i)";
            teoryTitle.textContent="Card 5";
            teorySubtitle.textContent="Optimization";
            break;

        case "Card 5":
            teoryText.innerHTML="If N = 100, we will observe that 25 prime numbers are displayed: <code>2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89</code> and <code>97</code>. We also notice that prime numbers are <code>odd</code> and that number 2 is the only <code>even</code> prime number. This is because all <code>even</code> numbers greater than 2 are multiples of 2 and thus cannot be prime.";
            teoryTitle.textContent="Card 4";
            teorySubtitle.textContent="Observation";
            break;

        case "Card 4":  
            teoryCard.style.height = "1280px";
            teoryText.innerHTML="<pre><code>#include <iostream> <br>using namespace std;<br><br>int ciur[1000003],N // We determine the prime numbers less than one million <br><br>int main()<br>{<br>   int i,j;<br>   cin>>N;<br>   ciur[0]=ciur[1]=1;<br><br>   //Mark with 1 (not prime) all even numbers >= 4<br>   for(i=4;i<=N;i=i+2)<br>   {<br>      ciur[i] = 1;<br>   }<br><br>   //Traverse odd numbers >=3<br>   for(i=3;i<=N;i=i+2)<br>   {<br>      if(ciur[i]==0) //i is prime, but its multiples are not<br>      {<br>         for(j=2*i;j<=N;j=j+1)<br>         {<br>            ciur[j] = 1;<br>         }<br>      }<br>   }<br><br>   for(i=0;i<=N;i++)<br>   {<br>      if(ciur[i]==0)<br>      {<br>         cout&lt;&lt;i&lt;&lt;' ';<br>      }<br>   }<br>   return 0;<br>}</code></pre>";                                                                                                                                      
            teoryTitle.textContent="Card 3";
            teorySubtitle.textContent="Unoptimized Code";
            codeh2.textContent="Optimization 1";
            code.textContent=
`
#include  
using namespace std;

int ciur[1000003],N // We determine the prime numbers less than one million 

int main()
{
   int i,j;
   cin>>N;
   ciur[0]=ciur[1]=1;

   //Mark with 1 (not prime) all even numbers >= 4
   for(i=4;i<=N;i=i+2)
   {
      ciur[i] = 1;
   }

   //Traverse odd numbers >=3
   for(i=3;i<=N;i=i+2)
   {
      if(ciur[i]==0) //i is prime, but its multiples are not
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
            teoryText.innerHTML="We will use a characteristic vector initially marked <code>ciur[0]=ciur[1]=1</code>, because these two numbers are not <code>prime</code>. For number 2 we will have <code>ciur[2]=0</code> and then we will mark with 1 all even numbers greater than or equal to 4 (i.e. all multiples of 2). Next, we will only deal with <code>odd</code> numbers greater than or equal to 3.";
            teoryTitle.textContent="Card 2";
            teorySubtitle.textContent="Characteristic Vector";
            break;

        case "Card 2":
            teoryCard.style.height = "200px";
            teoryText.innerHTML="It is used to determine all <code>prime</code> numbers less than or equal to <code>N</code>. By definition, a number <code>x</code> is <code>prime</code> if and only if it has exactly two divisors. Number 2 is the first prime number and is the <code>only</code> even prime number.";
            teoryTitle.textContent="Card 1";
            teorySubtitle.textContent="The Beginning";
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






function codeFullscreen(event) {
    const target = event.target;
    const card = target.closest('.card');
    const cardContent = card.querySelector('.cardContent');

    // Adaugăm o clasă pentru stiluri specifice fullscreen
    cardContent.classList.add('fullscreen-mode');

    // Dacă există butoane de rulare în cardFooterRight, le mutăm temporar într-un container care va fi vizibil în fullscreen
    const footerRight = card.querySelector('.cardFooterRight');
    let fullscreenControls;

    if (footerRight && footerRight.children.length > 0) {
        fullscreenControls = footerRight.cloneNode(true);
        fullscreenControls.classList.add('fullscreen-controls');
        cardContent.appendChild(fullscreenControls);
    }

    const exitHandler = () => {
        cardContent.classList.remove('fullscreen-mode');
        const extraControls = cardContent.querySelector('.fullscreen-controls');
        if (extraControls) extraControls.remove();
        document.removeEventListener('fullscreenchange', exitHandler);
    };

    document.addEventListener('fullscreenchange', exitHandler);

    if (cardContent.requestFullscreen) {
        cardContent.requestFullscreen();
    } else if (cardContent.webkitRequestFullscreen) {
        cardContent.webkitRequestFullscreen();
    } else if (cardContent.msRequestFullscreen) {
        cardContent.msRequestFullscreen();
    }
}

// Atașează evenimentul la toate iconițele expand
document.addEventListener('DOMContentLoaded', () => {
    const expandIcons = document.querySelectorAll('.expandIco');
    expandIcons.forEach(icon => {
        icon.addEventListener('click', codeFullscreen);
    });
});
