import quadrado from './quadrado.js';
import numeroAleatorio from './numeroAleatorio.js';
console.log(quadrado.areaQuadrada(5));
console.log(quadrado.PerimetroQuadrada(5));

console.log(numeroAleatorio());

/*const menu = {
  seletor: '.principal',
};
console.log(menu.seletor);

function upperName(name) {
  return name.toUpperCase();
}
console.log(upperName('Andre'));

function handleMouse(event) {
  console.log(event);
}
document.addEventListener('click', handleMouse);

function showList(empresa, ...clients) {
  clients.forEach((client) => {
    console.log(client, empresa);
  });
}
showList('Google', 'André', 'Pedro', 'João');
const numero = [10, 5, 20];
const maior = Math.max(...numero);
console.log(maior);

const numero2 = [13, numero, 24, 32, 32];
console.log(numero2);

const carro = {
  cor: 'Azul',
  portas: 4,
};
const carroAno = { ...carro, ano: 2020 };
console.log(carroAno);

fetch(
  'https://gist.githubusercontent.com/gledsoncruz/8454e3b7eb29374ba998/raw/5f7fc7af362b83973dc891f10a7e74784f3694aa/products.json',
)
  //Pegando a reposta da api e transfomando em formato json
  .then((response) => response.json())
  //calmbeck do json
  .then((json) => {
    console.log(json);
  });
*/
/*Usando json*/
async function fetchProductos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
const url = fetchProductos(
  'https://gist.githubusercontent.com/gledsoncruz/8454e3b7eb29374ba998/raw/5f7fc7af362b83973dc891f10a7e74784f3694aa/products.json',
);

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];
/*Pegando determinado valor da array*/
const precosFilter = precos.filter((p) => p.includes('R$'));
console.log(precosFilter);

const precosNumeros = precosFilter.map((preco) =>
  Number(preco.replace('R$ ', '')),
);
console.log(precosNumeros);

/*Expressoes*/

const grupoA = 100;
const grupoB = 200;

if (grupoA > grupoB) {
  console.log('grupo A');
} else {
  console.log('grupo B');
}

const vencedor = grupoA > grupoB ? 'grupo A' : 'grupo B';
console.log(vencedor);

const active = true;
const button = active && 'bontao ativo';

console.log(button);
