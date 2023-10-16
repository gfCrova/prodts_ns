
export const getProducts = async (path) => {

    try {
        const results = await fetch(path);
        const data = await results.json();
        return data;
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        throw error; // Puedes manejar el error aquí o relanzarlo para que lo maneje quien llame a esta función.
      }
}

export const productos = async () => {
    try {
        const productsData = await getProducts();
        const productTitles = productsData.map(prod => prod);
        return productTitles;
      } catch (error) {
        // Maneja cualquier error que ocurra al obtener los productos o al procesar los títulos.
        console.error("Error al obtener los títulos de los productos:", error);
        throw error; // Puedes manejar el error aquí o relanzarlo para que lo maneje quien llame a esta función.
      }
};