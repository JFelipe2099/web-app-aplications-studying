const p = document.querySelector('p');
const ul = document.querySelector('ul');
const input = document.querySelector("[type='text']");
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = input.value;

    hide();
    ul.append(li);
    input.value = '';
});

ul.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }

    hide();
});

const hide = function(){
    if (ul.innerHTML === ''){
        p.classList.toggle('hide');
    }
}