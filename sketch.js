
let smellData = [];
let input, submitButton;
let selectedSpot = null;

function setup() {
  createCanvas(800, 600);
  background(220);
  drawMap();

 
  input = createInput();
  input.position(820, 50);

  
  submitButton = createButton('Log Smell');
  submitButton.position(820, 80);
  submitButton.mousePressed(logSmell);
}

function draw() {
  drawMap();
  drawSmellPoints();
}

function drawMap() {
  background(220);
  fill(180);
  rect(100, 50, 600, 500); 
  fill(100);
  textSize(16);
  text("Nunhead Street", 330, 40);
}

function drawSmellPoints() {
  fill(255, 0, 0);
  for (let i = 0; i < smellData.length; i++) {
    let spot = smellData[i];
    ellipse(spot.x, spot.y, 10, 10);
  }
}

function mousePressed() {
  if (mouseX > 100 && mouseX < 700 && mouseY > 50 && mouseY < 550) {
    selectedSpot = { x: mouseX, y: mouseY };
  }
}

function logSmell() {
  if (selectedSpot && input.value() !== '') {
    smellData.push({ x: selectedSpot.x, y: selectedSpot.y, smell: input.value() });
    input.value('');
    selectedSpot = null;
  }
}
