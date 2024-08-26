require('./polyfill/core.js');

const { ipcRenderer } = require('electron');

ipcRenderer.on('navigate', (event, route) => {
	window.location.hash = route;
});