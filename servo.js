var five = require("johnny-five"),
  board, dedos;

board = new five.Board();

board.on("ready", function() {

  //Creacion de los pines de salida para los servos
  five.Servo({pin: 5,range: [0, 160] }); //Dedo Indice
  five.Servo({pin: 6,range: [0, 160] }); //Dedo Medio
  five.Servo({pin: 9,range: [0, 160] }); //Dedo Anular
  five.Servo({pin: 10,range: [0, 160] }); //Dedo Meñique
  five.Servo({pin: 11,range: [0, 160] }); //Dedo Pulgar
  
  // Inicializacion de los servos
  
  dedos = new five.Servos();

  board.repl.inject({
    dedos: dedos
  });
  console.log("movimiento de los dedos")
  dedos.sweep();

});ja y w