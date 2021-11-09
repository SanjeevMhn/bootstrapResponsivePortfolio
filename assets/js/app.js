

function typingEffect(){
	let text = "I am a web developer";
	let speed = 200;
	let i = 0
	let timer = setInterval(function(){
		if(i<text.length){
			document.getElementById('demo').innerHTML += text.charAt(i);
			i++;
		}else{
			document.getElementById('demo').innerHTML = " ";	
			i = 0;
		}
	},speed);
	
}

typingEffect();

const menuDisplay = document.querySelector(".menu-button");
const sideNav = document.querySelector(".side-nav");
menuDisplay.addEventListener("click",function(){
		sideNav.classList.toggle("left-align");
		//console.log("clicked");
})