[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## Optimizando el alquiler

En Rovaniemi, Finlandia 🇫🇮, los trineos 🛷 se alquilan por intervalos de tiempo. Cada intervalo se representa como un array de dos elementos, 
donde el primer elemento es el inicio del alquiler y el segundo es el final.

Por ejemplo, el array [2, 7] representa un alquiler que comienza en la hora 2 y termina en la hora 7. El problema es que a veces los intervalos
se superponen entre sí, haciendo que sea un lío entender de qué hora a qué hora se alquiló el trineo.

Nos piden que, para simplificar la tarea de calcular el tiempo total de alquiler, escribamos una función que fusione todos los intervalos
superpuestos y devolver un array de intervalos ordenados:

```javascript
optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
]) // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
]) // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
]) // [[1, 2], [3, 4], [5, 6]]
```

Puedes asumir que el primer elemento de cada intervalo siempre es menor o igual que el segundo elemento. 
Pero los intervalos no están necesariamente ordenados.
Los números de horas pueden llegar hasta la cifra 9999.


> [!NOTE]
> La solución propuesta consiste en ordenar los intervalos acorde a su inicio, ya que se puede asumir que el primer elemento es < o =
> Después se inicializa el resultado con el primer intervalo y se itera sobre todos los posibles, recogiendo el último valor del último
> resultado en cada iteración, si se encuentra que el intervalo iterado está por encima de este, se añade un nuevo intervalo, si no
> se mira si el final de dicho intervalo está por encima del último valor actual, para actualizarlo en ese caso.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_17.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_16.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_18.md)
