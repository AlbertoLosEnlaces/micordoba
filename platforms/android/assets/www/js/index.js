var app = {
    initialize: function() {
        console.log("inicializando app");
        document.addEventListener('deviceready', this.onDeviceReady, false);
        console.log("app inicializada");        

    },
    
    onDeviceReady: function() {
        // app.receivedEvent('deviceready');
        console.log("El dispositivo ya esta preparado");

        //usa jquery
        $("#btnfoto").click(function(event) {
        	navigator.camera.getPicture(cameraSuccess, cameraError, {});
        });
        
    }
};

app.initialize();

function cameraSuccess () {
	alert ("La camara ha funcionado bien");
}

function cameraError () {
	alert ("La camara ha funcionado bien");
}