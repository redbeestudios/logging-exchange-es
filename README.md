# Workshop de observavilidad.

## Intrucciones para levantar los servicios.

### exchange-bff

```
cd exchange-bff
```
```
npm run start
```

### forex-ms

```
cd feorex-ms
```
```
./gradlew quarkusDev
```

### docker-compose

Para levantar todo el sistema incluído elastic stack:
```
docker-compose build --parallel
docker-compose up -d
```

Para detener todos los containers 
```
docker-compose down -v
```

## Ejercicio

La idea es que jueguen un poco con la api (exchange-bff - forex-ms) y que identifiquen aquellos lugares donde tiene sentido agregar logs, atendiendo al nivel y a los elementos imprescindibles que se necesitan para su clara comprensión.

Actualmente dicho sistema consta de dos componentes, el exchange-bff, que como su nombre indica tiene la función de mediar entre el core y los posibles fronts que vayan a consumirnos, y el forex-ms, que tiene la responsabilidad de buscar el precio de conversión de una moneda con respecto a otra. 

Actualmente tenemos un bug reportado, pues al parecer, cada vez que le pegan al BFF para obtener la conversión de alguna moneda, este arroja un error 500 y no sabemos bien por qué es. Nuestra primera tarea es identificar el problema e intentar resolverlo agregando logs a discreción.

En el caso de que alguna de las dos monedas no existan en nuestra base, se está lanzando un error 500, lo cual, podría no estar del todo bien. Esta tarea consiste en solucionar este problema, al mismo tiempo que vamos agregando logs que nos puedan ayudar a detectar dónde está el inconveniente.

A tener en cuenta:

* Cada log debe tener un nivel coherente con su contexto.
* Se tendrá en cuenta la consistencia de los logs (ej, no loguear en distintos idiomas con formatos distintos).

