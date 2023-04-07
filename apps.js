const btn = document.querySelector('.btn');
const restart = document.querySelector('#restartGame');
const live = document.querySelector('.lives');
let live_num = document.querySelector('.live_num');
let num = [];

resetNumArray();

restart.addEventListener("click", function(){
    
    live.innerHTML = 7;
    btn.innerHTML = "";

    const div_txt = document.querySelector('.txt-area');
    div_txt.style.display = 'none';
    
    resetNumArray();
    addnum();
})
     

function addnum() {
  
    for (let i = 0; i < 150; i++) {
      const button = document.createElement("button");
      const randomNumber = Math.floor(Math.random() * num.length);
      num.push(num[randomNumber]);
      button.textContent = num[randomNumber];
      num.splice(randomNumber,1);
      btn.appendChild(button);
    
    }
  
    console.log(num);
}


function resetNumArray() {
  num =[]
  for (let i = 1; i <= 150; i++) {
    num.push(i);
  }
}




  
 
