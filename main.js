import './style.css';

const sketch = (s) => {
  let orbit = 0;

  const game = {
    playerHealth: 100,
  };

  let worldX = window.innerWidth / 2;
  let playerX = window.innerWidth / 2;
  let playerY = window.innerHeight / 2;

  s.setup = () => {
    s.createCanvas(window.innerWidth, window.innerHeight);
  };

  s.preload = () => {
    console.log('preload');
  };

  s.draw = () => {
    s.background(0);
    // s.noFill();
    s.strokeWeight(1);

    s.stroke('grey');
    s.line(0, s.height / 2, s.width, s.height / 2);

    s.stroke('green');
    s.fill('green');
    s.rect(worldX - 240, s.height / 2 - 40, 120, 40);
    s.rect(worldX, s.height / 2 - 40, 100, 40);

    s.stroke('blue');
    s.fill('blue');
    s.rect(worldX + 240, s.height / 2 - 40, 100, 40);
    s.rect(worldX - 600, s.height / 2 - 40, 100, 40);

    // ball
    s.stroke('gold');
    s.fill('gold');
    s.circle(playerX, playerY, 20);

    s.stroke('gold');
    s.fill('gold');
    s.translate(s.width / 2, s.height / 2 + 120);
    s.rotate(orbit);
    s.circle(s.width / 2, s.height / 2, 60);

    if (s.keyIsDown(s.LEFT_ARROW)) {
      worldX += 1;
    }
    if (s.keyIsDown(s.RIGHT_ARROW)) {
      worldX -= 1;
    }

    orbit += 0.001;
  };

  s.mousePressed = (e) => {
    console.log('mouse pressed', e);
  };
};

const sketchInstance = new p5(sketch);
