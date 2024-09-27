console.log("Se lee archivo JSON con datos de los animales");
// este archivo lee los datos de animales.json y los carga en un a variable para su posterior consulta
let listaAnimales = [];

// Carga datos del JSON
async function obtenerDatosAnimales() {
  try {
    const response = await fetch('./animales.json');
    const data = await response.json();
    return data.animales;
  } catch (error) {
    console.error('Error al cargar los datos:', error);
    return [];
  }
}
// IIFEE PARA CARGAR LOOS DATOS DE ANIMALES
(async function() {
    listaAnimales = await obtenerDatosAnimales();
  console.log('Datos de animales cargados desde iiffee:', listaAnimales);
})();

export { listaAnimales };
