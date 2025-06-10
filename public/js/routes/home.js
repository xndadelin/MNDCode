function updateClock() 
{
    const now = new Date();
    const timeString = now.toLocaleTimeString('ro-RO');
    document.getElementById('digitalClock').textContent = timeString;
    
    const dateString = now.toLocaleDateString('ro-RO', 
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('dateDisplay').textContent = dateString;

    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = (hours * 30) + (minutes * 0.5);
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;

}

updateClock();
setInterval(updateClock, 1000);

const knowText = document.getElementById('knowText');
const random = Math.floor(Math.random() * 20) + 1;


switch(random)
{
    case 1:
        knowText.textContent="the first bug in programming was an actual moth caught in a relay?";
        break;

    case 2:
        knowText.textContent="the Python language was named after the comedy group Monty Python?";
        break;

    case 3:
        knowText.textContent="the Apollo 11 core code was written in assembly language?";
        break;

    case 4:
        knowText.textContent= '“Hello, World!” is traditionally the first program written in a new language?';
        break;

    case 5:
        knowText.textContent="JavaScript and Java are not the same thing?";
        break;

    case 6:
        knowText.textContent="in 1969, the internet began with a message that crashed after just two letters?";
        break;

    case 7:
        knowText.textContent="Google was originally written in Java and Python?";
        break;

    case 8:
        knowText.textContent="the Apollo guidance computer software took up only 64 KB?";
        break;

    case 9:
        knowText.textContent="NASA hired female programmers in the '60s to code for space missions?";
        break;

    case 10:
        knowText.textContent="over 70% of the world's code is written in open-source languages?";
        break;

    case 11:
        knowText.textContent="a single missing character can crash an entire program?";
        break;
    
    case 12:
        knowText.textContent="coffee is often seen as a symbol of coding culture?";
        break;

    case 13:
        knowText.textContent="there’s a programming language called “Brainfuck”?";
        break;

    case 14:
        knowText.textContent="SQL was created in the 1970s and is still widely used today?";
        break;

    case 15:
        knowText.textContent="the first high-level programming language was Fortran, in 1957?";
        break;

    case 16:
        knowText.textContent="most web servers run on Linux?";
        break;

    case 17:
        knowText.textContent="a missing semicolon has caused millions in damage in some systems?";
        break;


    case 18:
        knowText.textContent="programmers spend about 90% of their time debugging, not writing code?";
        break;

    case 19:
        knowText.textContent="Facebook’s original code was written in a dorm room?";
        break;

    case 20:
        knowText.textContent="GitHub has a code archive stored in an Arctic vault?";
        break;

    default:
        knowText.textContent="You can't see this!";
        break;
}
