[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## Ponemos en marcha la fábrica

En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, 
dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

```javascript
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
```

> [!NOTE]
> La solución propuesta consiste en filtrar los elementos que una vez iterados (pasando el string a array),
> devuelve true la función every, que checkea que cada carácter del "gift" esté incluido en el array de "materiales".


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_02.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_01.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_03.md)