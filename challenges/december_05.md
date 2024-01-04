[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## El CyberTruck de Santa

Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

 - . = Carretera
 - S = Trineo de Santa
 - * = Barrera abierta
 - | = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

```javascript
const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
```

El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

Los elfos se inspiraron en este reto de Code Wars.


> [!NOTE]
> La solución propuesta consiste en convertir el string en un array con un split, tener en cuenta el último valor pasado por Santa,
> en principio, será un punto, el índice en el que se encuentra Santa y el array de carreteras. Al tener una carretera asignada por defecto,
> está se introduce en el array y el bucle for comienza en 1 no en 0, tras ello se comprobará si el tiempo es mayor que 4, ya que las puertas se abren
> en ese momento, y si no, se comprueba si hay una que corte el paso. Por tanto si es posible avanzar se realizará una conmutación guardando el valor
> por el que ha pasado Santa y en cualquier caso se introducirá el string de la carretera en el array de resultados.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_06.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_05.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/challenges/december_07.md)