[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## Despliegue en viernes

Ayer viernes alguien hizo despliegue a producción y se rompió la aplicación de montaje de árboles de Navidad. Nos han pedido que lo arreglemos lo antes posible.

El problema es que el formato de los árboles ha cambiado. Es un array de números… ¡pero debería ser un objeto! Por ejemplo el árbol: [3, 1, 0, 8, 12, null, 1] se ve así:

```javascript
//        3
//      /   \
//     1     0
//    / \     \
//   8  12     1
```
Lo que necesitamos es transformar el array en un objeto donde cada nodo del árbol tiene las propiedades value, left y right.

Por ejemplo, al ejecutar tu función transformTree con [3, 1, 0, 8, 12, null, 1] debería devolver esto:

```javascript
{
  value: 3,
  left: {
    value: 1,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 12,
      left: null,
      right: null
    }
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}
```

El elfo que está de guardia y que intentó solucionar el problema antes de irse a casa, nos ha dejado algunas pistas:

Si un nodo no tiene valor, se representa con null. Por lo tanto, si un nodo tiene valor null, no tendrá hijos.
El nodo raíz se encuentra en el índice 0 del array.
Existe una relación entre el índice de un nodo y el índice de sus hijos. ¡Busca el patrón!


> [!NOTE]
> La solución propuesta consiste en la recursividad, considerando el nodo padre siempre en la posición cero y los hijos
> estarán a una distancia el doble de la altura (comenzando por 0), y asumiendo que el hijo a la izquierda será el impar
> y el de la derecha estará en la posición par.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_16.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_15.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_17.md)
