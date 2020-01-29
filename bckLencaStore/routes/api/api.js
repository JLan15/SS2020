/// rutas => router => app + express

/// rutas => router:entidad => router:api => app:express

var express = require('express');
var router = express.Router();

//http://localhost:3000/api/version
router.get('/version', function(req, res){
    res.status(200).json({"version":"API v1.0"});
});

router.get('/Yo', function(req, res){
    res.status(200).json({"Cuenta":"0801199216259", "Nombre":"Jose Landa"});
});
module.exports = router;





/*var mensaje = "Hola Mundo";

var libLencaFunciones = {};

libLencaFunciones.mensaje = "Hola Mundo";
libLencaFunciones.version = "v1.0";
libLencaFunciones.sayHello = ()=>{
    console.log("Hello");
}

module.exports = mensaje;
*/
