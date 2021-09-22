const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 1, listar, hasta) => {

    return new Promise((resolve, reject) => {
        if(isNaN(base)) {
            reject(`El valor ${base} no es valido, por favor ingresa un número.`);
        } else {

            let salida = '';
            let consola = '';
        
            
            for (let i = 0; i <= hasta; i++) {
                salida += `${base} x ${i} = ${base * i}\n`;
                consola += `${colors.green(base)} ${'x'.magenta} ${colors.green(i)} ${'='.blue} ${colors.green(base * i)}\n`;
            }
            if(listar) {
                
                console.log('==============================='.magenta);
                console.log(`     ---> TABLA DEL ${colors.blue(base)} ${'<---'.white}     `.white.bold);
                console.log('==============================='.magenta);

                console.log(consola);
            }
            

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
            resolve(`tabla-${base}.txt`);
        }
    });

}

module.exports = {
    crearArchivo
};