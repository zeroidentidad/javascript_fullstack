const { app, BrowserWindow } = require('electron');

const { is, setContentSecurityPolicy } = require('electron-util');

const config = require('./config');

// para evitar recolección de basura, la ventana como una variable
let window;

// especificar los detalles de la ventana del navegador
function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false
        }
    });

    // cargar  HTML/URL
    //window.loadFile('index.html');
    if (is.development) {
        window.loadURL(config.LOCAL_WEB_URL);
    } else {
        window.loadURL(config.PRODUCTION_WEB_URL);
    }

    // si se está en modo desarrollo, abrir herramientas de desarrollo
    if (is.development) {
        window.webContents.openDevTools();
    }

    // establecer CSP production mode
    if (!is.development) {
        setContentSecurityPolicy(`
        default-src 'none';
        script-src 'self';
        img-src 'self' https://www.gravatar.com;
        style-src 'self' 'unsafe-inline';
        font-src 'self';
        connect-src 'self' ${config.PRODUCTION_API_URL};
        base-uri 'none';
        form-action 'none';
        frame-ancestors 'none';
        `);
    }    

    // cuando la ventana está cerrada, restablecer el objeto de la ventana
    window.on('closed', () => {
        window = null;
    });
}

// cuando electrón esté listo, crear la ventana de la aplicación
app.on('ready', createWindow);

// salir cuando todas las ventanas estén cerradas.
app.on('window-all-closed', () => {
    // en macOS, solo se cierra cuando un usuario cierra explícitamente la aplicación
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    // en macOS, volver a crear la ventana cuando se haga clic en el icono del dock
    if (window === null) {
        createWindow();
    }
});