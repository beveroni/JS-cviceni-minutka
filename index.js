const minutka = document.querySelector('.alarm');
const zvuk = document.querySelector('audio');
const stopTlacitko = document.querySelector('button');
const vstupOdUzivatele = Number(
  prompt('Zadej za jak dlouho má zazvonit minutka:'),
);
const zvoneni = () => {
  minutka.classList.add('alarm--ring');
  zvuk.play();
};

const casovac = setTimeout(zvoneni, vstupOdUzivatele * 1000);
stopTlacitko.addEventListener('click', () => {
  clearTimeout(casovac);
});
