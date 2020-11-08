const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var plinko = []
var particles = []
var divisions = []
var divisionHeight = 300

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 790, 480, 20)
  
  for (var j = 40; j <= width; j = j + 50) {
    plinko.push(new Plinko(j, 75, 10))
  }
  for (var j = 15; j <= width - 10; j = j + 50) {
    plinko.push(new Plinko(j, 175, 10))
  }
  for (var j = 40; j <= width; j = j + 50) {
    plinko.push(new Plinko(j, 275, 10))
  }
  for (var j = 15; j <= width - 10; j = j + 50) {
    plinko.push(new Plinko(j, 375, 10))
  }
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight))
  }
}

function draw() {
  background("black");
  Engine.update(engine);

  if(frameCount%45===0){
    particles.push(new Particle(random(width/2-100,width/2+100),10,10))
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display()
  }
  for (var j = 0; j < plinko.length; j++) {
    plinko[j].display()
  }
  for (var y = 0; y < particles.length; y++) {
    particles[y].display()
  }

  ground.display()

  drawSprites();
}