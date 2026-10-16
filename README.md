# Monster Hunter Monsters

Misión M2 · Async Odyssey — Web Development I.

## Cómo probarlo
Abre en el buscador http://localhost:5173/. Es una web donde puedes 
ver los monstruos grandes de Monster hunter world la cual puedes 
organizar segun lo que busques y cuando clickas en un monstruo se 
te abre una trajeta mas grande mas detallada sobre el monstruo clickado.

## Uso de IA
Usé Claude como ayuda a la hora de programar y para la parte visual del 
proyecto.
Ejemplo 1 de prompt real: "Ayudame a hacer que la pagina quede bonita y 
como inserto imagenes en las tarjeas grandes?".
Ejemplo 2: "Explicarme que es vite, como se usa y como se hace lo 
de usar una apli publica".
Ejemplo 3: "como funciona la api de monster hunter?"

Escribí a mano: las funciones onlyLarge que devuelve los monstruos grandes,
filterBySpecies la cual filta segun la especie del monstruo, findById la 
cual retorna el monstruo con el mismo id, las funciones renderLoading y 
renderError las cuales muestran mensajes segun la situacion y renderPage 
la cual muestra la pagina base.

## Autopsia
1. Decidi proteger algunos accesos usando ?? [] por si ocurria que hubiera 
una lista vacia ya que originalemnte no lo tenia y causaba en riesgo de 
que la pagina se rompiera.