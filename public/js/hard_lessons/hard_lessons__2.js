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
            teoryTitle.textContent = "Card 2";
            teoryText.innerHTML = "The <code>linear (sequential)</code> search is one of the simplest algorithms studied. It aims to check whether an element belongs to a sequence of elements of the same nature, specifically a number in a sequence of numbers. For this, the sequence is traversed from the <code>first</code> element to the <code>last</code>, and at each step, the searched element <code>x</code> is compared with the current element in the sequence. If a match (equality) is found, an indicator (<code>found</code>) is set to 1. At the end of the traversal, the indicator will show us whether the <code>number</code> being searched for belongs to the sequence or not.";
            teorySubtitle.textContent = "Linear Search";
            previousButton.style.backgroundColor = '#1864ab';
            previousButton.style.cursor = 'pointer';
            break;

        case "Card 2":
            teoryTitle.textContent = "Card 3";
            teoryText.innerHTML = "The <code>binary search</code> algorithm offers better performance than the <code>sequential search</code> algorithm. Binary search works by repeatedly dividing a <code>sorted</code> list in half, comparing the target element with the middle value to decide in which half to continue the search. One of the <code>disadvantages</code> of this algorithm is that the list to be searched must be initially <code>sorted</code>.";
            teorySubtitle.textContent = "Binary Search";
            break;

        case "Card 3":
            teoryTitle.textContent = "Card 4";
            teoryText.innerHTML = "  - Input data must be <code>sorted</code> when using the <code>binary search</code> method and do not need to be sorted when applying <code>linear search</code>.<br>  - Linear search accesses data sequentially (a linear search scans one element at a time without skipping any), while data access in <code>binary search</code> is random (in binary search, the search range is halved immediately after finding the <code>middle</code> of the sorted list).";
            teorySubtitle.textContent = "Observations";
            break;

        case "Card 4":
            teoryTitle.textContent = "Card 5";
            teoryText.innerHTML = "- The time complexity of linear search is <code>O(n)</code>.<br> - The time complexity of binary search is <code>O(log n)</code>.";
            teorySubtitle.textContent = "Complexity";
            nextButton.style.backgroundColor = 'gray';
            nextButton.style.cursor = 'not-allowed';
            break;
    }
}

function previousTeory()
{
    switch (teoryTitle.textContent)
    {
        case "Card 2":
            teoryTitle.textContent = "Card 1";
            teoryText.innerHTML = "<code>Linear</code> and <code>binary</code> search are two methods used to find an element in a list. <code>Linear</code> search checks each element one by one, while <code>binary</code> search splits the sorted list to quickly find the desired value.";
            teorySubtitle.textContent = "The beginning";
            previousButton.style.backgroundColor = 'gray';
            previousButton.style.cursor = 'not-allowed';
            break;

        case "Card 3":
            teoryTitle.textContent = "Card 2";
            teoryText.innerHTML = "The <code>linear (sequential)</code> search is one of the simplest algorithms studied. It aims to check whether an element belongs to a sequence of elements of the same nature, specifically a number in a sequence of numbers. For this, the sequence is traversed from the <code>first</code> element to the <code>last</code>, and at each step, the searched element <code>x</code> is compared with the current element in the sequence. If a match (equality) is found, an indicator (<code>found</code>) is set to 1. At the end of the traversal, the indicator will show us whether the <code>number</code> being searched for belongs to the sequence or not.";
            teorySubtitle.textContent = "Linear Search";
            break;

        case "Card 4":
            teoryTitle.textContent = "Card 3";
            teoryText.innerHTML = "The <code>binary search</code> algorithm offers better performance than the <code>sequential search</code> algorithm. Binary search works by repeatedly dividing a <code>sorted</code> list in half, comparing the target element with the middle value to decide in which half to continue the search. One of the <code>disadvantages</code> of this algorithm is that the list to be searched must be initially <code>sorted</code>.";
            teorySubtitle.textContent = "Binary Search";
            break;

        case "Card 5":
            teoryTitle.textContent = "Card 4";
            teoryText.innerHTML = "  - Input data must be <code>sorted</code> when using the <code>binary search</code> method and do not need to be sorted when applying <code>linear search</code>.<br>  - Linear search accesses data sequentially (a linear search scans one element at a time without skipping any), while data access in <code>binary search</code> is random (in binary search, the search range is halved immediately after finding the <code>middle</code> of the sorted list).";
            teorySubtitle.textContent = "Observations";
            nextButton.style.backgroundColor = '#1864ab';
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
            resultBox.textContent = `---> I found the value ${target} at ${i} index.`;
            break;
        } else {
            box.classList.remove('active');
            box.classList.add('not-found');
        }
    }

    if (!found) {
        resultBox.textContent = `---> The value ${deCautat} was not found in the vector.`;
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
        resultDiv.innerText = 'The vector or value searched for is not valid.';
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
            resultDiv.innerText = `---> I found the value ${deCautat} at ${mid} index.`;
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
        resultDiv.innerText = `---> The value ${deCautat} was not found in the vector.`;
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