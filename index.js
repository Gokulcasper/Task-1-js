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



























// let ContainerE1 = document.getElementById("colorPickerContainer");

// let h1Container = document.createElement("h1");
// h1Container.textContent="Color Picker";
// ContainerE1.appendChild(h1Container);


//Create Button And Its Class
// let btn1Container2=document.createElement("button");
// btn1Container2.classList.add("containerClassBtn");
// let btn2Container2=document.createElement("button");
// btn1Container2.classList.add("containerClassBtn");
// let btn3Container2=document.createElement("button");
// btn1Container2.classList.add("containerClassBtn");
// let btn4Container2=document.createElement("button");
// btn1Container2.classList.add("containerClassBtn");

//Assign Button Values
// btn1Container2.textContent="#e0e0e0";
// btn2Container2.textContent="#6fcf97";
// btn3Container2.textContent="#56ccf2";
// btn4Container2.textContent="#bb6bd9";

//Button Append Class
// ContainerE1.appendChild(ContainerE2);
// ContainerE2.appendChild(btn1Container2);
// ContainerE2.appendChild(btn2Container2);
// ContainerE2.appendChild(btn3Container2);
// ContainerE2.appendChild(btn4Container2);




