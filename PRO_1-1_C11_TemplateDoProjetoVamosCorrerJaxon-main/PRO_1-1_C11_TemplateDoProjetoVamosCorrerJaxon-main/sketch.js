var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var boy 

function preload(){
    pathImg = loadImage("path.png");
    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
    createCanvas(400,400);

    // Movendo o fundo 
    path = createSprite(200,300);
    path.addImage("rua movendo" , pathImg);
    path.velocityY = 4;
    path.scale = 1.2;


    //Criando menino que corre 
    boy = createSprite(30,350);
    boy.addAnimation("menino correndo" , boyImg);
    boy.scale = 0.1



    // Criando Boundary (Limite) esquerdo  
    leftBoundary=createSprite(0,0,100,800);
    leftBoundary.visible = false;


    //Crie Boundary direito 
    rightBoundary=createSprite(400,0,100,800);
    rightBoundary.visible = false;
}


function draw() {
    background(0);

    // Menino se movendo no eixo X com o mouse
    boy.x = World.mouseX;

    edges= createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);




    //Reiniciar o fundo
    if(path.y > 400){
        path.y = path.width / 2
    }



 drawSprites();

}  




