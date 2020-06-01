const display = document.querySelector("[type='text']");
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.addEventListener('click', () => {
    display.value += btn.value;

    if (btn.value === 'C'){
        display.value = '';
    }
}));

function calc(){
    console.log(display.value);
    if (display.value.includes('/')) {
        const holder = display.value.split('/');
        const result = Number(holder[0]) / Number(holder[1])
        display.value = result;
    }
    if (display.value.includes('x')) {
        const holder = display.value.split('x');
        const result = Number(holder[0]) * Number(holder[1])
        display.value = result;
    }
    if (display.value.includes('-')) {
        const holder = display.value.split('-');
        const result = Number(holder[0]) - Number(holder[1])
        display.value = result;
    }
    if (display.value.includes('+')) {
        const holder = display.value.split('+');
        const result = Number(holder[0]) + Number(holder[1])
        display.value = result;
    }
}