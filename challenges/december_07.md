[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## Las cajas en 3D

Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

```javascript
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
```

Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".


> [!NOTE]
> La solución propuesta consiste en dividir el cubo en dos partes (dos bucles for).
> En el primer for se realiza la parte superior, cada fila yendo de 0 a el tamaño - 1. La primera fila al ser una arista
> será tratada de manera especial, solo con # y en el resto se introducirán los símbolos dependiendo del tamaño
> En el segundo bucle se irá desde la fila superior (tamaño) a 0, ya que las longitudes disminuyen conforme bajas en el cubo.
> La primera y la última fila serán tratadas de diferente manera al ser aristas (la primera también tiene "produndidad") y en el
> resto se incluirá el símbolo como anteriormente, pero esta vez reduciendo el número de símbolos.
> Esta solución tiene complejidad 7, por lo tanto es mejorable, pero ofrece un número elevado de operaciones por segundo.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_07.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_06.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_08.md)