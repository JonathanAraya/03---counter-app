export const getImagen = async() => {

    try {

        const apiKey = 'p7zkozeT34GoQ9fh7AYs9QdSqa9v0kdQ';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return('Error al obtener la URL');
    }
    
    
    
}
