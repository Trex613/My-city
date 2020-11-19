var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;

function setup() {
  createCanvas(400, 390);
  b1=new Building();
  b1.position=0;
  b1.floors=39;    
  
  b2=new Building();
  b2.position=1;
  b2.floors=29;
 
  b3=new Building();
  b3.position=2;
  b3.floors=40;
  
  b4=new Building();
  b4.position=3;
  b4.floors=42;
  
  b5=new Building();
  b5.position=4;
  b5.floors=45;
  
  b6=new Building();
  b6.position=5;
  b6.floors=20;
  
  b7=new Building();
  b7.position=6;
  b7.floors=39; 
    
  b8=new Building();
  b8.position=7;
  b8.floors=26; 
  
  b9=new Building();
  b9.position=8;
  b9.floors=33; 

  b10=new Building();
  b10.position=9;
  b10.floors=42; 
  }

function draw() {
  background("blue");
  fill("red")
  b1.display();
  fill("Orange")
  b2.display();
  fill("Pink")
  b3.display();
  fill("Green")
  b4.display();
  fill("Purple")
  b5.display();
  fill("yellow")
  b6.display();
  fill("silver")
  b7.display();
  fill("brown")
  b8.display();
  fill("darkblue")
  b9.display();
  fill("white")
  b10.display();
  fill("orangered")
  circle(400,0,100);
}