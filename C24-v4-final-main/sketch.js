
//constantes para iniciar a biblioteca

var btn2;

var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   //caracteríticas físicas da bola
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  //chamar a função vForce

  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);

 //criar o corpo da bola
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  Matter.Body.rotate(ground1,angle);

  push();
 //reconfigurar as configurações padrão da biblioteca
  pop();
  
  angle +=0.1;

 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);

  
  
}

//criar a função vForce
  