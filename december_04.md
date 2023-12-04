[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## Dale una vuelta a los paréntesis

En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: 
las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. 
Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, 
eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

```javascript
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
```

Notas:
    - Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
    - En el mensaje final no deben quedar paréntesis.
    - El nivel máximo de anidamiento es 2.

> [!NOTE]
> La solución propuesta consiste en iterar sobre el mensaje mientras incluya algún paréntesis, para ello se recoge
> el índice del último paréntesis de apertura y el primero de cierre, para hacer un reverse del array (formado por el string)
> y volver a hacer el mismo proceso hasta que no queden paréntesis.

[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_04.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_03.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_05.md)