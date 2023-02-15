

//  Endpoint que genera chistes aleatorios
const jokeUrl     = 'https://api.chucknorris.io/jokes/random';


export const obtenerChiste = async() => {

    try {

        const resp = await fetch( jokeUrl );

        if( !resp.ok ) throw 'No se pudo realizar la peticion';

        // FORMA MAS EXTENSA, GUARDANDO EL AWAIT EN UNA VARIABLE
        // const chiste = await resp.json();

        const { icon_url, id, value } = await resp.json();  

        return { icon_url, id, value };

    } catch(err) {

        throw err

    }

}
