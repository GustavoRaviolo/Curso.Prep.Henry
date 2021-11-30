// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  
  if (x===y)
  {
    return x;
  }
  else
  {
        if(x>y)
        {
          var result=x;
          return result;
        }
         else 
         {
          var result=y;
            return result;
         }
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad>=18)
  return "Allowed";
  else
  return "Not allowed";

}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  switch (status) { 
    case 1: 
       return "ONline";
       break 
    case 2: 
    return "Away";
       break 
     
    default: 
      return "Offline";
}

}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch(idioma)
  {
    case "aleman":
      return "Guten Tag!";
      break;
    case "mandarin":
      return "Ni Hao!";
      break;
    case "ingles":
      return "Hello!";
    break;
    default:
      return "Hola!";
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch(color)
  {
  case "blue":
    return "This is blue";
    break;
  case "red":
    return "This is red";
    break;
  case "green":
    return "This is green";
    break;
  case "orange":
    return "This is orange";
    break;
  default:
    return "Color not found";

  }// Fin switch


}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  if (numero===10 || numero===5)
      return True;
    else
    return Fales;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero<50 && numero>20)
      return True;
    else
    return False;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Metodo math.floor -> devuelve el valor entero redondeado más bajo de la variable x. 
  // Ej: 45.99 devuelve 45 o -45.23  devuelve -46
  // Tu código:
  var resta=numero-Math.floor(numero); // Hago una resta del  numero obtenido menos el numero pasado por parametro.
  //si da 0 es porque era un entero
  if(resta===0)
      return "True";
  else
    return "False"

  // Tambien para ahorrar codigo se puede hacer ->

  if (numero-Math.floor(numero)===0) 
  return "True";
  else
    return "False"
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  if (numero%3===0)  //NOTA: El operador (%) devuelve el resto de la división
    return "fizz";
  else if (numero%5===0)
    return "buzz";
  else if(numero%3===0 && numero%7===0)
    return "fizzbuzzz";
  else
    return numero;

}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  if (num1>num2 && num1>num3 && num1>0)
    return "Numero 1 es MAYOR y positivo";
  else if(num1<0 || num2<0 || num3<0)
    return "Hay Negativos";
  else if (num3>num1 && num3>num2)
            return num3++;
  else if(num1===0 || num2===0 || num3===0)
          return "Error";
  else  
      return false;
 }

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  
  for (let i=2;i<numero;i++) //NOTA: Let declara una variable que solo existe en ese ambiente
    {
      if(numnero%i===0)  //NOTA: % devuelve el resto de una division
      {
        return false;
      }  
    };
    return true;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if(valor===true) // NOTA: se usa === y no == porque el primero compara tambien el tipo de variable, con el segundo si compara true=="true" daria verdadero y no seria correcto.
   return "Soy verdadero";
else
  return "Soy Falso";
  
}


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí 
  var nvoarray = new array[60];
  for (let i = 0; i <=60; i++) 
  {
       nvoarray[i]=(6 * i);
  };
  return nvoarray;
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
  if(numero.toString().length===3) // primero transformo el numero en una cadena para recien ahi poder contar los digitos.
      return true;
  else
     return false;
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var result=0;
  var i=0;
  do {
    i = i + 1;
    result = numero  + 5;
    numero=result;
  } while (i < 8);// NO se pone <=  8 porque comienza desde i=0
return (result);
  
  
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
