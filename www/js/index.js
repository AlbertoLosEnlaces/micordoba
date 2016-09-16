var app = {
    initialize: function() {
        console.log("inicializando app");
        document.addEventListener('deviceready', this.onDeviceReady, false);
        console.log("app inicializada");
    },
    
    onDeviceReady: function() {
        // app.receivedEvent('deviceready');
        console.log("El dispositivo ya est´a preparado");
        
    }
};

app.initialize();