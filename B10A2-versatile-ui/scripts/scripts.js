// --------------   Menu button -------------------------- //
const menu_btn = document.querySelector("#menu");
const menu_close = document.querySelector("#menu_close");

menu_btn.addEventListener('click', function(){
    document.querySelector("#navBar").style.marginBottom = "10rem";
    document.querySelector("#nav-item").style.display = "block";
    menu_btn.style.display = "none";
    menu_close.style.display = "block";
})

menu_close.addEventListener('click', function(){
    document.querySelector("#navBar").style.marginBottom = "2rem";
    document.querySelector("#nav-item").style.display = "none";
    menu_btn.style.display = "block";
    menu_close.style.display = "none";
})
// --------------   Menu button -------------------------- //
// --------------   BMI Calculator -------------------------- //
const button = document.getElementById("calculate");
const reset = document.getElementById("reset");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let age = document.getElementById("age");
let sex = document.getElementById("sex");
let activity = document.getElementById("activity")
let result = document.getElementById("result");
let motivation = document.getElementById("motivation");
let bmi;


button.addEventListener('click', bmi_calculator)

// Calculator
function bmi_calculator() {
    if (height.value === "" || weight.value === "" || age.value === "" || sex.value === "") {
        alert("To Calculate BMI, fill all the input Sections");
    }
    else {
        bmi = weight.value / Math.pow((height.value/100), 2);
        bmi.toFixed(1);
        console.log(bmi);
        motivation_quote();
    }
}


// Reset Button Function
function reset_btn() {
    height.value = "";
    weight.value = "";
    age.value = "";
    sex.value = "";
    activity.value = "";
    result.style.display = "none";
    motivation.style.display = "none";
    reset.style.display = "none";
}

// display BMI result and motivation
function display_block() {
    result.innerHTML = `Your BMI is ${bmi.toFixed(1)}`;
    result.style.display = "block";
    motivation.style.display = "block";
    reset.addEventListener('click', reset_btn);
    reset.style.display = "block";
}

// Motivation
function motivation_quote() {
    if (bmi > 0  && bmi < 9) {
        if (sex.value === "female") {
            motivation.innerHTML = "Ohh My lady, You should see a doctor!!!";
            display_block();
        }
        else if(sex.value === "male"){
            motivation.innerHTML = "Ohh My Boy, You should see a doctor!!!";
            display_block();
        }
    }
    else if (bmi >= 10 && bmi < 16) {
        if (sex.value === "female") {
            motivation.innerHTML = "Ohh My lady, You are Moderate Skinny!!!";
            display_block();
        }
        else if(sex.value === "male"){
            motivation.innerHTML = "Ohh My Boy, You are Moderate Skinny!!!";
            display_block();
        }
    }
    else if (bmi >= 16 && bmi < 17) {
        if (sex.value === "female") {
            motivation.innerHTML = "Ohh My lady, You are Mild Skinny!!!";
            display_block();
        }
        else if(sex.value === "male"){
            motivation.innerHTML = "Ohh My Boy, You are Mild Skinny!!!";
            display_block();
        }
    }
    else if (bmi >= 17 && bmi < 18.5) {
        if (sex.value === "female") {
            motivation.innerHTML = "My lady, You have a really Hot figure!!!";
            display_block();
        }
        else if(sex.value === "male"){
            motivation.innerHTML = "My Boy, You have a really cool body!!!";
            display_block();
        }
    }
    else if (bmi >= 18.5 && bmi < 25) {
        if (sex.value === "female") {
            motivation.innerHTML = "My lady, You are Normal.";
            display_block();
        }
        else if(sex.value === "male"){
            motivation.innerHTML = "My Boy, You are Normal.";
            display_block();
        }
    }
    else if (bmi >= 25 && bmi < 30) {
        if (sex.value === "female") {
            motivation.innerHTML = "My lady, You are Overweight!";
            display_block();
        }
        else if(sex.value === "male"){
            motivation.innerHTML = " My Boy, You are Overweight!";
            display_block();
        }
    }
    else if (bmi >= 30 && bmi < 35) {
        if (sex.value === "female") {
            motivation.innerHTML = "My lady, You are at Obese Stage 1!!";
            display_block();
        }
        else if(sex.value === "male"){
            motivation.innerHTML = "My Boy, You are at Obese Stage 1!!";
            display_block();
        }
    }
    else if (bmi >= 35 && bmi < 40) {
        if (sex.value === "female") {
            motivation.innerHTML = "My lady, You are at Obese Stage 2!!!";
            display_block();
        }
        else if(sex.value === "male"){
            motivation.innerHTML = "My Boy, You are at Obese Stage 2!!!";
            display_block();
        }
    }
    else if (bmi > 40) {
        if (sex.value === "female") {
            motivation.innerHTML = "My lady, You are at Obese Stage 3!!! Code red for your life!!!";
            display_block();
        }
        else if(sex.value === "male"){
            motivation.innerHTML = "My Boy, You are at Obese Stage 3!!! Code red for your life!!!";
            display_block();
        }
    }
    else {
        alert("Invalid Data to Calculate your BMI!!!");
    }
}

// --------------   BMI Calculator -------------------------- //
