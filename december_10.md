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
> La solución propuesta consiste en dividir el cubo en dos partes (dos bucles for).
> En el primer for se realiza la parte superior, cada fila yendo de 0 a el tamaño - 1. La primera fila al ser una arista
> será tratada de manera especial, solo con # y en el resto se introducirán los símbolos dependiendo del tamaño
> En el segundo bucle se irá desde la fila superior (tamaño) a 0, ya que las longitudes disminuyen conforme bajas en el cubo.
> La primera y la última fila serán tratadas de diferente manera al ser aristas (la primera también tiene "produndidad") y en el
> resto se incluirá el símbolo como anteriormente, pero esta vez reduciendo el número de símbolos.
> Esta solución tiene complejidad 7, por lo tanto es mejorable, pero ofrece un número elevado de operaciones por segundo.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_10.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_09.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_11.md)
