'use strict';

//add to my list
function add_Tolist() {
  let li = document.createElement("li");
  let userInput = document.getElementById("user").value;
  let createLI = document.createTextNode(userInput);
  li.appendChild(createLI);
  if (userInput === '') {
    return;
  } else {
    document.getElementById("to-do").appendChild(li);
  }
}
	
	
//strike through
let unordered = document.querySelector('ul');
unordered.addEventListener('click', function (event){
	let listItem = event.target.tagName;
	console.log(unordered);
	if(listItem === 'LI'){
    event.target.classList.add('completed');
	}
});
	
