var div=document.querySelector("#button");

div.addEventListener("click",function(event){
    var random=generateRandomColor();
    document.querySelector("#canvas").style.backgroundColor=""+random+"";
});

function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  