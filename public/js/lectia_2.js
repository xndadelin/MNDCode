var teoryText=document.getElementById("teoryText");
var teoryTitle = document.getElementById("teoryTitle");
var teorySubtitle = document.getElementById("teorySubtitle");
var previousButton = document.getElementById("previousButton");
var nextButton = document.getElementById("nextButton");

function nextTeory()
{
    switch (teoryTitle.textContent)
    {
        case "Card 1":
            teoryTitle.textContent="Card 2";
            teoryText.innerHTML="Căutarea <code>liniară (secvențială)</code> este unul dintre cei mai simpli algoritmi studiați. El urmărește să verificea partenența unui element la un șir de elemente de aceeași natură, în speță a unui număr la un șir denumere. Pentru aceasta se parcurge șirul de la <code>primul</code> element până la <code>ultimul</code> și la fiecare pas se compară elementul căutat <code>x</code> cu elementul curent din șir. În cazul în care s-a găsit corespondență(egalitate), un indicator (<code>găsit</code>) este modificat în 1.La sfârșitul parcurgerii șirului, indicatorul ne va arăta dacă <code>numărul</code> căutat aparține sau nușirului.";
            teorySubtitle.textContent="Căutarea liniară";
            previousButton.style.backgroundColor ='#1864ab';
            previousButton.style.cursor = 'pointer';
            break;

        case "Card 2":
            teoryTitle.textContent="Card 3";
            teoryText.innerHTML="Algoritmul de <code>căutare binară</code> oferă performanțe mai bune decât algoritmul de <code>căutare secvențială</code>.Căutarea binară funcționează prin împărțirea repetată a unei liste <code>sortate</code> în jumătate, comparând elementul căutat cu valoarea de la mijloc pentru a decide în ce jumătate să continue căutarea. Unul din <code>dezavantajele</code> acestui algoritm este că șirul în care se face căutarea trebuie să fie inițial <code>sortat</code>.";
            teorySubtitle.textContent="Căutarea binară";
            break;

        case "Card 3":
            teoryTitle.textContent="Card 4";
            teoryText.innerHTML="  - Datele de intrare trebuie <code>ordonate</code> în cazul aplicării metodei <code>căutării binare</code> și nu trebuie ordonate dacă aplicăm <code>căutarea liniară</code>.<br>  - Căutarea liniară face accesul secvențial(o căutare liniară scanează un element la un moment dat, fără a sări la niciun element, în timp ce datele de acces la <code>căutare binară</code> sunt aleatorii(în cazul algoritmului de căutare binară, se reduce căutarea la jumătate,imediat după ce găsim <code>mijlocul</code> șirului sortat.";
            teorySubtitle.textContent="Observații";
            break;

        case "Card 4":
            teoryTitle.textContent="Card 5";
            teoryText.innerHTML="- Complexitatea căutării liniare este <code>O(n)</code>.<br> - Complexitatea căutării binare este <code>O(log n)</code>.";
            teorySubtitle.textContent="Complexitatea";
            nextButton.style.backgroundColor ='gray';
            nextButton.style.cursor = 'not-allowed';
            break;
    }
}

function previousTeory()
{
    switch (teoryTitle.textContent)
    {
        case "Card 2":
            teoryTitle.textContent="Card 1";
            teoryText.innerHTML="Căutarea <code>liniară</code> și cea <code>binară</code> sunt două metode de căutare folosite pentru a găsi un element într-o listă. Căutarea <code>iniară</code> verifică fiecare element pe rând, iar cea <code>binară</code> împarte lista sortată pentru a găsi rapid valoarea dorită.";
            teorySubtitle.textContent="Începutul";
            previousButton.style.backgroundColor ='gray';
            previousButton.style.cursor = 'not-allowed';
            break;

        case "Card 3":
            teoryTitle.textContent="Card 2";
            teoryText.innerHTML="Căutarea <code>liniară (secvențială)</code> este unul dintre cei mai simpli algoritmi studiați. El urmărește să verificea partenența unui element la un șir de elemente de aceeași natură, în speță a unui număr la un șir denumere. Pentru aceasta se parcurge șirul de la <code>primul</code> element până la <code>ultimul</code> și la fiecare pas se compară elementul căutat <code>x</code> cu elementul curent din șir. În cazul în care s-a găsit corespondență(egalitate), un indicator (<code>găsit</code>) este modificat în 1.La sfârșitul parcurgerii șirului, indicatorul ne va arăta dacă <code>numărul</code> căutat aparține sau nușirului.";
            teorySubtitle.textContent="Căutarea liniară";
            break;

        case "Card 4":
            teoryTitle.textContent="Card 3";
            teoryText.innerHTML="Algoritmul de <code>căutare binară</code> oferă performanțe mai bune decât algoritmul de <code>căutare secvențială</code>.Căutarea binară funcționează prin împărțirea repetată a unei liste <code>sortate</code> în jumătate, comparând elementul căutat cu valoarea de la mijloc pentru a decide în ce jumătate să continue căutarea. Unul din <code>dezavantajele</code> acestui algoritm este că șirul în care se face căutarea trebuie să fie inițial <code>sortat</code>.";
            teorySubtitle.textContent="Căutarea binară";
            break;

        case "Card 5":
            teoryTitle.textContent="Card 4";
            teoryText.innerHTML="  - Datele de intrare trebuie <code>ordonate</code> în cazul aplicării metodei <code>căutării binare</code> și nu trebuie ordonate dacă aplicăm <code>căutarea liniară</code>.<br>  - Căutarea liniară face accesul secvențial(o căutare liniară scanează un element la un moment dat, fără a sări la niciun element, în timp ce datele de acces la <code>căutare binară</code> sunt aleatorii(în cazul algoritmului de căutare binară, se reduce căutarea la jumătate,imediat după ce găsim <code>mijlocul</code> șirului sortat.";
            teorySubtitle.textContent="Observații";
            nextButton.style.backgroundColor ='#1864ab';
            nextButton.style.cursor = 'pointer';
    }
}




function createBoxes() {
    const container = document.getElementById('animationContainer');
    container.innerHTML = '';
    document.getElementById('searchResult').textContent = '';

    const vector = document.getElementById('vectorInput').value.trim().split(/\s+/).map(Number);

    vector.forEach((num, index) => {
        const box = document.createElement('div');
        box.className = 'vector-box';
        box.textContent = num;
        box.setAttribute('data-value', num);
        box.setAttribute('data-index', index);
        container.appendChild(box);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let animationInProgress = false;

async function startAnimation() {
    if (animationInProgress) return;
    animationInProgress = true;

    createBoxes();
    const boxes = document.querySelectorAll('.vector-box');
    const target = parseInt(document.getElementById('deCautatInput').value, 10);
    const resultBox = document.getElementById('searchResult');
    resultBox.textContent = '';

    let found = false;

    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        box.classList.add('active');
        await sleep(500);

        const value = parseInt(box.getAttribute('data-value'), 10);
        if (value === target) {
            box.classList.remove('active');
            box.classList.add('found');
            found = true;
            resultBox.textContent = `---> Am găsit valoarea ${target} la indexul ${i}.`;
            break;
        } else {
            box.classList.remove('active');
            box.classList.add('not-found');
        }
    }

    if (!found) {
        resultBox.textContent = `---> Valoarea ${target} nu a fost găsită în vector.`;
    }

    animationInProgress = false;
}

window.onload = createBoxes;



















function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createBinaryBoxes(vector) {
    const container = document.getElementById('binaryContainer');
    container.innerHTML = '';
    vector.forEach((val, index) => {
        const box = document.createElement('div');
        box.classList.add('vector-box');
        box.innerText = val;
        box.dataset.index = index;
        container.appendChild(box);
    });
}

function displayBinaryBoxesOnLoad() {
    const inputVector = document.getElementById('vectorInput').value.trim().split(/\s+/).map(Number);

    if (inputVector.some(isNaN)) {
        return;
    }

    const sortedVector = [...inputVector].sort((a, b) => a - b);
    createBinaryBoxes(sortedVector);
}

async function startBinarySearch() {
    const startBtn = document.getElementById('startBinaryBtn');
    startBtn.disabled = true;
    startBtn.style.opacity = '0.6';
    startBtn.style.cursor = 'not-allowed';

    const inputVector = document.getElementById('vectorInput').value.trim().split(/\s+/).map(Number);
    const deCautat = parseInt(document.getElementById('deCautatInput').value);
    const container = document.getElementById('binaryContainer');
    const resultDiv = document.getElementById('binarySearchResult');

    // Resetare
    container.innerHTML = '';
    resultDiv.innerText = '';

    if (inputVector.some(isNaN) || isNaN(deCautat)) {
        resultDiv.innerText = 'Vectorul sau valoarea căutată nu sunt valide.';
        startBtn.disabled = false;
        startBtn.style.opacity = '1';
        startBtn.style.cursor = 'pointer';
        return;
    }

    const vector = [...inputVector].sort((a, b) => a - b);
    createBinaryBoxes(vector);

    let st = 0, dr = vector.length - 1;

    while (st <= dr) {
        const mid = Math.floor((st + dr) / 2);
        const boxes = container.querySelectorAll('.vector-box');

        boxes.forEach((b, i) => {
            b.classList.remove('active', 'found', 'not-found', 'eliminated');
            if (i < st || i > dr) {
                b.classList.add('eliminated');
            }
        });

        boxes[mid].classList.add('active');
        await sleep(700);

        if (vector[mid] === deCautat) {
            boxes[mid].classList.remove('active');
            boxes[mid].classList.add('found');
            resultDiv.innerText = `---> Am găsit ${deCautat} la indexul ${mid}.`;
            break;
        } else {
            boxes[mid].classList.remove('active');
            boxes[mid].classList.add('not-found');
            await sleep(500);

            if (vector[mid] < deCautat) {
                st = mid + 1;
            } else {
                dr = mid - 1;
            }
        }

        await sleep(500);
    }

    if (st > dr) {
        resultDiv.innerText = `---> Elementul ${deCautat} nu a fost găsit în vector.`;
    }


    startBtn.disabled = false;
    startBtn.style.opacity = '1';
    startBtn.style.cursor = 'pointer';
}

window.onload = () => {
    createBoxes();
    displayBinaryBoxesOnLoad();
};


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