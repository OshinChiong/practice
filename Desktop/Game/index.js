const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 600;
const w = canvas.width;
const h = canvas.height;


    document.getElementById("start-button").onclick = () => {
      startGame();
    };
   
    class Yoshi {
      constructor() {
        this.x = canvas.width/2-50;
        this.y = canvas.height/2-50;
        this.w = 50;
        this.h = 50;
        this.score = 0;
        
      }
    }

    let player = new Yoshi ();

const yo = new Image();
yo.src= "/yoshi caminando.gif";
yo.onload = function() {
    ctx.drawImage (yo, player.x, player.y, player.w, player.h);
};

    class Enemie {
        constructor (id)  {
            this.x = Math.random()* canvas.width;
            this.y = Math.random()* canvas.height;
            this.w = 20;
            this.h = 20;
        }
      }
    
        generateEnemie = () => {
      const enemieArr = ['enemie'];  
  }
    
let enemieArr = []
let id =0;
function addEnemie(){
  enemieArr.push(new Enemie(id++));
}
let int;

function startGame() {
    int = setInterval(addEnemie, 20);
     animate();
}


let game;
function animate() {
  game = window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "28px sans-serif";
  ctx.fillText(`Score: ${player.score}`, 70, 30);
  ctx.drawImage(yo, player.x, player.y, player.w, player.h);

  
for (let i = 0; i < enemieArr.length; i++){
  let image = new Image();
  image.src = "/enemigo.jpg";
  ctx.drawImage(image,
    enemieArr[i].x, 
    enemieArr[i].y, 
    enemieArr[i].w, 
    enemieArr[i].h );

}
}


function gameOver() {
  window.cancelAnimationFrame(game);
  clearInterval(int);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "red";
  ctx.font = "50px sans-serif";
  ctx.fillText("GAME OVER", 100, 100);
  ctx.fillStyle = "white";
  ctx.font = "40px sans-serif";
  ctx.fillText(`Final Score: ${player.score}`, 100, 300);
}


    document.addEventListener('keydown', (e)=>{
      switch(e.code){
        case 'ArrowUp':
          player.y -=10;
          break;
        case 'ArrowDown':
          player.y +=10;
          break;
        case 'ArrowLeft':
          player.x -=10;
          break;
        case 'ArrowRight':
          player.x +=10;
          break;  
      }
    });

    
    
  
   