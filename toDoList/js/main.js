var btn1 = document.getElementById('btn1')
var btn2 = document.querySelector("#btn2");
var list = document.querySelector("#list");
var story = list.querySelectorAll(".item")
var popup = document.getElementsByClassName("popup")[0];



function addItem() {
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	list.appendChild(newLi);
}

function delItem() {
	list.removeChild(story[0]);
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);