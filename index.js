const { ayuda } = require('./helper.js')

const suma = (ns) => {
  let acumulado = 0;
  for (i = 0; i < ns.length; i++) {
    acumulado += ns[i];
  }
  ayuda()
  return acumulado;
} 
// Un poco de texto para eliminar
const numeros = [1, 2, 3, 4, 5];

const multiplicados = numeros.map(x => x * 2)
// a pares
const parejas = numeros.map(x => [x, x])

const mascotas = [
  { nombre: 'Chanchito feliz', age: 3, tipo: 'perro' },
  { nombre: 'Pelusa', edad: 12, type: 'gato' },
  { nombre: 'Pulga', edad: 10, type: 'perro' },
  { nombre: 'Puchini', edad: 12, type: 'gato' },
]
// edad promedio
const edades = mascotas.map(x => x.edad)
const resultado = suma(edades)
console.log(resultado / edades.length);
