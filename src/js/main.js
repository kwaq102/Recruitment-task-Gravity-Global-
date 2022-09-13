const body = document.querySelector('body')
const btn = document.querySelector('.btn');
const btnReset = document.querySelector('.btn-reset')
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const counterElement = document.querySelector('.counter');

let counter = Number(localStorage.getItem('counter'));

const showBtnReset = () => {
    btnReset.classList.add('show-btn');
}
const setCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString())
    counterElement.textContent = counter;

    if (counter > 5) {
        showBtnReset();
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
    let isAlertWindow = false;

    for (let i = 0; i < e.path.length; i++) {
        if (e.path[i].className === "alert") {
            isAlertWindow = true;
            break;
        }
    }

    if (!isAlertWindow) {
        hidePopup();
    }
});

close.addEventListener('click', hidePopup);
btnReset.addEventListener('click', resetCounter);