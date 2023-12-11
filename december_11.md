[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## Los elfos estudiosos

En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. 
Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

 - Si ya es un palíndromo, un array vacío.
 - Si no es posible, null.
 - Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.

Por ejemplo:

```javascript
getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
```

Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.


> [!NOTE]
> La solución propuesta consiste en dividir el cubo en dos partes (dos bucles for).
> En el primer for se realiza la parte superior, cada fila yendo de 0 a el tamaño - 1. La primera fila al ser una arista
> será tratada de manera especial, solo con # y en el resto se introducirán los símbolos dependiendo del tamaño
> En el segundo bucle se irá desde la fila superior (tamaño) a 0, ya que las longitudes disminuyen conforme bajas en el cubo.
> La primera y la última fila serán tratadas de diferente manera al ser aristas (la primera también tiene "produndidad") y en el
> resto se incluirá el símbolo como anteriormente, pero esta vez reduciendo el número de símbolos.
> Esta solución tiene complejidad 7, por lo tanto es mejorable, pero ofrece un número elevado de operaciones por segundo.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_11.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_10.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_12.md)
