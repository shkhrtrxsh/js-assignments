fetch('https://v2.jokeapi.dev/joke/Any?type=single')
  .then(response => response.json())
  .then(data => {
    // do something with the data
    document.querySelector("#joke").innerText=""+data.joke+"";
    //console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  var div=document.querySelector("#jokeBtn");
  div.addEventListener("click", function(event){
    document.querySelector("#joke").innerText="";
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then(response => response.json())
    .then(data => {
      // do something with the data
      console.log(data);
      document.querySelector("#joke").innerText=""+data.joke+"";
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
  })