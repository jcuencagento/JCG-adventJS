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
> La solución propuesta consiste en comprobar si la palabra es directamente palíndroma convirtiendo a array y usando reverse, y en caso contrario
> doblemente iterar para ir cambiando las posiciones de cada uno de los carácteres con los que tiene a continuación. En cada iteración se comprueba
> de la misma manera que antes si la palabra ya es palíndroma y se devuelve dependiendo del resultado. Solución poco optimizada.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_11.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_10.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_12.md)
