let placeIndex = 0;

const hero = document.querySelector("section#hero");
const heroTitle = hero.querySelector('.title h1');
const heroSubtitle = hero.querySelector('.title h2');

const links = hero.querySelectorAll('.link-item');

const places = [{
    name: 'Beco do Batman',
    description: 'Os grafites mais irados de SAMPA estão aqui!',
    background: 'beco-do-batman.png',
}, {
    name: 'Zoológico de São Paulo',
    description: 'Aqui só tem fera.',
    background: 'zoologico.png',
}, {
    name: 'Museu do Futebol',
    description: 'Conheça a história do esporte mais praticado no Brasil.',
    background: 'museu-futebol.jpg',
}, {
    name: 'Parque Ibirapuera',
    description: 'Venha passar mais tempo perto da natureza.',
    background: 'ibirapuera.webp',
}];

function showPlace() {

    if (placeIndex > 3) placeIndex = 0;

    const place = places[placeIndex];

    hero.style.backgroundImage = `url("/assets/images/${place.background}")`;
    heroTitle.innerText = place.name;
    heroSubtitle.innerText = place.description;

    links.forEach((element) => element.classList.remove('active'));

    hero.querySelector(`.link-item[data-place="${placeIndex}"]`).classList.add('active');

    placeIndex++;

}

let placeInterval = setInterval(showPlace, 7000);

showPlace();

links.forEach((linkElement) => {

    linkElement.addEventListener('click', () => {

        clearInterval(placeInterval);

        placeIndex = linkElement.dataset.place;

        showPlace();

        placeInterval = setInterval(showPlace, 7000);

    });

});