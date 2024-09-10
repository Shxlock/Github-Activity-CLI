const username = process.argv[2] ?? 'shxlock';


fetch(`https://api.github.com/users/${username}/events`)
    .then(response => response.json())
    .then(data => {
        // Recorre el array de eventos
        data.forEach(event => {
            console.log(`Evento: ${event.type}`);
            console.log(`Repositorio: ${event.repo.name}`);
            console.log(`Fecha del evento: ${event.created_at}`);
            console.log('------------------------------------------');
        });
    })
    .catch(error => console.log(error));



