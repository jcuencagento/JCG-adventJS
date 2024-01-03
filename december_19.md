[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## Enfrenta el sabotaje

¡Alerta en la fábrica de juguetes de Santa! El Grinch 😈 se ha infiltrado en el almacén y ha saboteado algunos de los juguetes 💣.

Los elfos necesitan ayuda para encontrar los juguetes saboteados y eliminarlos antes de que llegue la Navidad. 
Para ello tenemos el mapa 🗺️ del almacén, que es una matriz.

Los * representan los juguetes saboteados y las celdas vacías con un espacio en blanco son los lugares seguros.

Tu tarea es escribir una función que devuelva la misma matriz pero, en cada posición, nos indique el número de juguetes saboteados que hay en las celdas adyacentes.

Si una celda contiene un juguete saboteado, debe permanecer igual. Si una celda no toca ningún juguete saboteado, debe contener un espacio en blanco .

```javascript
const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/
```

Ten en cuenta que…

- Las celdas diagonales también se consideran adyacentes.
- El tablero siempre tendrá al menos una celda vacía y un juguete saboteado *.
- El tablero puede tener cualquier tamaño.
- Los números son cadenas de texto.


> [!NOTE]
> La solución propuesta consiste en encontrar primero la fila del robot (!), a continuación su columna
> para después iterar por los movimientos e ir cambiando la posición en el caso de encontrar un punto.
> Por último se vuelve a poner el robot en la posición final dependiendo de la fila y columna.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_19.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_18.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_20.md)
