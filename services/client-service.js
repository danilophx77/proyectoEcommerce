// Datos iniciales en caso de que el localStorage este vacio
const initialData = [
  {
    "nombre": "Producto XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/ydRhHsL/producto-1.png",
    "id": "1",
    "categoria": "Star wars",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Producto XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/35bTz5c/producto-2.png",
    "id": "2",
    "categoria": "Star wars",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Producto XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/1TybsXT/producto-3.png",
    "id": "3",
    "categoria": "Star wars",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Producto XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/C1VKkRC/producto-4.png",
    "id": "4",
    "categoria": "Star wars",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Producto XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/5xrv1Xq/producto-5.png",
    "id": "5",
    "categoria": "Star wars",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Producto XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/VjsTyxm/producto-6.png",
    "id": "6",
    "categoria": "Star wars",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Control XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/WyzMJtC/consola-1.png",
    "id": "7",
    "categoria": "Consolas",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Control y consola XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/0BpJthg/consola-2.png",
    "id": "8",
    "categoria": "Consolas",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Consola XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/JQjVwYX/consola-3.png",
    "id": "9",
    "categoria": "Consolas",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Consola XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/b3xr74X/consola-4.png",
    "id": "10",
    "categoria": "Consolas",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Consola XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/SrSD1fz/consola-5.png",
    "id": "11",
    "categoria": "Consolas",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Game Boy Color",
    "precio": "6000",
    "imagen": "https://i.ibb.co/SX5xWzC/consola-6.png",
    "id": "12",
    "categoria": "Consolas",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Camisa Atari",
    "precio": "6000",
    "imagen": "https://i.ibb.co/B3V2KrM/diversos-1.png",
    "id": "13",
    "categoria": "Diversos",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Camisa SNES",
    "precio": "6000",
    "imagen": "https://i.ibb.co/r2L7LDq/diversos-2.png",
    "id": "14",
    "categoria": "Diversos",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Control y consola XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/NxfKpVZ/diversos-3.png",
    "id": "15",
    "categoria": "Diversos",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Control y consola XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/0yzSJ50/diversos-4.png",
    "id": "16",
    "categoria": "Diversos",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Control y consola XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/LpY04k4/diversos-5.png",
    "id": "17",
    "categoria": "Diversos",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  },
  {
    "nombre": "Producto XYZ",
    "precio": "6000",
    "imagen": "https://i.ibb.co/JdfLkV6/diversos-6.png",
    "id": "18",
    "categoria": "Diversos",
    "descripcion": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habit."
  }
];

const getProductosLS = () => {
  const productos = localStorage.getItem('productos');
  if (productos) {
    return JSON.parse(productos);
  } else {
    localStorage.setItem('productos', JSON.stringify(initialData));
    return initialData;
  }
};

const setProductosLS = (productos) => {
  localStorage.setItem('productos', JSON.stringify(productos));
};

// Generador de ID (fallback simple si no se dispone de uuid, aunque se importa en html)
const generateId = () => {
  if (typeof uuid !== 'undefined' && uuid.v4) {
    return uuid.v4();
  }
  return Math.random().toString(36).substr(2, 9);
};

// Conexion (Mock con promesas para mantener compatibilidad)
const listaProductos = () => {
  return new Promise((resolve) => {
    resolve(getProductosLS());
  });
};

const crearProducto = (nombre, precio, imagen, categoria, descripcion) => {
  return new Promise((resolve) => {
    const productos = getProductosLS();
    const nuevoProducto = {
      nombre,
      precio,
      imagen,
      id: generateId(),
      categoria,
      descripcion
    };
    productos.push(nuevoProducto);
    setProductosLS(productos);
    resolve(nuevoProducto);
  });
};

const eliminarProducto = (id) => {
  return new Promise((resolve) => {
    let productos = getProductosLS();
    productos = productos.filter(producto => producto.id !== id);
    setProductosLS(productos);
    resolve({ success: true });
  });
};

// Detalles del producto por ID
const detalleProducto = async (id) => {
  return new Promise((resolve, reject) => {
    const productos = getProductosLS();
    const producto = productos.find(prod => prod.id === id);
    if (producto) {
      resolve(producto);
    } else {
      reject(new Error("Producto no encontrado"));
    }
  });
};

const actualizarProducto = (nombre, precio, imagen, id, categoria, descripcion) => {
  return new Promise((resolve, reject) => {
    let productos = getProductosLS();
    let index = productos.findIndex(prod => prod.id === id);
    if (index !== -1) {
      productos[index] = {
        nombre,
        precio,
        imagen,
        id,
        categoria,
        descripcion
      };
      setProductosLS(productos);
      resolve(productos[index]);
    } else {
      reject(new Error("Producto no encontrado para actualizar"));
    }
  });
};

export const clientServices = {
  listaProductos,
  detalleProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};
