const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();


// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base ] = arg3.split('=');

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.america, ' fue creado exitosamente.'))
    .catch(err => console.log(err));