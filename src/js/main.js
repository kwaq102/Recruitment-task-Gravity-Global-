const body = document.querySelector('body')
const btn = document.querySelector('.btn');
const btnReset = document.querySelector('.btn-reset')
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const counterElement = document.querySelector('.counter');

let counter = Number(localStorage.getItem('counter'));

const showPopup = () => {
    popup.classList.add('show');
    counter++;
    localStorage.setItem('counter', counter.toString())
    counterElement.textContent = counter;
}

const hidePopup = () => {
    popup.classList.remove('show');
}

const resetCounter = () => {
    console.log('ok');
    // localStorage.setItem('counter', '0');
    localStorage.removeItem('counter');
    counterElement.textContent = '0'
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
})

close.addEventListener('click', hidePopup);
btnReset.addEventListener('click', resetCounter);