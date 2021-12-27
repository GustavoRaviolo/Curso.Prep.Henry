// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimo=(array.length-1);
  return array[ultimo];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var tamano=array.length;
  var nvoarray=new array[tamano];
  for(let i=0;i<tamano;i++)
  {
    nvoarray[i]=array[i]+1;
  };
  return nvoarray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  // El método push() es usado para agregar un elemento al final de un arreglo.
  ArrayBuffer.push("elemnto");
  return array;
}

//CONST: Es una constante la cual NO cambiara su valor en ningún momento en el futuro.

//VAR: Es una variable que SI puede cambiar su valor y su scope es local.

//LET: Es una variable que también podra cambiar su valor, pero solo vivirá(Funcionara) en el bloque donde fue declarada.


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift("elemento");
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // JOIN() El método join concatena todos los elementos del vector en un único string.
  const array=["Hello", "world"];
  var cadena_array=array.join(" ");
  return cadena_array;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(i=0;i<array.length();i++)
  {
    if(array[i]===elemento)
      return true;
  }
  return false;


}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  for(let i=0; i<numeros.length;i++)
  {
    suma=suma+numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma=0;
  var promedio=0;
  for (let i=0;i<resultadosTest.length;i++)
  {
    suma=suma+resultadosTest[i];
  }
  return promedio=suma/resultadosTest.length;

  // Tambien se podria haber reutilizado la funcion anterior que devuelve la suma total pero el vector se llama diferente

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max(...numeros);
  //Alternativa
  //return Math.max.apply(null,numeros); Esta ultima es mas efectiva porque algunos navegadores no aceptan la anterior
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  if(arguments.length==0)
    return 0;
  var prod=1;
    for(let i=0;i<arguments.length;i++)
  {
    prod=prod*arguments[i];
  }
  return prod;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var contador=0;
  for(let i=0; i<arreglo.length;i++)
  {
    if(arreglo[i]>18)
       {
          
          contador++;
       }
  }
  return contador;


}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
   
    if(numeroDeDia===1 || numeroDeDia===7)
      return "Es fin de Semana";
    else
      return "Es dia Laboral";  
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
 let cadena= n.toString();
  
  if(cadena.charAt(0)==="9")
    return true;
  else
    return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  var contador=0;
  for(let i=0;i<arreglo.length;i++)
       {
          if(arreglo[0]===arreglo[i])
          {
            contador=contador+1;
          }
          
       }
       if (contador===arreglo.length)
       {
        console.log("Son todos iguales los elementos del array");
        console.log("Cantidad total del array: "+contador+"");
        return true;
       }
       else if (contador !=0)
       {
         console.log("No son todos iguales pero si hay elementos que se repiten: ");
         console.log("Cantidad de elementos que se repiten: "+contador+"");
         return false;
       }
       else
       {
          console.log("No son iguales y tampoco se repite ningun elemento");
          return false;
       }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array_nvo=[];
  for (let i=0;i<array.length;i++)
  {
   if(array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre")
   {
     array_nvo.push(array[i]); // Metodo push adiciona un elemento al final del vector. .push("nvo_elemento")
   }
  }
  if(array_nvo.length===2)
      return array_nvo;
  else
    return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  nvo_array=[];
  for(let i=0; i<array.length; i++)
  {
    if(array[i]>100)
    {
      nvo_array.push(array[i]);
    }
  }
  return nvo_array;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
 array=[];
 var sum=numero;
  for(let i=0;i<10;i++)
 {
   if (sum===i)
      break;
   else
   {
   sum=numero +2;
   array.push(sum);
  }
 }
  if (i<10)
    return "Se interrumpió la ejecución";
  else
    return array;



}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  array=[];
  var suma=numero;
  for (var i=0;i<10;i++)
  {
    if(i===4) // Pongo 4 porque "i" comienza de cero entonces cuando "i" llegue a 4 van a ser 5 iteracciones.
      continue;
    else
    {
      suma=suma+2;
      array.push(suma);
    }
  }
  return array;





}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
