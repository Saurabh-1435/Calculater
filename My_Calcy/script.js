// Variables
let currentInput = document.querySelector('.currentInput');
//his creates a variable named currentInput to store the selected element.

// Document- redfers to webpage. 
//queryselector- is Method to find element in page.
//('.currentInput')-   In  Parenthese he is searching element with class name CurrentInput. 

let answerScreen = document.querySelector('.answerScreen');
//let answerScreen - This is name of variable. 

let buttons = document.querySelectorAll('button');
// /let buttons -- This is name of variable. 

let erasebtn = document.querySelector('#erase');
//let erasebtn- This is name of variable 

let clearbtn = document.querySelector('#clear');
//let clearbtn -

let evaluate = document.querySelector('#evaluate');



// Calculator Display
let realTimeScreenValue = []

// To Clear

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// Get value of any button clicked and display to the screen

buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {
            // To display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {

                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));

            }

        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }

    })
})