var CheckWin_boolean = false;
var Robot1NotDestroyed = true;
var Robot2NotDestroyed = true;
var Robot3NotDestroyed = true;
var Timeout1;
var Timeout2;
var Timeout3;
var Timeout4;
var Timeout5;
var Timeout6;
var Timeout7;
var Timeout8;
var Timeout9;
var Timeout10;
var Timeout11;
onEvent("BackBtn_RocketMenu", "click", function( ) {
  setScreen("HomeScreen");
  StopAllSounds();
});
onEvent("HomeBtn_RocketMenu", "click", function( ) {
  setScreen("HomeScreen");
  StopAllSounds();
});
onEvent("BackBtn_Play", "click", function( ) {
  SetMenuScreen();
});
onEvent("HomeBtn_Play", "click", function( ) {
  StopAllSounds();
  setScreen("HomeScreen");
  RocketGame_Reset();
});
onEvent("RocketApp", "click", function( ) {
  StopAllSounds();
  SetMenuScreen();
});
onEvent("Backbtn_TTTPlay", "click", function( ) {
  setScreen("TTTMenuScreen");
});
function SetMenuScreen() {
  StopAllSounds();
  setScreen("menuScreen");
  playSound("assets/category_background/stride.mp3", true);
  setText("live_textplay_Rocket", "");
  RocketGame_Reset();
}
function RocketGame_Reset() {
  RocketXPosition = 135;
  setProperty("rocket", "x", RocketXPosition);
  CheckWin_boolean = false;
  Robot1NotDestroyed = true;
  Robot2NotDestroyed = true;
  Robot3NotDestroyed = true;
  setPosition("robot1", 55, -70);
  setPosition("robot2", 135, -70);
  setPosition("robot3", 210, -70);
  setImageURL("robot1", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
  setImageURL("robot2", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
  setImageURL("robot3", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
  hideElement("robot1");
  hideElement("robot2");
  hideElement("robot3");
  hideElement("fire1");
  hideElement("fire2");
  hideElement("fire3");
  hideElement("fire4");
  hideElement("fire5");
  setPosition("fire1", 5, 125);
  setPosition("fire2", 5, 125);
  setPosition("fire3", 5, 125);
  setPosition("fire4", 5, 125);
  setPosition("fire5", 5, 125);
  Fire1xRobot=false;
  Fire2xRobot=false;
  Fire3xRobot=false;
  Fire4xRobot=false;
  Fire5xRobot=false;
  stopTimedLoop();
  clearTimeout(Timeout1);
  clearTimeout(Timeout2);
  clearTimeout(Timeout3);
  clearTimeout(Timeout4);
  clearTimeout(Timeout5);
  clearTimeout(Timeout6);
  clearTimeout(Timeout7);
  clearTimeout(Timeout8);
  clearTimeout(Timeout9);
  clearTimeout(Timeout10);
  clearTimeout(Timeout11);
}
function StopAllSounds() {
  stopSound("assets/category_background/stride.mp3");
  stopSound("assets/category_background/fantasy.mp3");
}
onEvent("StartGameRocket_btn", "click", function( ) {
  setScreen("playScreen");
  startRocketGame();
  StopAllSounds();
  playSound("assets/category_background/fantasy.mp3", true);
});
function startRocketGame() {
  setPosition("rocket", 135, 360);
  setText("live_textplay_Rocket", "Start!!");
  Timeout1 = setTimeout(function() {
    setText("live_textplay_Rocket", "Wave 1");
    Timeout2 = setTimeout(function() {
      setText("live_textplay_Rocket", "");
      robotsDown();
    }, 2000);
  }, 2000);
  var TimeLoopCheckWin=timedLoop(1000, function() {
    checkWin_Rocket();
    if (CheckWin_boolean ==true) {
      stopTimedLoop(TimeLoopCheckWin);
    }
  });
}
function checkWin_Rocket() {
  if (Robot1NotDestroyed==false && Robot2NotDestroyed==false && Robot3NotDestroyed==false) {
    wave2();
    CheckWin_boolean = true;
  }
}
function wave2() {
  Robot1NotDestroyed = true;
  Robot2NotDestroyed = true;
  Robot3NotDestroyed = true;
  setText("live_textplay_Rocket", "wave 2");
  Timeout11 = setTimeout(function() {
    setText("live_textplay_Rocket", "");
    showHideRobots();
  }, 3000);
}
function showHideRobots() {
  if (((Robot1NotDestroyed==true || Robot2NotDestroyed==true) || Robot3NotDestroyed==true)) {
    if (Robot1NotDestroyed==true) {
      Timeout3 = setTimeout(function() {
        showElement("robot1");
      }, 1000);
      Timeout8 = setTimeout(function() {
        hideElement("robot1");
      }, 2000);
    }
    if (Robot2NotDestroyed==true) {
      Timeout4 = setTimeout(function() {
        showElement("robot2");
      }, 3000);
      Timeout9 = setTimeout(function() {
        hideElement("robot2");
      }, 4000);
    }
    if (Robot3NotDestroyed==true) {
      Timeout5 = setTimeout(function() {
        showElement("robot3");
      }, 5000);
      Timeout10 = setTimeout(function() {
        hideElement("robot3");
      }, 6000);
    }
    Timeout6 = setTimeout(function() {
      showHideRobots();
    }, 7000);
  } else {
    CheckWin_boolean=false;
    setText("live_textplay_Rocket", "You Win!!!!");
    Timeout7 = setTimeout(function() {
      SetMenuScreen();
    }, 2000);
  }
}
function robotsDown() {
  showElement("robot1");
  setPosition("robot1", 55, -70);
  showElement("robot2");
  setPosition("robot2", 135, -70);
  showElement("robot3");
  setPosition("robot3", 210, -70);
  var RobotsYPosition= -70;
  var TimeLoopRobotsDown=timedLoop(100, function() {
    RobotsYPosition = RobotsYPosition+3;
    setPosition("robot1", 55, RobotsYPosition);
    setPosition("robot2", 135, RobotsYPosition);
    setPosition("robot3", 210, RobotsYPosition);
    if (getYPosition("robot1")>=30) {
      stopTimedLoop(TimeLoopRobotsDown);
    }
  });
}
var Fire1YPosition = 340;
var Fire2YPosition = 340;
var Fire3YPosition = 340;
var Fire4YPosition= 340;
var Fire5YPosition = 340;
var FirePer_ms=true;
var RocketXPosition=135;
onEvent("playScreen", "keydown", function(event) {
  if ((event.key == "Left" || event.key ==  "a") && RocketXPosition>30) {
    RocketXPosition = RocketXPosition-35;
    setProperty("rocket", "x", RocketXPosition);
  }
  if ((event.key == "Right" || event.key ==  "d") && RocketXPosition<240) {
    RocketXPosition = RocketXPosition+35;
    setProperty("rocket", "x", RocketXPosition);
  }
  if (FirePer_ms==true && event.key==" ") {
    if (getProperty("fire1", "hidden")==true) {
      fire(RocketXPosition+18, 1);
    } else if ((getProperty("fire2", "hidden")==true)) {
      fire(RocketXPosition+18, 2);
    } else if ((getProperty("fire3", "hidden")==true)) {
      fire(RocketXPosition+18, 3);
    } else if ((getProperty("fire4", "hidden")==true)) {
      fire(RocketXPosition+18, 4);
    } else if ((getProperty("fire5", "hidden")==true)) {
      fire(RocketXPosition+18, 5);
    }
    playSound("assets/category_digital/laser_fade_3.mp3", false);
    FirePer_ms = false;
    setTimeout(function() {
      FirePer_ms = true;
    }, 300);
  }
});
function fire(x, index) {
  if (index==1) {
    Fire1YPosition = 340;
    setPosition("fire1", x, Fire1YPosition);
    fireshoot1(x);
  } else if (index==2) {
    Fire2YPosition = 340;
    setPosition("fire2", x, Fire2YPosition);
    fireshoot2(x);
  } else if ((index==3)) {
    Fire3YPosition = 340;
    setPosition("fire3", x, Fire3YPosition);
    fireshoot3(x);
  }else if ((index==4)) {
    Fire4YPosition = 340;
    setPosition("fire4", x, Fire4YPosition);
    fireshoot4(x);
  }else if ((index==5)) {
    Fire5YPosition = 340;
    setPosition("fire5", x, Fire5YPosition);
    fireshoot5(x);
  }
  showElement("fire"+index);
}
function fireshoot1(x) {
  var timeLoopFireAnimation = timedLoop(100, function() {
    Fire1YPosition = Fire1YPosition-10;
    setPosition("fire1", x, Fire1YPosition);
    checkFire1xRobot();
    if (Fire1YPosition<=0 || Fire1xRobot==true) {
      stopTimedLoop(timeLoopFireAnimation);
      setPosition("fire1", 5, 125);
      hideElement("fire1");
      Fire1xRobot=false;
    }
  });
}
function fireshoot2(x) {
  var timeLoopFireAnimation = timedLoop(100, function() {
    Fire2YPosition = Fire2YPosition-10;
    setPosition("fire2", x, Fire2YPosition);
    checkFire2xRobot();
    if (Fire2YPosition<=0 || Fire2xRobot==true) {
      stopTimedLoop(timeLoopFireAnimation);
      setPosition("fire2", 5, 125);
      hideElement("fire2");
      Fire2xRobot=false;
    }
  });
}
function fireshoot3(x) {
  var timeLoopFireAnimation = timedLoop(100, function() {
    Fire3YPosition = Fire3YPosition-10;
    setPosition("fire3", x, Fire3YPosition);
    checkFire3xRobot();
    if (Fire3YPosition<=0 || Fire3xRobot==true) {
      stopTimedLoop(timeLoopFireAnimation);
      setPosition("fire3", 5, 125);
      hideElement("fire3");
      Fire3xRobot=false;
    }
  });
}
function fireshoot4(x) {
  var timeLoopFireAnimation = timedLoop(100, function() {
    Fire4YPosition = Fire4YPosition-10;
    setPosition("fire4", x, Fire4YPosition);
    checkFire4xRobot();
    if (Fire4YPosition<=0 || Fire4xRobot==true) {
      stopTimedLoop(timeLoopFireAnimation);
      setPosition("fire4", 5, 125);
      hideElement("fire4");
      Fire4xRobot=false;
    }
  });
}
function fireshoot5(x) {
  var timeLoopFireAnimation = timedLoop(100, function() {
    Fire5YPosition = Fire5YPosition-10;
    setPosition("fire5", x, Fire5YPosition);
    checkFire5xRobot();
    if (Fire5YPosition<=0 || Fire5xRobot==true) {
      stopTimedLoop(timeLoopFireAnimation);
      setPosition("fire5", 5, 125);
      hideElement("fire5");
      Fire5xRobot=false;
    }
  });
}
var Fire1xRobot = false;
function checkFire1xRobot() {
  var f1X0=getXPosition("fire1");
  var f1X1=f1X0+getProperty("fire1", "width");
  var f1Y0=getYPosition("fire1");
  var f1Y1=f1Y0+getProperty("fire1", "height");
  var b1X0=getXPosition("robot1");
  var b1X1=b1X0+getProperty("robot1", "width");
  var b1Y0=getYPosition("robot1");
  var b1Y1=b1Y0+getProperty("robot1", "height");
  if (f1X0<b1X1 && f1X1>b1X0 && f1Y0<b1Y1 && f1Y1>b1Y0 && getProperty("robot1", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot1", "assets/images.png");
    setTimeout(function() {
      hideElement("robot1");
      setImageURL("robot1", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire1xRobot = true;
    Robot1NotDestroyed= false;
  }
  var b2X0=getXPosition("robot2");
  var b2X1=b2X0+getProperty("robot2", "width");
  var b2Y0=getYPosition("robot2");
  var b2Y1=b2Y0+getProperty("robot2", "height");
  if (f1X0<b2X1 && f1X1>b2X0 && f1Y0<b2Y1 && f1Y1>b2Y0 && getProperty("robot2", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot2", "assets/images.png");
    setTimeout(function() {
      hideElement("robot2");
      setImageURL("robot2", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire1xRobot = true;
    Robot2NotDestroyed = false;
  }
  var b3X0=getXPosition("robot3");
  var b3X1=b3X0+getProperty("robot3", "width");
  var b3Y0=getYPosition("robot3");
  var b3Y1=b3Y0+getProperty("robot3", "height");
  if (f1X0<b3X1 && f1X1>b3X0 && f1Y0<b3Y1 && f1Y1>b3Y0 && getProperty("robot3", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot3", "assets/images.png");
    setTimeout(function() {
      hideElement("robot3");
      setImageURL("robot3", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire1xRobot = true;
    Robot3NotDestroyed = false;
  }
}
var Fire2xRobot = false;
function checkFire2xRobot() {
  var f1X0=getXPosition("fire2");
  var f1X1=f1X0+getProperty("fire2", "width");
  var f1Y0=getYPosition("fire2");
  var f1Y1=f1Y0+getProperty("fire2", "height");
  var b1X0=getXPosition("robot1");
  var b1X1=b1X0+getProperty("robot1", "width");
  var b1Y0=getYPosition("robot1");
  var b1Y1=b1Y0+getProperty("robot1", "height");
  if (f1X0<b1X1 && f1X1>b1X0 && f1Y0<b1Y1 && f1Y1>b1Y0 && getProperty("robot1", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot1", "assets/images.png");
    setTimeout(function() {
      hideElement("robot1");
      setImageURL("robot1", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire2xRobot = true;
    Robot1NotDestroyed = false;
  }
  var b2X0=getXPosition("robot2");
  var b2X1=b2X0+getProperty("robot2", "width");
  var b2Y0=getYPosition("robot2");
  var b2Y1=b2Y0+getProperty("robot2", "height");
  if (f1X0<b2X1 && f1X1>b2X0 && f1Y0<b2Y1 && f1Y1>b2Y0 && getProperty("robot2", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot2", "assets/images.png");
    setTimeout(function() {
      hideElement("robot2");
      setImageURL("robot2", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire2xRobot = true;
    Robot2NotDestroyed = false;
  }
  var b3X0=getXPosition("robot3");
  var b3X1=b3X0+getProperty("robot3", "width");
  var b3Y0=getYPosition("robot3");
  var b3Y1=b3Y0+getProperty("robot3", "height");
  if (f1X0<b3X1 && f1X1>b3X0 && f1Y0<b3Y1 && f1Y1>b3Y0 && getProperty("robot3", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot3", "assets/images.png");
    setTimeout(function() {
      hideElement("robot3");
      setImageURL("robot3", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire2xRobot = true;
    Robot3NotDestroyed = false;
  }
}
var Fire3xRobot = false;
function checkFire3xRobot() {
  var f1X0=getXPosition("fire3");
  var f1X1=f1X0+getProperty("fire3", "width");
  var f1Y0=getYPosition("fire3");
  var f1Y1=f1Y0+getProperty("fire3", "height");
  var b1X0=getXPosition("robot1");
  var b1X1=b1X0+getProperty("robot1", "width");
  var b1Y0=getYPosition("robot1");
  var b1Y1=b1Y0+getProperty("robot1", "height");
  if (f1X0<b1X1 && f1X1>b1X0 && f1Y0<b1Y1 && f1Y1>b1Y0 && getProperty("robot1", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot1", "assets/images.png");
    setTimeout(function() {
      hideElement("robot1");
      setImageURL("robot1", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire3xRobot = true;
    Robot1NotDestroyed = false;
  }
  var b2X0=getXPosition("robot2");
  var b2X1=b2X0+getProperty("robot2", "width");
  var b2Y0=getYPosition("robot2");
  var b2Y1=b2Y0+getProperty("robot2", "height");
  if (f1X0<b2X1 && f1X1>b2X0 && f1Y0<b2Y1 && f1Y1>b2Y0 && getProperty("robot2", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot2", "assets/images.png");
    setTimeout(function() {
      hideElement("robot2");
      setImageURL("robot2", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire3xRobot = true;
    Robot2NotDestroyed = false;
  }
  var b3X0=getXPosition("robot3");
  var b3X1=b3X0+getProperty("robot3", "width");
  var b3Y0=getYPosition("robot3");
  var b3Y1=b3Y0+getProperty("robot3", "height");
  if (f1X0<b3X1 && f1X1>b3X0 && f1Y0<b3Y1 && f1Y1>b3Y0 && getProperty("robot3", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot3", "assets/images.png");
    setTimeout(function() {
      hideElement("robot3");
      setImageURL("robot3", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire3xRobot = true;
    Robot3NotDestroyed = false;
  }
}
var Fire4xRobot = false;
function checkFire4xRobot() {
  var f1X0=getXPosition("fire4");
  var f1X1=f1X0+getProperty("fire4", "width");
  var f1Y0=getYPosition("fire4");
  var f1Y1=f1Y0+getProperty("fire4", "height");
  var b1X0=getXPosition("robot1");
  var b1X1=b1X0+getProperty("robot1", "width");
  var b1Y0=getYPosition("robot1");
  var b1Y1=b1Y0+getProperty("robot1", "height");
  if (f1X0<b1X1 && f1X1>b1X0 && f1Y0<b1Y1 && f1Y1>b1Y0 && getProperty("robot1", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot1", "assets/images.png");
    setTimeout(function() {
      hideElement("robot1");
      setImageURL("robot1", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire4xRobot = true;
    Robot1NotDestroyed = false;
  }
  var b2X0=getXPosition("robot2");
  var b2X1=b2X0+getProperty("robot2", "width");
  var b2Y0=getYPosition("robot2");
  var b2Y1=b2Y0+getProperty("robot2", "height");
  if (f1X0<b2X1 && f1X1>b2X0 && f1Y0<b2Y1 && f1Y1>b2Y0 && getProperty("robot2", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot2", "assets/images.png");
    setTimeout(function() {
      hideElement("robot2");
      setImageURL("robot2", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire4xRobot = true;
    Robot2NotDestroyed = false;
  }
  var b3X0=getXPosition("robot3");
  var b3X1=b3X0+getProperty("robot3", "width");
  var b3Y0=getYPosition("robot3");
  var b3Y1=b3Y0+getProperty("robot3", "height");
  if (f1X0<b3X1 && f1X1>b3X0 && f1Y0<b3Y1 && f1Y1>b3Y0 && getProperty("robot3", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot3", "assets/images.png");
    setTimeout(function() {
      hideElement("robot3");
      setImageURL("robot3", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire4xRobot = true;
    Robot3NotDestroyed = false;
  }
}
var Fire5xRobot = false;
function checkFire5xRobot() {
  var f1X0=getXPosition("fire5");
  var f1X1=f1X0+getProperty("fire5", "width");
  var f1Y0=getYPosition("fire5");
  var f1Y1=f1Y0+getProperty("fire5", "height");
  var b1X0=getXPosition("robot1");
  var b1X1=b1X0+getProperty("robot1", "width");
  var b1Y0=getYPosition("robot1");
  var b1Y1=b1Y0+getProperty("robot1", "height");
  if (f1X0<b1X1 && f1X1>b1X0 && f1Y0<b1Y1 && f1Y1>b1Y0 && getProperty("robot1", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot1", "assets/images.png");
    setTimeout(function() {
      hideElement("robot1");
      setImageURL("robot1", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire5xRobot = true;
    Robot1NotDestroyed = false;
  }
  var b2X0=getXPosition("robot2");
  var b2X1=b2X0+getProperty("robot2", "width");
  var b2Y0=getYPosition("robot2");
  var b2Y1=b2Y0+getProperty("robot2", "height");
  if (f1X0<b2X1 && f1X1>b2X0 && f1Y0<b2Y1 && f1Y1>b2Y0 && getProperty("robot2", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot2", "assets/images.png");
    setTimeout(function() {
      hideElement("robot2");
      setImageURL("robot2", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire5xRobot = true;
    Robot2NotDestroyed = false;
  }
  var b3X0=getXPosition("robot3");
  var b3X1=b3X0+getProperty("robot3", "width");
  var b3Y0=getYPosition("robot3");
  var b3Y1=b3Y0+getProperty("robot3", "height");
  if (f1X0<b3X1 && f1X1>b3X0 && f1Y0<b3Y1 && f1Y1>b3Y0 && getProperty("robot3", "hidden")==false) {
    playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    setImageURL("robot3", "assets/images.png");
    setTimeout(function() {
      hideElement("robot3");
      setImageURL("robot3", "assets/vector-illustration-ufo-spaceship-pixel-260nw-2558357799-removebg-preview.png");
    }, 200);
    Fire5xRobot = true;
    Robot3NotDestroyed = false;
  }
}
