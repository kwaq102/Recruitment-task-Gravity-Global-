const body = document.querySelector('body')
const btn = document.querySelector('.btn');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

const showPopup = () => {
    popup.classList.add('show');
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
})

close.addEventListener('click', hidePopup);