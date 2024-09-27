import { listaAnimales } from './datosAnimales.js';
import { Leon, Lobo, Oso, Serpiente, Aguila } from './clases/animales.js';

console.log('Se carga index.js');

document.getElementById('btnRegistrar').addEventListener('click', async () => {
    const animalSeleccionado = document.getElementById('animal').value;
    const edad = document.getElementById('edad').value;
    const comentarios = document.getElementById('comentarios').value;

    if (!animalSeleccionado || !edad || !comentarios) {
        alert('Por favor, complete todos los campos');
    } else {
        const animal = await creaAnimal(animalSeleccionado, edad, comentarios);

        if (!animal) {
            alert('Error en el valor animal seleccionado.');
        } else {
            console.log(animal);
            agregarAnimalATabla(animal);
        }
    }
});

async function creaAnimal(animalSeleccionado, edad, comentarios) {
    //console.log(listaAnimales);
    const datosAnimal = listaAnimales.find(
        (animal) => animal.name === animalSeleccionado
    );

    let datosAnimalADevolver;

    if (datosAnimal) {
        switch (animalSeleccionado) {
            case 'Leon':
                datosAnimalADevolver = new Leon(
                    edad,
                    comentarios,
                    `assets/sounds/${datosAnimal.sonido}`,
                    `assets/imgs/${datosAnimal.imagen}`
                );
                break;
            case 'Lobo':
                datosAnimalADevolver = new Lobo(
                    edad,
                    comentarios,
                    `assets/sounds/${datosAnimal.sonido}`,
                    `assets/imgs/${datosAnimal.imagen}`
                );
                break;
            case 'Oso':
                datosAnimalADevolver = new Oso(
                    edad,
                    comentarios,
                    `assets/sounds/${datosAnimal.sonido}`,
                    `assets/imgs/${datosAnimal.imagen}`
                );
                break;
            case 'Serpiente':
                datosAnimalADevolver = new Serpiente(
                    edad,
                    comentarios,
                    `assets/sounds/${datosAnimal.sonido}`,
                    `assets/imgs/${datosAnimal.imagen}`
                );
                break;
            case 'Aguila':
                datosAnimalADevolver = new Aguila(
                    edad,
                    comentarios,
                    `assets/sounds/${datosAnimal.sonido}`,
                    `assets/imgs/${datosAnimal.imagen}`
                );
                break;
            default:
                console.error('Animal no reconocido');
                return null;
        }
    } else {
        console.error('Animal no encontrado en el archivo JSON');
        return null;
    }
    return datosAnimalADevolver;
}

function agregarAnimalATabla(animal) {
    const animalesDiv = document.getElementById('Animales');
    const animalCard = document.createElement('div');
    animalCard.classList.add('card', 'text-center', 'm-3', 'participante', 'bg-secondary' , 'text-white');
    animalCard.innerHTML = `
      <img src="${animal.img}" class="card-img-top img-fluid img-fixed" alt="${animal.nombre}" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <div class="card-body">
        <img src="./assets/imgs/audio.svg" alt="Reproducir sonido" class="reproducirSonido" width="16" height="16">
      </div>
    `;

    animalCard
        .querySelector('.reproducirSonido')
        .addEventListener('click', () => {
            reproducirSonido(animal);
        });

    animalCard.querySelector('img').addEventListener('click', () => {
        mostrarModal(animal);
    });

    animalesDiv.appendChild(animalCard);
}

function reproducirSonido(animal) {

        switch (animal.nombre) {
            case 'Leon':
                animal.rugir();
                break;
            case 'Lobo':
                animal.aullar();
                break;
            case 'Oso':
                animal.grunir();
                break;
            case 'Serpiente':
                animal.sisear();
                break;
            case 'Aguila':
                animal.chillar();
                break;
            default:
                console.error('Animal no reconocido');
                return null;
        }
}

function mostrarModal(animal) {
    const modalBody = document.querySelector('#exampleModal .modal-body');
    modalBody.classList.add('text-white', 'text-center');
    modalBody.innerHTML = `
        <img src="${animal.img}" class="img-fluid" alt="${animal.nombre}">
        <p> ${animal.edad}</p>
        <h5>Comentarios:</h5>
        <p>${animal.comentarios}</p>
    `;
}

document.getElementById('animal').addEventListener('change', (event) => {
    const animalSeleccionado = event.target.value;
  
    const datosAnimal = listaAnimales.find(animal => animal.name === animalSeleccionado);
  
    if (datosAnimal) {
        const previewDiv = document.getElementById('preview');
        previewDiv.style.backgroundImage = `url(assets/imgs/${datosAnimal.imagen})`;
    }
  });
