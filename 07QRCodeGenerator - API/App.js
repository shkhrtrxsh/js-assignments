var div=document.querySelector("#submit");
div.addEventListener('click', function(event){
    var text=document.querySelector("#input").value;
    var url=`https://api.qrserver.com/v1/create-qr-code/?data=${text}`;
    var image=document.querySelector("#img");
    image.src=url;
    image.style.display="block";
})