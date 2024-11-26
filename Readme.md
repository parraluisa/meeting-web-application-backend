# Meeting App - Backend

Este es el backend de la aplicación de videoconferencias, desarrollado con Node.js y `socket.io`. Maneja la gestión de salas y participantes, proporcionando comunicación en tiempo real para la aplicación frontend.

## Características

- Gestión de salas de reunión.
- Sincronización en tiempo real de participantes.
- API WebSocket para comunicación en tiempo real con el frontend.

## Requisitos previos

Para ejecutar este proyecto, asegúrate de tener lo siguiente instalado en tu máquina:

- **Node.js** (versión 16 o superior).
- **npm** (o **yarn**, según prefieras).
- **MongoDB**

### ¿No tienes Node.js instalado?

Si no tienes **Node.js** y **npm** instalados, sigue estos pasos:

1. **Descargar Node.js**:
   - Ve a la página oficial de Node.js: [https://nodejs.org](https://nodejs.org)
   - Descarga la versión **LTS** (Long Term Support), que es la más estable y recomendada para la mayoría de los usuarios.
   - Ejecuta el instalador y sigue las instrucciones en pantalla. Esto instalará **Node.js** y **npm** automáticamente.

2. **Verificar la instalación**:
   Una vez instalado, abre una terminal y ejecuta los siguientes comandos para asegurarte de que Node.js y npm se instalaron correctamente:
   ```bash
   node -v
   npm -v

Deberías ver algo como:
   
   ```bash
    v16.x.x  # o una versión superior
    8.x.x    # versión de npm
```

### ¿No tienes MongoDB instalado?
Si aún no tienes MongoDB en tu máquina, sigue los siguientes pasos para instalarlo.

**Descargar MongoDB:**

Ve a la página oficial de MongoDB: https://www.mongodb.com/try/download/community
Selecciona tu sistema operativo y descarga la versión adecuada.

**Instalar MongoDB:**

- Windows: Ejecuta el archivo .msi descargado y sigue las instrucciones del instalador.
- macOS: Usa Homebrew con el siguiente comando:
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community@6.0
   ```
- Linux: Sigue las instrucciones detalladas en la documentación oficial de MongoDB para tu distribución aquí.


## Instalación

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
6. Inicia el servidor:
   ```bash
    node index.js
