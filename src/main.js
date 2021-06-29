//*************************************************
//  Justin Satriano
//  Modded Rocket Patrol
//  6 / 28 / 2021
//  12 hour completion
//*************************************************

//**************************************************************************************
//  mods completed: 100
//  -- POINT BREAKDOWN ALSO IN REPO'S README --
//
//  complete tutorial --- base points (20)
//
//  Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
//      (NOTE: i created new artwork for explosion --in assets-- however i decided to use
//      the particle emitter object i created for another mod --which i also did the artwork for--)
//
//  Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (20)
//
//  Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
//
//  Create 4 new explosion SFX and randomize which one plays on impact (10)
//
//  Implement the 'FIRE' UI text from the original game (5)
//
//  Create a new scrolling tile sprite for the background (5)
//***************************************************************************************

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;
