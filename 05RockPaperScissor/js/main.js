var compscore=0;
var userscore=0;
var div=document.querySelector(".choices");
div.addEventListener("click",function(event){
    var arr=["r","s","p"];
    var i = Math.floor(Math.random() * 3);
    var comp=document.querySelector("#result-comp-stat");
    var compimgid=document.querySelector("#"+arr[i]).getAttribute("id");
    var imgforcomp=document.querySelector("#"+arr[i]).innerHTML;
    comp.innerHTML="<p>Computer:"+imgforcomp+"</p>";
    var userimgid=event.target.parentNode.getAttribute("id");
    var imgforuser=document.querySelector("#"+userimgid).innerHTML;
    var user=document.querySelector("#result-user-stat");
    user.innerHTML="<p>User:"+imgforuser+"</p>";
    if (compimgid === "p" && userimgid === "r") {
        compscore+=1;
        document.querySelector("#compScoreVal").innerText=""+compscore+"";
        document.querySelector("#result-final-stat").innerHTML="<p>Winner: Computer wins! Paper beats rock.</p>";
    } else if (compimgid === "p" && userimgid === "s") {
        userscore+=1;
        document.querySelector("#userScoreVal").innerText=""+userscore+"";
        document.querySelector("#result-final-stat").innerHTML="<p>Winner: User wins! Scissors beat paper.</p>";
    } else if (compimgid === "p" && userimgid === "p") {
        document.querySelector("#result-final-stat").innerHTML="<p>Winner: It's a tie! Both users played paper.</p>";
        console.log("It's a tie! Both users played paper.");
    } else if (compimgid === "r" && userimgid === "p") {
        userscore+=1;
        document.querySelector("#userScoreVal").innerText=""+userscore+"";
        document.querySelector("#result-final-stat").innerHTML="<p>Winner: User wins! Paper beats rock.</p>";
        console.log("User wins! Paper beats rock.");
    } else if (compimgid === "r" && userimgid === "s") {
        compscore+=1;
        document.querySelector("#compScoreVal").innerText=""+compscore+"";
        document.querySelector("#result-final-stat").innerHTML="<p>Winner: Computer wins! Rock beats scissors.</p>";
        console.log("Computer wins! Rock beats scissors.");
    } else if (compimgid === "r" && userimgid === "r") {
        document.querySelector("#result-final-stat").innerHTML="<p>Winner: It's a tie! Both users played rock.</p>";
        console.log("It's a tie! Both users played rock.");
    } else if (compimgid === "s" && userimgid === "p") {
        compscore+=1;
        document.querySelector("#compScoreVal").innerText=""+compscore+"";
        document.querySelector("#result-final-stat").innerHTML="<p>Winner: Computer wins! Scissors beat paper.</p>";
        console.log("Computer wins! Scissors beat paper.");
    } else if (compimgid === "s" && userimgid === "r") {
        userscore+=1;
        document.querySelector("#userScoreVal").innerText=""+userscore+"";
        document.querySelector("#result-final-stat").innerHTML="<p>Winner: User wins! Rock beats scissors.</p>";
        console.log("User wins! Rock beats scissors.");
    } else if (compimgid === "s" && userimgid === "s") {
        document.querySelector("#result-final-stat").innerHTML="<p>Winner: It's a tie! Both users played scissors.</p>";
        console.log("It's a tie! Both users played scissors.");
    }
})
