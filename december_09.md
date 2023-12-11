[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## Alterna las luces

Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. 
Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), 
devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

```javascript
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)
```


> [!NOTE]
> La solución propuesta consiste en dividir el cubo en dos partes (dos bucles for).
> En el primer for se realiza la parte superior, cada fila yendo de 0 a el tamaño - 1. La primera fila al ser una arista
> será tratada de manera especial, solo con # y en el resto se introducirán los símbolos dependiendo del tamaño
> En el segundo bucle se irá desde la fila superior (tamaño) a 0, ya que las longitudes disminuyen conforme bajas en el cubo.
> La primera y la última fila serán tratadas de diferente manera al ser aristas (la primera también tiene "produndidad") y en el
> resto se incluirá el símbolo como anteriormente, pero esta vez reduciendo el número de símbolos.
> Esta solución tiene complejidad 7, por lo tanto es mejorable, pero ofrece un número elevado de operaciones por segundo.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_09.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_08.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_10.md)
