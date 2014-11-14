var five = require("johnny-five"),
  keypress = require("keypress"),
  board;

keypress(process.stdin);

board = new five.Board();

board.on("ready", function() {

  console.log("Let's test a simple servo. Use Up and Down arrows for CW and CCW respectively. Space to stop.");
 
board.on("ready", function() {
 
  //Creacion de los pines de salida para los servos
  five.Servo({pin: 5,range: [0, 160] }); //Dedo Indice
  five.Servo({pin: 6,range: [0, 160] }); //Dedo Medio
  five.Servo({pin: 9,range: [0, 160] }); //Dedo Anular
  five.Servo({pin: 10,range: [0, 160] }); //Dedo Meñique
  five.Servo({pin: 11,range: [0, 160] }); //Dedo Pulgar
  
  // Inicializacion de los servos
  
  dedos = new five.Servos();
   process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", function(ch, key) {

    if (!key) {
      return;
    }

    if (key.name === "q") {

      console.log("Quitting");
      process.exit();

    } else if (key.name === "up") {

      console.log("cierra");
      servo.cw();

    } else if (key.name === "down") {

      console.log("abre");
      servo.ccw();

    } else if (key.name === "space") {

      console.log("Stopping");
      servo.stop();

    }

  });

});