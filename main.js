$(document).ready(function() {
    jsonObject.products.forEach(product => {
        var div = document.createElement('div');
        div.classList.add('main');

        div.innerHTML = `
            <div class="discription">
                <img class="mainimg" src="${product.image}" />
                <div class="maincontent">
                    <span class="c1">
                        <p class="c1p">${product.topic}</p>
                        <img class="c1p" src="${product.fav}" />
                    </span>
                    <span class="c2">
                        <p>${product.subject} | Grade ${product.grade}</p>
                    </span>
                    <span class="c3">
                        <p class="num num1">${product.unit}</p>
                        <p>Units</p>
                        <p class="num">${product.lessons}</p>
                        <p>Lessons</p>
                        <p class="num">${product.classes}</p>
                        <p>Classes</p>
                    </span>
                    <span class="c4">
                        <select class="cselect">
                            <option>Mr. Frank's Class B</option>
                        </select>
                    </span>
                    <span class="c5">${product.students}  ${product.date}</span>
                </div>
            </div>
                <div class="footer">
                    <img src="../${product.foot1}">
                    <img src="../${product.foot2}">
                    <img src="../${product.foot3}">
                    <img src="../${product.foot4}">
                </div>
        `;

     
        document.getElementById('container').appendChild(div);
    });
});

var box  = document.getElementById('box');
var down = false;
// box.style.overflow = hidden;
// box.style.display = none;


function toggleNotifi(){
	if (down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
	}else {
		box.style.height  = '500px';
		box.style.opacity = 1;
		down = true;
	}
}

$(document).ready(function() {
    jsonObjectx.alerts.forEach(alerts => {
        var div = document.createElement('div');
        div.classList.add('notification');

        div.innerHTML = `
            <div class="a1">
                <p>PA : ${alerts.pa}</p>
                <img src="icons/dnd.svg"/>
            </div>
            <div class="a2">${alerts.message}</div>
            <div class="a3">
                <span class = "a4">
                    <p>${alerts.files}</p>
                    <p>${alerts.time}</p>
                </span>
            </div>
        `;

        document.getElementById('box').appendChild(div);
        // document.getElementById('box2').appendChild(div);
    });
});

var hamburger  = document.getElementById('hamburger');
var doww = false;
let width = window.innerWidth;

function openmenu(){
	if (doww) {
		hamburger.style.height  = '0px';
		hamburger.style.opacity = 0;
		doww = false;
	}else {
		hamburger.style.height  = '350px';
		hamburger.style.opacity = 1;
		doww = true;
	}
}

$(document).ready(function() {
    jsonObjecty.menu.forEach(menu => {
        var div = document.createElement('div');
        div.classList.add('options');

        div.innerHTML = `
             <div class="options"><span class = "b1">
                    <p>${menu.option}</p>
                    <img src="../${menu.img}">
                </span></div>
        `;

        document.getElementById('hamburger').appendChild(div);
       
    });
});