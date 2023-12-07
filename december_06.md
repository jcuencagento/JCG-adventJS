[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## Los renos a prueba

Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

 - > = Avanza a la derecha
 - < = Avanza a la izquierda
 - * = Puede avanzar o retroceder
Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar todos los movimientos.

En el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la derecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.

Crea una función maxDistance que reciba la cadena de texto movements y devuelva la máxima distancia que puede recorrer el reno en cualquier dirección:


```javascript
const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
```


Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es el valor absoluto de la distancia recorrida máxima al finalizar los movimientos.


> [!NOTE]
> La solución propuesta consiste en convertir el string en un array con un split, y a continuación filtrar tanto los carácteres
> < como los >, calculando la longitud resultante y sabiendo que los asteriscos serán la diferencia de la longitud total con la 
> suma de estos dos carácteres, por último se devolverá la resta en valor absoluto de < y >, sumado al asterisco que actúa como comodín.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_06.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_05.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_07.md)