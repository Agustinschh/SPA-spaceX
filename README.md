# 🚀 SpaceX Launches SPA

Una Single Page Application (SPA) moderna que muestra lanzamientos de SpaceX usando la API oficial.

## ✨ Características

- **Datos reales** de lanzamientos de SpaceX
- **Navegación SPA** sin recarga de página
- **Diseño responsive** con CSS Grid
- **Información detallada** de cada misión
- **Parches de misiones** como imágenes
- **Estados visuales** (Exitoso, Fallido, Pendiente)
- **Build moderno** con Webpack y Babel

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones con Grid
- **JavaScript ES6+** - Lógica de la aplicación
- **Webpack** - Bundler y build tool
- **Babel** - Transpilador de JavaScript
- **Fetch API** - Consumo de la API de SpaceX

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm (viene con Node.js)

### Pasos para ejecutar

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd spacex-launches-spa
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación se abrirá automáticamente en `http://localhost:8080`

4. **Compilar para producción**
   ```bash
   npm run build
   ```
   Los archivos compilados se generarán en la carpeta `dist/`

## 📱 Funcionalidades

- **Página principal**: Lista de lanzamientos con parches de misiones
- **Vista de detalle**: Información completa de cada misión
- **Navegación**: Sistema de rutas basado en hash (#)
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Animaciones**: Transiciones suaves y efectos visuales

## 📊 API

Utiliza la [API oficial de SpaceX](https://api.spacexdata.com/v5/launches) para obtener datos reales de lanzamientos.

## 🎯 Estructura del Proyecto

```
spacex-launches-spa/
├── public/
│   └── index.html          # Template HTML base
├── src/
│   ├── pages/              # Páginas de la aplicación
│   │   ├── Home.js         # Lista de lanzamientos
│   │   ├── Character.js    # Detalle de lanzamiento
│   │   └── Error404.js     # Página de error
│   ├── routes/             # Sistema de rutas
│   │   └── index.js        # Router principal
│   ├── styles/             # Estilos CSS
│   │   └── styles.css      # Estilos principales
│   ├── templates/          # Plantillas reutilizables
│   │   └── Header.js       # Header de la aplicación
│   └── utils/              # Utilidades
│       └── getData.js      # Función para consumir API
├── .babelrc                # Configuración de Babel
├── .gitignore              # Archivos ignorados por Git
├── index.js                # Punto de entrada
├── package.json            # Configuración del proyecto
├── webpack.config.js       # Configuración de Webpack
└── README.md               # Este archivo
```

## 🔧 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm start` - Alias para `npm run dev`

## 🌐 Despliegue

Para desplegar en producción:

1. Ejecutar `npm run build`
2. Subir el contenido de la carpeta `dist/` a tu servidor web
3. Configurar el servidor para servir `index.html` en todas las rutas (SPA)

## 📝 Notas de Desarrollo

- La aplicación funciona completamente en el cliente
- Compatible con todos los navegadores modernos
- Optimizada para rendimiento con Webpack
- Código modular y mantenible

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ usando JavaScript vanilla, Webpack y la API de SpaceX**
