# Proyecto Final para el curso React JS - CODERHOUSE
# [E-Commerce](https://cessarmartinez.github.io/DesafioReactJS/)

## Navegación
![Alt Text](https://i.postimg.cc/9QWscF9H/E-Commerce.gif)

## Características de la app
- Al elegir una categoría sólo se mostrarán los artículos de esa categoría.
- No se pueden comprar más artículos de los que hay en stock.
- La orden de compra se guarda en firebase.
- la app obtiene los productos desde una base de datos (firebase).

## Instalacion

Para instalar el proyecto con npm:
```
  git clone https://github.com/KernAgustin/proyectofinal-react
  npm install
  npm start
```
- debera crear una cuenta en firebase y crear un proyecto.
- Luego crear una base de datos para el proyecto con las siguientes colecciones:
  - productos:
   ```
   {
      "name": "string",
      "category": "string",
      "description": "string",
      "price": "number",
      "img": "string",
      "stock": "number"
   }
  ```

## Librerias

 - [Chakra UI](https://chakra-ui.com)
 - [React Router DOM](https://www.npmjs.com/package/react-router-dom)
