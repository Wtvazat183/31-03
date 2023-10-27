const btn = document.querySelectorAll('.btn');

let toggle = true;
btn.forEach((element) => {
    element.addEventListener('click', () => {
        if (toggle) {
            toggle = !toggle;
            element.textContent = 'скрыть ответ';
            element.parentNode.querySelector('.answer').classList.add('open');
        } else {
            toggle = !toggle;
            element.textContent = 'покозать ответ';
            element.parentNode.querySelector('.answer').classList.remove('open');
        }
    });
});
