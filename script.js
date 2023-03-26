const introduceButton = document.getElementById('introduce-btn');
const studentName = document.getElementById('friend-name');

introduceButton.addEventListener('click', () => {
    const name = prompt('Привет! Как тебя зовут?', 'Оля')

    if (name) {
        studentName.textContent = name;
    }
})