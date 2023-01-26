const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];
for(var i=0;i<3;i++){
  var content=faqData[i].question;
  var div=document.querySelector(".arse");
  var element=document.createElement("div");
  element.setAttribute("class","faq");
  element.innerHTML=`<div class="faq_header" id="${i}"><h3>${content}</h3> <p class="show_btn">+</p></div>`;
  div.appendChild(element);
}
// Add a click event listener to the document
var flag=true;
  document.addEventListener("click", function(event) {
    // Check if the clicked element is a p element
    if(flag){
      if (event.target.tagName === "P") {
        // Get the parent div of the clicked p element
        event.target.innerHTML="-";
        var parentDiv = event.target.parentNode;
        var parentId = parentDiv.id;
        var inside=`${faqData[parentId].answer}`;
        
        var parentDiv = event.target.closest(".faq");
    
        // Create a new child element
        var newChild = document.createElement("div");
        newChild.setAttribute("class","hi");
        newChild.innerHTML = "<h3>"+inside+"</h3>";
    
        // Append the new child element to the parent div
        parentDiv.appendChild(newChild);
      }
      flag=false;
    }else{
      event.target.innerHTML="+";
        var inside=event.target.closest(".faq");
        var kk=inside.querySelector(".hi");
        kk.remove();
        flag=true;
    } 
  });




