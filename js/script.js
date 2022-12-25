function getCharacters(done){

    const results = fetch('https://rickandmortyapi.com/api/character');
    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
        
        <article class="container_personaje">
            <div class="image-container">
                <img class="image_1" src="${personaje.image}" alt="Personaje">
            </div>
            <h2 class="personaje_info_name">${personaje.name}</h2>
            <h3 class="personaje_info">Estatus: ${personaje.status}</h3>
            <h3 class="personaje_info">Especie: ${personaje.species}</h3>
            <h3 class="personaje_info">Genero: ${personaje.gender}</h3>
            <h3 class="personaje_info">Origen: ${personaje.origin.name}</h3>
            <h3 class="personaje_info">Locación: ${personaje.location.name}</h3>
        </article>
        `);

        const main = document.querySelector('main');
        main.append(article);
    });
})