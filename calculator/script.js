const display = document.querySelector("[type='text']");
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.addEventListener('click', () => {
    display.value += btn.value;

    if (btn.value === 'C'){
        display.value = '';
    }
}));

function calc(){
    let op = display.value;

    if (op.includes('x')) {
       op = op.replace('x', '*');
    }

    console.log(op);

    display.value = eval(op);
}