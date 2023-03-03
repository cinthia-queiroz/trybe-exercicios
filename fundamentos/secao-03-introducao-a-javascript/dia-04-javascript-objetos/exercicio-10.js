let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   function adicionaTurnoDaNoite(objeto, chave, valor) {
//     objeto[chave] = valor;
//   }

//   adicionaTurnoDaNoite(lesson2, 'turno', 'noite');
//   console.log(lesson2);

//   function listaKeys(objeto) {
//     for (let key in objeto) {
//         console.log(objeto[key]);
//       }
//   }

//   listaKeys(lesson3);

//   function tamanhoObjeto(objeto) {
//     let obj = Object.keys(objeto).length;
//     return obj;
//   }

// console.log(tamanhoObjeto(lesson1));

//   function listaValores(objeto) {
//     for (let value in objeto) {
//         console.log(objeto[value]);
//       }
//   }

//   listaValores(lesson3);

let allLessons = Object.assign({},{
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
})

console.log(allLessons);


function totalDeEstudantes(objeto) {
    let total = 0;
    let keys = Object.keys(objeto);

    for (let index = 0; index < keys.length; index += 1) {
        total += objeto[keys[index]].numeroEstudantes;
    }

    return total;
}

console.log(totalDeEstudantes(allLessons));