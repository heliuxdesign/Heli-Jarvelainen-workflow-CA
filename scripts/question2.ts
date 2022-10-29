// Question 2

// 1. Create an enum (GameGenre):
// Create an enum called GameGenre with the following key/value pairs. The value
//    should be the same as the key:
// - Action
// - Adventure
// - Sport

  enum GameGenre {
    Action = "ACTION",
    Adventure = "ADVENTURE",
    Sport = "SPORT",
  }

  console.log(GameGenre.Sport);

  // 2. Create an interface (Game):
// Create an interface called Game with the following values:
// name: string
// genre: The GameGenre enum
// onlinePlay: boolean, optional

  interface Game {
    name: string;
    genre: GameGenre;
    onlinePlay?: boolean;
  }

  // 3. Convert the function to TypeScript. Use your interface from above as the parameter.
/*function createGame({ name, genre, onlinePlay = false }) {
    console.log('=============');
    console.log('Game created:');
    console.log('-------------');
    console.log('Name:', name);
    console.log('Genre:', genre);
    console.log('Online play:', onlinePlay);
  }
  */

  function createGame (game: Game) :void{
  console.log('=============');
  console.log('Game created:');
  console.log('-------------');
  console.log('Name:', game.name);
  console.log('Genre:', game.genre);
  console.log('Online play:', game.onlinePlay);
}


  /* 4. Change these function calls to use the enum you created in step 1
  createGame({ name: 'Fun action game', genre: 'ACTION' });
  createGame({
    name: 'Fun adventure game',
    genre: 'ADVENTURE',
    onlinePlay: true,
  });
  */

  createGame({ name: 'Fun action game', genre: GameGenre.Action });
  createGame({
    name: 'Fun adventure game',
    genre: GameGenre.Adventure,
    onlinePlay: true,
  });