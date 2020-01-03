// Rover Object Goes Here
// ======================
const rover = {
    x: 0,
    y: 0,
    direction: "N",
    travelLog: [],
    }
  // ======================
  function turnLeft(rover){
    switch (rover.direction){
      case "N": rover.direction = "W";
        break;
      case "W": rover.direction = "S";
        break;
      case "S": rover.direction = "E";
        break;
      case "E": rover.direction = "N";
        break;
    } 
    console.log(`TurnLeft was called!
  Rover is facing: ${rover.direction}
  Current position is: x:${rover.x} y:${rover.y}`)
  }
  function turnRight(rover){
    switch (rover.direction){
      case "N": rover.direction = "E";
        break;
      case "E": rover.direction = "S";
        break;
      case "S": rover.direction = "W";
        break;
      case "W": rover.direction = "N";
        break;
    } 
    console.log(`Turn Right was called!
  Rover is Facing: ${rover.direction}.
  Current position is: x:${rover.x} y:${rover.y}.`)
  }
  // Both turn functions are operational
    
  function moveForward(rover){
    switch (rover.direction){
      case rover.direction = "E": rover.x++;
        break;
      case rover.direction = "S": rover.y++;
        break;
      case rover.direction = "W": rover.x--;
        break;
      case rover.direction = "N": rover.y--;
        break;
    }
    console.log(`moveForward was called!
  Current position is: x:${rover.x} y:${rover.y}.
  Rover is Facing ${rover.direction}`)
  }
  // Movement Orders are operational. Movement tests have passed. Limits not yet defined.
  
  //BONUS 2: move mackwards function will be insterted:
  
  function moveBackward(rover){
    switch (rover.direction){
      case rover.direction = "E": rover.x--;
        break;
      case rover.direction = "S": rover.y--;
        break;
      case rover.direction = "W": rover.x++;
        break;
      case rover.direction = "N": rover.y++;
        break;
    }
    console.log(`moveBackward was called!
  Current position is: x:${rover.x} y:${rover.y}.
  Rover is Facing ${rover.direction}`)
  }
  
  // Movement function:
  function movementOrder(rover, command){
    for (let i = 0; i < command.length; i++){
      let commands = command[i];
      switch(commands){
        case "L":
          turnLeft(rover);
          break;
        case "R": 
          turnRight(rover);
          break;
        case "F":
          moveForward(rover),
            rover.travelLog.push(`${rover.x} ${rover.y}`);
          break;
        case "B":
          moveBackward(rover),
            rover.travelLog.push(`${rover.x} ${rover.y}`);
      } 
    } console.log(rover.travelLog)
  }
  
  // MOVEMENT ORDERS OPERATIONAL, TESTS HAVE BEEN PASSED
  // ADDITIONAL TRAVEL LOG INSERTED. WILL ONLY RECORD MOVES, NOT TURNS; 
  //Bonus 2 inserted, operational with similar movement logs
  
  //TEST:
  movementOrder(rover,"RFFRFFLB")
  console.log("-----------------------")
  
  // Bonus 1: boundary enforcements: NOT TESTED
  // set up boaundaries inside movemntOrder, through logical gates of && is not working.
  
  // Bonus 3 Validate imputs: NOT TESTED
  // Bonus 4: Obstacles not yet arrived
  