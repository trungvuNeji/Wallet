const electron = require('electron');
const url = require('url');
const path = require('path');

const {
  app,
  BrowserWindow,
  Menu,
  ipcMain
} = electron;

// SET ENV
process.env.NODE_ENV = 'production';

let mainWindow;

// Listen for app to be ready
app.on('ready', function() {
  // Create new window, default style
  mainWindow = new BrowserWindow({});
  // Load html into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/app/client/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // mainWindow.loadURL('http://fspdoable.herokuapp.com/');

  //Quit app when closed
  mainWindow.on('close', function() {
    app.quit();
  });

});