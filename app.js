// DOM - document object model
// built into your browser -- its a JS representation of your HTML

// DOM GETTER METHODS
// getElementById
const nameDisplay = document.getElementById('name');
const pronounDisplay= document.getElementById('pronoun');

// DOM SETTER METHODS
// textContent
nameDisplay.textContent = 'Akilah';
nameDisplay.classList.add('yellow');

const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () => {
    
    
    const nameInput = document.getElementById('name-input');

    nameDisplay.textContent = nameInput.value;
});

const updatebutton = document.getElementById('update-button')
updatebutton.addEventListener('click', () => {
    console.log('Updating pronouns');
    
    const pronounInput = document.getElementById('pronoun-input');

    pronounDisplay.textContent = pronounInput.value;

})
