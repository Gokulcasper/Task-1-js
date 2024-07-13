let ContainerE1 = document.getElementById("colorPickerContainer");
ContainerE1.classList.add("containerClass");

let selectedColorHexCode = document.getElementById("selectedColorHexCode")
selectedColorHexCode.style.color="#49a6e9"


let btn1 = document.getElementById("button1");
btn1.style.backgroundColor="#e0e0e0";

let btn2 = document.getElementById("button2");
btn2.style.backgroundColor="#6fcf97"

let btn3 = document.getElementById("button3");
btn3.style.backgroundColor="#56ccf2"

let btn4 = document.getElementById("button4");
btn4.style.backgroundColor="#bb6bd9"


function btn1Click(){
    ContainerE1.style.backgroundColor="#e0e0e0";
    selectedColorHexCode.style.color="#e0e0e0";
    selectedColorHexCode.textContent=btn1.innerText;
}

function btn2Click(){
    ContainerE1.style.backgroundColor="#6fcf97";
    selectedColorHexCode.style.color="#6fcf97";
    selectedColorHexCode.textContent=btn2.innerText;
}
function btn3Click(){
    ContainerE1.style.backgroundColor="#56ccf2";
    selectedColorHexCode.style.color="#56ccf2";
    selectedColorHexCode.textContent=btn3.innerText;
}
function btn4Click(){
    ContainerE1.style.backgroundColor="#bb6bd9";
    selectedColorHexCode.style.color="#bb6bd9";
    selectedColorHexCode.textContent=btn4.innerText;
}

function normalcolorBtn(){
    ContainerE1.style.backgroundColor="#ffff";
    ContainerE1.style.backgroundColor="#ffff";
    ContainerE1.style.backgroundColor="#ffff";
    ContainerE1.style.backgroundColor="#ffff";

    selectedColorHexCode.style.color="#49a6e9";
    selectedColorHexCode.style.color="#49a6e9";
    selectedColorHexCode.style.color="#49a6e9";
    selectedColorHexCode.style.color="#49a6e9";

    selectedColorHexCode.textContent="#fffff";
}
// let ContainerE1 = document.getElementById("colorPickerContainer");

// let h1Container = document.createElement("h1");
// h1Container.textContent="Color Picker";
// ContainerE1.appendChild(h1Container);


// let btn1Container=document.getElementById("button1");
// btn1Container.textContent="#e0e0e0";
// ContainerE1.appendChild(btn1Container);

// let btn2Container=document.getElementById("button2");
// btn2Container.textContent="#6fcf97";
// ContainerE1.appendChild(btn2Container);

// let btn3Container=document.getElementById("button3");
// btn3Container.textContent="#56ccf2";
// ContainerE1.appendChild(btn3Container);

// let btn4Container=document.getElementById("button4");
// btn4Container.textContent="#bb6bd9";
// ContainerE1.appendChild(btn4Container);


// ContainerE1.childNodes[7].textContent="Background Color : ";

// let pContainer = document.getElementsByTagName("p");
// pContainer.textContent="Background Color : ";
// ContainerE1.nodeName(pContainer);
// console.log(pContainer);

// let spanContainer=document.getElementById("selectedColorHexCode");
// spanContainer.textContent="#fffff";
// spanContainer.style.color="#49a6e9";


// btn1Container.onclick=function(){

// }

// btn2Container.onclick=function(){

// }

// btn3Container.onclick=function(){

// }

// btn4Container.onclick=function(){

// }


//---------- TRAFFIC LIGHT ---------------

let stopLight = document.getElementById("stopLight")
let readyLight = document.getElementById("readyLight")
let goLight = document.getElementById("goLight")


let trafficBtn1 = document.getElementById("stopButton");
trafficBtn1.onclick=function(){
    stopLight .style.backgroundColor="#cf1124";
    trafficBtn1.style.color="#cf1124";

    readyLight .style.backgroundColor="#4b5069";
    goLight .style.backgroundColor="#4b5069";
    trafficBtn2.style.color="white";
    trafficBtn3.style.color="white";
}

let trafficBtn2 = document.getElementById("readyButton");
trafficBtn2.onclick=function(){
    readyLight .style.backgroundColor="#f7c948";
    trafficBtn2.style.color="#f7c948";

    stopLight .style.backgroundColor="#4b5069";
    goLight .style.backgroundColor="#4b5069";
    trafficBtn1.style.color="white";
    trafficBtn3.style.color="white";
}

let trafficBtn3 = document.getElementById("goButton");
trafficBtn3.onclick=function(){
    goLight .style.backgroundColor="#199473";
    trafficBtn3.style.color="#199473";

    stopLight .style.backgroundColor="#4b5069";
    readyLight .style.backgroundColor="#4b5069";
    trafficBtn1.style.color="white";
    trafficBtn2.style.color="white";
}

function normalBtn(){
    readyLight .style.backgroundColor="#4b5069";
    stopLight .style.backgroundColor="#4b5069";
    goLight .style.backgroundColor="#4b5069";
    trafficBtn1.style.color="white";
    trafficBtn2.style.color="white";
    trafficBtn3.style.color="white";
}



// ------ Season Switcher -----------

let SeasonMediumImage = document.getElementById("seasonMediumImage");
let imgBtn1 = document.getElementById("imgBtn1");
let imgBtn2 = document.getElementById("imgBtn2");
let imgBtn3 = document.getElementById("imgBtn3");
let imgBtn4 = document.getElementById("imgBtn4");

let imgSpring="https://res.cloudinary.com/dhpkv1tec/image/upload/v1684396063/natural%20places/seasons-switcher-spring-md-img_lwd2gw.png";
let imgSummer="https://res.cloudinary.com/dhpkv1tec/image/upload/v1684396144/natural%20places/seasons-switcher-summer-md-img_ustin9.png";
let imgAutunm="https://res.cloudinary.com/dhpkv1tec/image/upload/v1684396272/natural%20places/seasons-switcher-autumn-md-img_kmnmcu.png";
let imgWinter="https://res.cloudinary.com/dhpkv1tec/image/upload/v1684396318/natural%20places/seasons-switcher-winter-md-img_z5awmm.png";

imgBtn1.onclick=function(){
    SeasonMediumImage.src=imgSpring;
}
imgBtn2.onclick=function(){
    SeasonMediumImage.src=imgSummer;
}
imgBtn3.onclick=function(){
    SeasonMediumImage.src=imgAutunm;
}
imgBtn4.onclick=function(){
    SeasonMediumImage.src=imgWinter;
}
function normalImgBtn(){
    SeasonMediumImage.src="https://res.cloudinary.com/dhpkv1tec/image/upload/v1684395858/natural%20places/seasons-switcher-four-seasons-xs-img_wxi4f3.png";
}

// ---------- Toggle Like and Unlike  ----------

let puppyImage=document.getElementById("puppyImage");
let likeIcon=document.getElementById("likeIcon");
let likeButton=document.getElementById("likeButton");
let likedImage="https://res.cloudinary.com/dhpkv1tec/image/upload/v1684396484/natural%20places/white-puppy-liked-img_wohqq2.png";
likeButton.onclick=function(){
    puppyImage.src=likedImage;
    likeIcon.style.color="#0967d2";
    likeButton.style.color="#0967d2";
    likeButton.style.backgroundColor="white";
    likeButton.textContent="Liked"
    console.log(puppyImage);
}
function normalLikeBtn(){
    puppyImage.src="https://res.cloudinary.com/dhpkv1tec/image/upload/v1684396469/natural%20places/white-puppy-img_cjfliy.png";
    likeIcon.style.color="#cbd2d9";
    likeButton.style.color="#9aa5b1";
    likeButton.style.backgroundColor="#cbd2d9";
    likeButton.textContent="Like"
}

// ---------- Tip Calculator ---------------

let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let calculateButton=document.getElementById("calculateButton");

calculateButton.addEventListener('click',function(){
let billAmount = document.getElementById("billAmount").value;
let percentageTip = document.getElementById("percentageTip").value;
let calculatedTip=(percentageTip/100)*billAmount;
let calculatedTotal=parseInt(billAmount)+(calculatedTip);
tipAmount.value=calculatedTip;
totalAmount.value=calculatedTotal;
});
// function calculateButton(){
//     let billAmount = document.getElementById("billAmount").value;
//     let percentageTip = document.getElementById("percentageTip").value;
//     let calculatedTip=(percentageTip/100)*billAmount;
//     let calculatedTotal=parseInt(billAmount)+(calculatedTip);
//     tipAmount.value=calculatedTip;
//     totalAmount.value=calculatedTotal;
// }
function normalCalculatorBtn(){
    billAmount.value="";
    percentageTip.value="";
    tipAmount.value="";
    totalAmount.value="";
}

// ------------- Sizing An Image ----------
