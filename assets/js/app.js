
console.log(window.innerWidth);

const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll",function(){
	if(window.scrollY>0){
		backToTop.style.display = "flex";
	}else{
		backToTop.style.display = "none";
	}
})


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
const hamBurger = document.querySelector(".hamburger");
const close = document.querySelector(".close");


menuDisplay.addEventListener("click",function(){
		sideNav.classList.toggle("left-align");
		hamBurger.classList.toggle("noDisplay");
		close.classList.toggle("display");
		//console.log("clicked");
})


