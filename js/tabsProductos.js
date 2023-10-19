//arrego para listado de productos de promociones
const productosPromociones = [

  //codigo para crear productos, se repite tantas veces como productos existan
  {
    imagen: 'images/fotos/ostras.jpeg', //imagen
    titulo: 'Pack 25 Ostras medianas', //titulo
    precio: '$10.990', //precio en pesos chilenos
    detalle: 'Ostras medianas, pack de 25 unidades en bandejas.', // detalle maximo 2 lineas
    enlace: 'pages/productos-detalle.html', //enlace, por ahora he creado solo una pagina ejemplo
  },
  //producto 2
  {
    imagen: 'images/fotos/suspirolimeno.jpeg',
    titulo: 'Postre Suspiro Limeño',
    precio: '$3.290',
    detalle: 'El suspiro de limeña es un postre muy típico peruano.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 3
  {
    imagen: 'images/fotos/erizos.jpeg',
    titulo: 'Erizos varios tamaños',
    precio: '$22.000',
    detalle: 'Erizo pote 200 g y la mejor variedad y calidad de productos.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 4
  {
    imagen: 'images/fotos/ostras.jpeg',
    titulo: 'Pack 25 Ostras medianas',
    precio: '$10.990',
    detalle: 'Ostras medianas, pack de 25 unidades en bandejas.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 5
  {
    imagen: 'images/fotos/locos.jpeg',
    titulo: 'Locos Cocidos congelados',
    precio: '$33.000',
    detalle: 'Locos cocidos congelados tamaño a eleccion 6 y 12 unidades.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 6
  {
    imagen: 'images/fotos/ostras.jpeg',
    titulo: 'Pack 25 Ostras medianas',
    precio: '$10.990',
    detalle: 'Ostras medianas, pack de 25 unidades en bandejas.',
    enlace: 'pages/productos-detalle.html',
  },

];

//arrego para listado de productos de congelados
const productosCongelados = [

  //producto 1
  {
    imagen: 'images/fotos/erizos.jpeg',
    titulo: 'Erizos varios tamaños',
    precio: '$22.000',
    detalle: 'Erizo pote 200 g y la mejor variedad y calidad de productos.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 2
  {
    imagen: 'images/fotos/machas.jpeg',
    titulo: 'Machas parmesanas 12 unidades',
    precio: '$11.000',
    detalle: 'Bandeja de machas parmesanas de 12 unidades, medianas, selladas al vacio.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 3
  {
    imagen: 'images/fotos/ostras.jpeg',
    titulo: 'Pack 25 Ostras medianas',
    precio: '$10.990',
    detalle: 'Ostras medianas, pack de 25 unidades en bandejas.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 4
  {
    imagen: 'images/fotos/erizos.jpeg',
    titulo: 'Erizos varios tamaños',
    precio: '$22.000',
    detalle: 'Erizo pote 200 g y la mejor variedad y calidad de productos.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 5
  {
    imagen: 'images/fotos/locos.jpeg',
    titulo: 'Locos Cocidos congelados',
    precio: '$33.000',
    detalle: 'Locos cocidos congelados tamaño a eleccion 6 y 12 unidades.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 6
  {
    imagen: 'images/fotos/ostras.jpeg',
    titulo: 'Pack 25 Ostras medianas',
    precio: '$10.990',
    detalle: 'Ostras medianas, pack de 25 unidades en bandejas.',
    enlace: 'pages/productos-detalle.html',
  },

];

//arrego para listado de productos de mariscos
const productosMariscos = [

  //producto 1
  {
    imagen: 'images/fotos/machas.jpeg',
    titulo: 'Machas parmesanas 12 unidades',
    precio: '$11.000',
    detalle: 'Bandeja de machas parmesanas de 12 unidades, medianas, selladas al vacio.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 2
  {
    imagen: 'images/fotos/ostras.jpeg',
    titulo: 'Pack 25 Ostras medianas',
    precio: '$10.990',
    detalle: 'Ostras medianas, pack de 25 unidades en bandejas.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 3
  {
    imagen: 'images/fotos/erizos.jpeg',
    titulo: 'Erizos varios tamaños',
    precio: '$22.000',
    detalle: 'Erizo pote 200 g y la mejor variedad y calidad de productos.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 4
  {
    imagen: 'images/fotos/locos.jpeg',
    titulo: 'Locos Cocidos congelados',
    precio: '$33.000',
    detalle: 'Locos cocidos congelados tamaño a eleccion 6 y 12 unidades.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 5
  {
    imagen: 'images/fotos/locos.jpeg',
    titulo: 'Locos Cocidos congelados',
    precio: '$33.000',
    detalle: 'Locos cocidos congelados tamaño a eleccion 6 y 12 unidades.',
    enlace: 'pages/productos-detalle.html',
  },
  //producto 6
  {
    imagen: 'images/fotos/ostras.jpeg',
    titulo: 'Pack 25 Ostras medianas',
    precio: '$10.990',
    detalle: 'Ostras medianas, pack de 25 unidades en bandejas.',
    enlace: 'pages/productos-detalle.html',
  },

];
//end

//contenedor de productos, la clase muestra los productos en el html index.html
const productsContainerPromociones = document.querySelector('.productos-container-promociones');
const productsContainerCongelados = document.querySelector('.productos-container-congelados');
const productsContainerMariscos = document.querySelector('.productos-container-mariscos');

//funcion carga productos en tabs
function cargarProductosTabs(productos, container) {
  productos.forEach(producto => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('col-lg-6');

    //se crea el contenido de la columna con bootstrap
    productDiv.innerHTML = `
      <a href="${producto.enlace}">
        <div class="d-flex align-items-center">
          <img class="img-fluid rounded" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="w-100 d-flex flex-column text-start ps-4">
            <h3 class="d-flex justify-content-between border-bottom pb-2">
              <div>${producto.titulo}</div>
              <small class="price">${producto.precio}</small>
            </h3>
            <div class="text">${producto.detalle}</div>
          </div>
        </div>
      </a>
    `;

    container.appendChild(productDiv);
  });
}

//se llama a la funcion cargarProductosTabs
cargarProductosTabs(productosPromociones, productsContainerPromociones);
cargarProductosTabs(productosCongelados, productsContainerCongelados);
cargarProductosTabs(productosMariscos, productsContainerMariscos);