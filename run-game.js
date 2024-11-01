const hero = document.querySelector(".hero");
const heroBoy = document.querySelector(".heroBoy");
const vilan = document.querySelector(".vilan");
const jumpBtn = document.getElementById("jumpBtn");
const startGame = document.getElementById("startGame")

function jump() {
    if(hero.classList != "animate") {
        hero.classList.add("animate");
        if(event.key === "Enter" || event.target === startGame){
            vilan.style.animation = "move 1s infinite linear";
        }
        
    }
    setTimeout(() => {
       hero.classList.remove("animate"); 
    }, 500);
}

document.addEventListener("keydown", function(){
    if(event.key === "Enter" || event.target === jumpBtn){
        jump();
    }
        
    
    
})

//CHECK IF HERO IS ALIVE

let isAlive = setInterval(() => {
    
    let heroBottom = parseInt(window.getComputedStyle(hero).getPropertyValue("bottom"));
    let vilanLeft = parseInt(window.getComputedStyle(vilan).getPropertyValue("left"));
    console.log(heroBottom);
    
    

    // console.log(heroTop);

    if (vilanLeft < 40 && vilanLeft > 25 && heroBottom <= -150) {
        vilan.computedStyleMap.animation = "";
        alert("Game Over. Press Spacebar to restart");
    }else{}
    
}, 50);