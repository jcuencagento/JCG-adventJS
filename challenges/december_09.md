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
> La solución propuesta consiste en iterar el array de luces de manera inversa (para poder cambiar el primer valor), teniendo en cuenta que si
> el valor de la posicióna actual y el de la anterior son iguales, conviene cambiar el de más atrás.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_09.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_08.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_10.md)
