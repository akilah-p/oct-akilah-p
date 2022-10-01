// DOM - document object model
// built into your browser -- its a JS representation of your HTML

// DOM GETTER METHODS
// getElementById
const nameDisplay = document.getElementById('name');
const favoriteDisplay = document.getElementById('pronoun');

// DOM SETTER METHODS
// textContent
nameDisplay.textContent = 'Akilah';
nameDisplay.classList.add('yellow');

const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () => {
    
    
    const nameInput = document.getElementById('name-input');

    nameDisplay.textContent = nameInput.value;
});

const updatebutton = document.getElementById('update-button');
updatebutton.addEventListener('click', () => {
    
    const favoriteInput = document.getElementById('favorite-input');

    // eslint-disable-next-line no-undef
    favoriteDisplay.textContent = favoriteInput.value;

});
