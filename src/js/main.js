const btn = document.querySelector('.btn');
const btnReset = document.querySelector('.btn-reset')
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const counterElement = document.querySelector('.counter');

let counter = Number(localStorage.getItem('counter'));

const setCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString())
    counterElement.textContent = counter;

    if (counter > 5) {
        btnReset.classList.add('show-btn');
    }
}
const resetCounter = () => {
    localStorage.setItem('counter', '0');
    counter = 0;
    counterElement.textContent = '0';
    btnReset.classList.remove('show-btn')
}

const showPopup = () => {
    popup.classList.add('show');
    setCounter();
}

const hidePopup = () => {
    popup.classList.remove('show');
}

btn.addEventListener('click', showPopup);

popup.addEventListener('click', (e) => {
    if (e.target.className === "popup show") {
        hidePopup();
    }
});

close.addEventListener('click', hidePopup);
btnReset.addEventListener('click', resetCounter);