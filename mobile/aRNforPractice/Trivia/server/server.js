const fs = require("fs");
const lodash = require("lodash");

const io = require("socket.io")(require("http").createServer(function(){}).listen(8080));

// Colección de objetos de datos de jugador con clave por ID de jugador.
const players = { };

// Hay un juego actualmente en curso?
let inProgress = false;

// Las preguntas para el juego.
let questions = null;

// La pregunta actual en juego.
let question = null;

// La versión condensada de la pregunta actual que se dirige a los jugadores.
// (sin respuestas e información que podrían usarse para hacer trampa.)
let questionForPlayers = null;

// La hora local del servidor comenzó la pregunta actual.
let questionStartTime = null;

// El número de preguntas formuladas durante el juego actual.
let numberAsked = 0;

/**
 * Obtener un nuevo objeto gameData.
 */
function newGameData() {

  console.log("newGameData()");

  return { right : 0, wrong : 0, totalTime : 0, fastest : 999999999,
    slowest : 0, average : 0, points : 0, answered : 0, playerName : null
  };

} /* Fin newGameData(). */


/**
 * Vuelve a calcular la tabla de clasificación y devuelve el nuevo estado.
 */
function calculateLeaderboard() {

  console.log("calculateLeaderboard()");

  // Toma a los jugadores en un array.
  const playersArray = [ ];
  for (const playerID in players) {
    if (players.hasOwnProperty(playerID)) {
      const player = players[playerID];
      playersArray.push({ playerID : playerID, playerName : player.playerName,
      points : player.points });
    }
  }

  // Ahora ordena el array en función de los puntos.
  playersArray.sort((inA, inB) => {
    const pointsA = inA.points;
    const pointsB = inB.points;
    if (pointsA > pointsB) {
      return -1;
    } else if (pointsA < pointsB) {
      return 1;
    } else {
      return 0;
    }
  });

  return playersArray;

} /* Fin calculateLeaderboard(). */


// noinspection JSUnresolvedFunction
/**
 * Manejar el evento de conexión de socket. Todos los demás eventos deben estar conectados dentro de esto.
 */
io.on("connection", io => {

  console.log("Conexión establecida con un cliente");

  // ---------------------------------------------------------------------------
  // Controladores de mensajes del jugador.
  // ----------------------------------------------------------------------------

  /**
   * Cuando un jugador se conecta por primera vez, emite un mensaje que hará que se envíe
   * su ID de jugador a través de un mensaje validatePlayer.
   */
  io.emit("connected", { });

  /**
   * Una vez conectado, el jugador llama a esto para validarlos. Esto realmente solo
   * los agrega a la colección de jugadores y genera un ID de jugador, enviándolo
   * de regreso al jugador, junto con el objeto gameDate actual para ellos.
   */
  io.on("validatePlayer", inData => {

    try {

      console.log("validatePlayer", inData);

      // Construye el objeto que será la respuesta..
      const responseObject = { inProgress : inProgress,
        gameData : newGameData(), leaderboard : calculateLeaderboard(),
        asked : numberAsked
      };
      responseObject.gameData.playerName = inData.playerName;

      // Primero, da una identificación.
      responseObject.playerID = `pi_${new Date().getTime()}`;

      // Ahora, asegura de que su nombre sea único.
      for (const playerID in players) {
        if (players.hasOwnProperty(playerID)) {
          if (inData.playerName === players[playerID].playerName) {
            responseObject.gameData.playerName += `_${new Date().getTime()}`;
          }
        }
      }

      // Finalmente, guardar objeto gameData y emitir un mensaje de respuesta.
      players[responseObject.playerID] = responseObject.gameData;
      io.emit("validatePlayer", responseObject);

    // Manejar cualquier problema inesperado, asegurando que el servidor no se caiga.
    } catch (inException) {
      console.log(`${inException}`);
    }

  }); /* Fin validatePlayer handler. */


  /**
   * Se activa cuando el jugador hace clic en el botón Enviar para enviar su respuesta.
   */
  io.on("submitAnswer", inData => {

    try {

      console.log("submitAnswer", inData);

      // Obtener la instancia de gameData para este jugador.
      const gameData = players[inData.playerID];

      // Por defecto, se supone que respondieron mal.
      let correct = false;

      // Aumentar el conteo de cuántas preguntas ha respondido este jugador.
      gameData.answered++;

      // noinspection JSUnresolvedVariable
      if (question.answer === inData.answer) {

        // Se respondio bien, así que aumenta su conteo correcto, pero también reducir
        // su recuento incorrecto, ya que se incrementó cuando la pregunta
        // empezó.
        players[inData.playerID].right++;
        players[inData.playerID].wrong--;

        // Ver cuánto tiempo tardó y actualizar los valores relacionados con el tiempo.
        const time = new Date().getTime() - questionStartTime;
        gameData.totalTime = gameData.totalTime + time;
        if (time > gameData.slowest) {
          gameData.slowest = time;
        }
        if (time < gameData.fastest) {
          gameData.fastest = time;
        }
        gameData.average = Math.trunc(gameData.totalTime / numberAsked);

        // Calcula los puntos a sumar. Esto se basa en una cantidad máxima de tiempo
        // permitido para responder. Por ejemplo, 15 segundos significa que comienzan
        // obteniendo 60 puntos por una respuesta correcta (maxTimeAllowed * 4). Pero
        // luego, por cada cuarto de segundo tomado para responder (que es donde el 4
        // proviene) restamos 1 punto, limitando la pérdida en los puntos máximos
        // que podrían conseguir. Entonces, al final, si toman más
        // segundos de maxTimeAllowed para responder y luego no obtendrán puntos,
        // de lo contrario obtendrán menos o igual que
        // maxTimeAllowed*4. Sin embargo, es un poco injusto tomar TODOS sus
        // puntos, así que al final damos 10 puntos independientemente de cuánto tiempo
        // tomaron para responder.
        const maxTimeAllowed = 15;
        gameData.points = gameData.points + (maxTimeAllowed * 4);
        gameData.points = gameData.points -
          Math.min(Math.max(Math.trunc(time / 250), 0), (maxTimeAllowed * 4));
        gameData.points = gameData.points + 10;
        correct = true;

      }

      // Envía el resultado al jugador y decirle a todos los jugadores que actualicen la
      // tabla de clasificación.
      io.emit("answerOutcome", { correct : correct, gameData : gameData,
        asked : numberAsked, leaderboard : calculateLeaderboard()
      });

    // Manejar cualquier problema inesperado, asegurando que el servidor no se caiga.
    } catch (inException) {
      console.log(`${inException}`);
    }

  }); /* Fin submitAnswer handler. */


  // ---------------------------------------------------------------------------
  // Controladores de mensajes de administrador.
  // ---------------------------------------------------------------------------


  /**
   * Se activa cuando el administrador hace clic en el botón Nuevo juego para comenzar un nuevo juego.
   */
  io.on("adminNewGame", () => {

    try {

      console.log("adminNewGame");

      // Restablecer variables de seguimiento
      question = null;
      questionForPlayers = null;
      numberAsked = 0;
      inProgress = true;

      // Leer en el archivo de preguntas. Tener que hacer esto al comienzo de cada
      // juego porque cada llamada a nextQuestion() elimina una pregunta del
      // array.
      // noinspection JSUnresolvedVariable
      questions = (JSON.parse(fs.readFileSync("questions.json", "utf8"))).questions;

      // Restablece a todos los jugadores actuales para que tengan un nuevo objeto gameData. Recordar
      // que sobrescribiremos el objeto gameData, que incluye el
      // nombre del jugador, por lo que primero tendremos que capturarlo y transferirlo.
      for (const playerID in players) {
        if (players.hasOwnProperty(playerID)) {
          const playerName = players[playerID].playerName;
          players[playerID] = newGameData();
          players[playerID].playerName = playerName;
        }
      }

      // Decir a todos los jugadores conectados que un nuevo juego está comenzando.
      const responseObject = { inProgress : inProgress, question : null,
        playerID : null, gameData : newGameData(), asked : numberAsked,
        leaderboard : calculateLeaderboard()
      };
      const gd = newGameData();
      gd.asked = 0;
      // noinspection JSUnresolvedVariable
      io.broadcast.emit("newGame", responseObject);

      // Decir al administrador que un juego ha comenzado.
      io.emit("adminMessage", { msg : "Juego iniciado" });

    // Manejar cualquier problema inesperado, asegurando que el servidor no se caiga.
    } catch (inException) {
      console.log(`${inException}`);
    }

  }); /* Fin adminNewGame handler. */


  /**
   * Se activa cuando el administrador hace clic en el botón Siguiente pregunta para mostrar una nueva
   * pregunta. A todos los jugadores conectados se les dice cuál es la pregunta.
   */
  io.on("adminNextQuestion", () => {

    try {

      console.log("adminNextQuestion");

      // Mostrar un mensaje si el administrador intentó enviar una pregunta pero no hay
      // juego en progreso
      if (!inProgress) {
        io.emit("adminMessage", { msg : "No hay juego en progreso." });
        return;
      }

      // Decir al administrador cuando nos quedemos sin preguntas para que puedan finalizar el
      // juego.
      if (questions.length === 0) {
        io.emit("adminMessage", { msg : "No hay mas preguntas" });
        return;
      }

      // Incrementa el recuento incorrecto de todos los jugadores. Esto se anulará si cada uno
      // responde bien, por supuesto, pero de esta manera contamos las preguntas que no
      // han sido respondidas a tiempo como incorrectas también.
      for (const playerID in players) {
        if (players.hasOwnProperty(playerID)) {
          players[playerID].wrong++;
        }
      }

      // Elegir aleatoriamente una pregunta y eliminarla de la matriz de preguntas para
      // no elegirse dos veces.
      let choice = Math.floor(Math.random() * questions.length);
      question = questions.splice(choice, 1)[0];

      // Construye un objeto de pregunta para los jugadores. Esto consiste en la
      // pregunta y 6 respuestas posibles, elegidas al azar, e incluyendo la
      // elección correcta.
      questionForPlayers = { question : question.question, answers : [ ] };

      // Clonar la matriz de señuelos para que podamos "reducirla" al elegir las respuestas.
      // noinspection JSUnresolvedVariable
      const decoys = question.decoys.slice(0);
      for (let i = 0; i < 5; i++) {
        let choice = Math.floor(Math.random() * decoys.length);
        questionForPlayers.answers.push(decoys.splice(choice, 1)[0]);
      }

      // No olvidar la respuesta correcta!
      // noinspection JSUnresolvedVariable
      questionForPlayers.answers.push(question.answer);

      // Ahora, para garantizar que la respuesta correcta no sea siempre la última, aleatorizar
      // respuestas.
      questionForPlayers.answers = lodash.shuffle(questionForPlayers.answers);

      // Contar cuántas preguntas se han hecho (ya que no podemos decir
      // esto del número de elementos en el array de preguntas porque
      // se reduce con cada pregunta que se haga).
      numberAsked++;

      // Registrar la hora de inicio de la pregunta.
      questionStartTime = new Date().getTime();

      // Decir a todos los jugadores que es hora de hacer una pregunta.
      // noinspection JSUnresolvedVariable
      io.broadcast.emit("nextQuestion", questionForPlayers);

      // Decir al administrador que hay una pregunta en juego.
      io.emit("adminMessage", { msg: "Pregunta en juego" });

    // Manejar cualquier problema inesperado, asegurando que el servidor no se caiga.
    } catch (inException) {
      console.log(`${inException}`);
    }

  }); /* Fin adminNextQuestion handler. */


  /**
   * Se activa cuando el administrador hace clic en el botón Finalizar juego para finalizar el juego.
   */
  io.on("adminEndGame", () => {

    try {

      console.log("adminEndGame");

      // Muestra un mensaje si el administrador intentó finalizar el juego, pero
      // no hay juego en progreso.
      if (!inProgress) {
        io.emit("adminMessage", { msg: "No hay juego en progreso." });
        return;
      }

      // Decir a todos los jugadores sobre el final del juego y la clasificaciones finales.
      const leaderboard = calculateLeaderboard();
      // noinspection JSUnresolvedVariable
      io.broadcast.emit("endGame", { leaderboard : leaderboard });

      // Restablecer variables.
      inProgress = false;
      questions = null;
      question = null;
      questionForPlayers = null;
      questionStartTime = null;
      numberAsked = 0;
      for (const playerID in players) {
        if (players.hasOwnProperty(playerID)) {
          const playerName = players[playerID].playerName;
          players[playerID] = newGameData();
          players[playerID].playerName = playerName;
        }
      }

      // Decir al administrador que el juego ha terminado.
      io.emit("adminMessage", { msg: "Juego terminado" });

    // Manejar cualquier problema inesperado, asegurando que el servidor no se caiga.
    } catch (inException) {
      console.log(`${inException}`);
    }

  }); /* Fin adminEndGame handler. */


}); /* Fin controlador de eventos de conexión. */

console.log("Server iniciado");