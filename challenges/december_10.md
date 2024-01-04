[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## Crea tu propio árbol de navidad

¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, 
la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

```javascript
   1
  2 3
 1 2 3
1 2 3 1
   |
```

Si recibimos la cadena '*@o' y el número 3, el árbol que debemos devolver es:

```javascript
  *
 @ o
* @ o
  |
```

Nota:

 - El árbol siempre debe estar centrado, para ello añade espacios en blanco a la izquierda de cada línea.
 - Crea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.
 - Los adornos tienen un espacio en blanco entre ellos de separación.


> [!NOTE]
> La solución propuesta consiste en, primero repetir los carácter del árbol a un número suficiente (altura*(altura-1)), para después iterar
> sobre dos variables (índice de altura e índice de elemento del árbol), añadiendo un padding de espacios al comienzo de cada línea dependiendo
> del índice de altura y espacios entre los carácteres, más el salto de línea. Por último añadir altura-1 espacios, el palo y el último salto de línea.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_10.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_09.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_11.md)
