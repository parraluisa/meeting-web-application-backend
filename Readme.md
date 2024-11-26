# Meeting App - Backend

Este es el backend de la aplicación de videoconferencias, desarrollado con Node.js y `socket.io`. Maneja la gestión de salas y participantes, proporcionando comunicación en tiempo real para la aplicación frontend.

## Características

- Gestión de salas de reunión.
- Sincronización en tiempo real de participantes.
- API WebSocket para comunicación en tiempo real con el frontend.

## Requisitos previos

- Node.js (versión 16 o superior).
- npm (o yarn, según prefieras).
- 

## Instalación

## Instalación de MongoDB Compass

MongoDB Compass es una herramienta gráfica para gestionar tu base de datos MongoDB de manera visual y sencilla.

### Pasos para instalar MongoDB Compass

1. **Descarga MongoDB Compass**:
   - Dirígete a [la página de descarga de MongoDB Compass](https://www.mongodb.com/try/download/compass).
   - Selecciona tu sistema operativo y haz clic en "Download".

2. **Instala MongoDB Compass**:
   - **Windows**: Ejecuta el archivo `.msi` descargado y sigue las instrucciones del instalador.
   - **macOS**: Abre el archivo `.dmg` descargado y arrastra el ícono de MongoDB Compass a la carpeta de Aplicaciones.
   - **Linux**: Sigue las instrucciones de instalación específicas para tu distribución en [la documentación oficial de MongoDB](https://www.mongodb.com/docs/compass/current/install/).

3. **Inicia MongoDB Compass**:
   - **Windows**: Busca "MongoDB Compass" en el menú de inicio.
   - **macOS**: Abre la carpeta de Aplicaciones y haz clic en "MongoDB Compass".
   - **Linux**: Ejecuta `mongodb-compass` desde la terminal o desde el menú de aplicaciones.

## Instalación y ejecución repositorio

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd meeting-room-backend

2. Instala las dependencias:
   ```bash
    npm install

4. Crea un archivo .env en la raíz del proyecto con las siguientes variables:
   ```bash
    MONGO_URI=mongodb://localhost:27017/meeting-web-application
    PORT=3001
5. Inicia el servidor:
    node index.js

