// let fullName = prompt ("enter your full name without space.");
// let userName = "@"+fullName+fullName.length;
// console.log(userName);




// let gameNumber = 25;
// let userNumber = prompt ("guess the game number :");
// while (userNumber != gameNumber){
//     userNumber = prompt ("you enter wrong number. guess again :");

// }
// console.log("congratulations, you entered the right number")
// alert("hi");
// let sm = document.querySelectorAll(".sm");
// sm.onclick = () =>{
//   sm.style.backgroundColour="red";
//   console.log("you are inside div");
// };
// let sm = document.querySelector(".sm");
// let big = document.querySelector(".big");
// let small = document.querySelector(".small");
// let fblogo = document.querySelector("#fb-logo");
// sm.onmouseover = function (){

//     small.style.color = "white";
//     small.style.transition = "all 0.5s ease"
//     big.style.color = "white";
//     big.style.transition = "all 0.4s ease"
//     fblogo.style.color = "white";
//     fblogo.style.transition = "all 0.3s ease"


//    console.log("you are inside div");


// };
// sm.onmouseout = function (){
//     big.style.color = "#222";
//     big.style.transition = "all 0.4s ease"

//     small.style.color = "#8e8b8c";
//     small.style.transition = "all 0.3s ease"

//     fblogo.style.color = "#1877F2";
//     fblogo.style.transition = "all 0.9s ease"


//    console.log("you are inside div");
// };
let smboxes = document.querySelectorAll(".sm");
let big = document.querySelector(".big")
let small = document.querySelector(".small");
let fblogo = document.querySelector("#fb-logo")
smboxes.forEach((sm) => {
    sm.addEventListener("mouseover", () => {
      console.log("box is on mouse")
      small.style.color = "white";
      small.style.transition = "all 0.5s ease"
     big.style.color = "white";
     big.style.transition = "all 0.4s ease"
     fblogo.style.color = "white";
     fblogo.style.transition = "all 0.3s ease"
    })
  })
  smboxes.forEach((sm) => {
    sm.addEventListener("mouseout", () => {
      console.log("box is out mouse")
      big.style.color = "#222";
           big.style.transition = "all 0.4s ease"
      
          small.style.color = "#8e8b8c";
          small.style.transition = "all 0.3s ease"
      
          fblogo.style.color = "#1877F2";
          fblogo.style.transition = "all 0.7s ease"
    })
  })