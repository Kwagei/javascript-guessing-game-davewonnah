const btn = document.querySelector('.btn');
const restart = document.querySelector('#restartGame');
const live = document.querySelector('.lives');
let live_num = document.querySelector('.live_num');
let num = [];

for (let i = 1; i <= 250; i++) {
    num.push(i);
  }


restart.addEventListener("click", function(){
    
    live.innerHTML = 7;
    btn.innerHTML = "";

    const div_txt = document.querySelector('.txt-area');
    div_txt.style.display = 'none';
    // num.length = 0;
    addnum ();

   
           
})
     
const numArray = [];

function addnum() {
  
    for (let i = 0; i < 250; i++) {
      const button = document.createElement("button");
      const randomNumber = Math.floor(Math.random() * num.length);
      numArray.push(num[randomNumber]);
      button.textContent = num[randomNumber];
      num.splice(randomNumber,1);
      btn.appendChild(button);
    
    }
  
    console.log(numArray);
    console.log(num);
  }
  
 
