//Referencia a la lista
const listaGaleria = document.querySelector('.lista');

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 9; i++) {
    const liGaleria = document.createElement('li');
    const imgGaleria = document.createElement('img');

    liGaleria.classList.add('col-md-6', 'col-lg-4', 'border', 'border-2');
    imgGaleria.classList.add('img-fluid');
    imgGaleria.src = `img/galeria_0${i}.jpg`;
    liGaleria.append(imgGaleria);

    listaGaleria.append(liGaleria);
  }
});
