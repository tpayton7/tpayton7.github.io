$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
//createPlatform(xPos, yPos, Width, Height)
createPlatform(200, 700, 100, 5,"green")
createPlatform(400, 600, 100, 6,"green")
createPlatform(400, 500, 100, 10,"green",200,800)
createPlatform(600, 400, 100, 5,"green")
createPlatform(800, 300, 100, 5,"green",200,800)
createPlatform(900, 200, 100, 5,"green")

    // TODO 3 - Create Collectables
//createCollectable("type", xPos, yPos, gravity?, bounce? Between 0-1, minX = null, maxX = null, speed = 1)
//"type" can be 6 things... database diamond grace kennedi max steve
createCollectable("panda", 400, 300) //Sits Still
createCollectable("panda", 300, 500) //Sits Still
createCollectable("panda", 900, 200) //Sits Still
createCollectable("panda", 600, 100, 0.1)

    // TODO 4 - Create Cannons
//createCannon("wall", pos, secondsX1000, width, height)
createCannon("right", 450, 2000,)
createCannon("top", 500, 3000, 100, 40)



    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
