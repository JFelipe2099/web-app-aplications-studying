const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator input');

function criarBotoes(){
	const btn = [
		{valor: 7, classe: 'num'},
		{valor: 8, classe: 'num'},
		{valor: 9, classe: 'num'},
    {valor: '&divide;', classe: 'num mathSymb'},
		{valor: 4, classe: 'num'},
		{valor: 5, classe: 'num'},
		{valor: 6, classe: 'num'},
    {valor: '&times;', classe: 'num mathSymb'},
		{valor: 1, classe: 'num'},
		{valor: 2, classe: 'num'},
		{valor: 3, classe: 'num'},
    {valor: '&minus;', classe: 'num mathSymb'},
		{valor: ',', classe: 'num'},
		{valor: 0, classe: 'num'},
		{valor: 'C', classe: 'num clear'},
    {valor: '&plus;', classe: 'num mathSymb'},
		{valor: 'Resultado &equals;', classe: 'btn calc'}
	];

	btn.forEach((button, index) => {
    const html =`<button class="${button.classe}">${button.valor}</button>`;
		if (index !== 0 && index % 4 === 0){
			calculator.innerHTML += '<br>';
    }
    calculator.innerHTML += html;
	});
};

calculator.addEventListener('click', e => {
  if (e.target.classList.contains('num')){
    display.value += e.target.innerText;
    console.log(e.target.innerText);
  }
});

criarBotoes();