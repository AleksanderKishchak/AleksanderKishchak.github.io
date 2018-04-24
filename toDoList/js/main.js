var btn1 = document.getElementById('btn1')
var btn2 = document.querySelector("#btn2");
var list = document.querySelector("#list");
var story = list.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.getElementsByClassName("close")[0];
var input = document.getElementById('input');


function addItem() {
	var newLi = document.createElement("li");
	if(input.value == false) return false;
	newLi.innerHTML = input.value;
	newLi.className = "item";
	list.appendChild(newLi);
	popup.style.display = 'none';
	input.value = "";
}

function delItem() {
	list.removeChild(story[0]);

	if(story.length == 0) {
		popup.style.display = 'block';
	}
}
function closePopup () {
	popup.style.display = 'none';
}
btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);