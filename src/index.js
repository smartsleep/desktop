const { app, session, BrowserWindow } = require('electron')

//const debug = require('electron-debug');
//debug();

function createWindow () {
  const filter = {
    urls: ["http://*/*", "https://*/*"]
  }
  session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
    details.requestHeaders['Authorization'] = "Bearer <AUTH TOKEN>";
    callback({ cancel: false, requestHeaders: details.requestHeaders })
  })

  let win = new BrowserWindow({
    width: 1280,
    height: 1024,
    webPreferences: {
      plugins: true,
      nodeIntegration: false,
      webSecurity: false,
      allowDisplayingInsecureContent: true,
      allowRunningInsecureContent: true
    }
  })

  win.loadURL('http://localhost:8080/index.php/admin')
}

app.on('ready', createWindow)
