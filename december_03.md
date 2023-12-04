[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## El elfo travieso

En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, 
añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified 
que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. 
Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

```javascript
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
```


A tener en cuenta:
 - Siempre habrá un paso de diferencia o ninguno.
 - La modificación puede ocurrir en cualquier lugar de la cadena.
 - La secuencia original puede estar vacía


> [!NOTE]
> La solución propuesta consiste en pasar el array "original" a Set (elimina repeticiones) para después iterar
> el array "modified". En esta iteración, o se elimina el carácter iterado en el set "original" si existe o añade
> el carácter si no aparecía en el set. Para finalizar devuelve el primer carácter diferente o un string vacío.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_03.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_02.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_04.md)