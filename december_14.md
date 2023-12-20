[🏡 Home](https://github.com/jcuencagento/JCG-adventJS)

## Evita la alarma

Con el tema de las redes sociales, Santa Claus tiene pánico que los niños se despierten mientras él está repartiendo regalos en sus casos, usen el móvil para grabarlo y se haga viral en TikTok.

Quiere evitarlo a toda costa. Cada casa en esa calle tiene un número de regalos preparados. Sin embargo, las casas tienen un sistema de seguridad conectado entre casas adyacentes, por lo que no puede dejar los regalos en dos casas seguidas, o se activará la alarma que alertará a los niños.

Dada un array de enteros no negativos regalos que representa la cantidad de regalos en cada casa, tu tarea es ayudar a Papá Noel a determinar la máxima cantidad de regalos que puede entregar en una noche sin activar ninguna alarma.

```javascript
maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
```

> [!NOTE]
> La solución propuesta consiste en ir diviendo el array de houses en parejas para posteriormente iterar
> sobre todas las casas siguientes e ir añadiendo el máximo de las sumas saltándose un valor.


[✅ Solución](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_14.js)


[⬅️ Back](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_13.md)


[➡️ Next](https://github.com/jcuencagento/JCG-adventJS/blob/master/december_15.md)
