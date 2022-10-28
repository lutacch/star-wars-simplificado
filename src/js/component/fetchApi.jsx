export const fetchApi = async () => {

    const respuesta = await fetch ("https://pokeapi.co/api/v2/pokemon/")
    const respuestaJson = await respuesta.json();
    return respuestaJson.results
}

