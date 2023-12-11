[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## Ordenando el almacén

Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. 
Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.

Los elfos tienen un sistema especial para organizar los regalos:

 - Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
 - Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
 - Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)


Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.

Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

```javascript
const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 
  2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
```

> [!NOTE]
> La solución propuesta consiste en dividir el cubo en dos partes (dos bucles for).
> En el primer for se realiza la parte superior, cada fila yendo de 0 a el tamaño - 1. La primera fila al ser una arista
> será tratada de manera especial, solo con # y en el resto se introducirán los símbolos dependiendo del tamaño
> En el segundo bucle se irá desde la fila superior (tamaño) a 0, ya que las longitudes disminuyen conforme bajas en el cubo.
> La primera y la última fila serán tratadas de diferente manera al ser aristas (la primera también tiene "produndidad") y en el
> resto se incluirá el símbolo como anteriormente, pero esta vez reduciendo el número de símbolos.
> Esta solución tiene complejidad 7, por lo tanto es mejorable, pero ofrece un número elevado de operaciones por segundo.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_08.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_07.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_09.md)