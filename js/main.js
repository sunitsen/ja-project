// const posts = [
//     {
//         title: "this is title 1",
//         body: "this is body"
//     },
//     {
//         title: "this is title 2",
//         body: "this is body"
//     },
//     {
//         title: "this is title 3",
//         body: "this is body"
//     },
//     {
//         title: "this is title 4",
//         body: "this is body"
//     },
//     {
//         title: "this is title 1",
//         body: "this is body"
//     },
//     {
//         title: "this is title 2",
//         body: "this is body"
//     },
//     {
//         title: "this is title 3",
//         body: "this is body"
//     },
//     {
//         title: "this is title 4",
//         body: "this is body"
//     },
// ];




//fetch data
// const fetchData = async (config) => {
//     try{
//         const res = await axios(config);
//         return res.data;

//     }catch(error){
//         throw Error("data is not fetched");
//     }
// };

// const postElements = document.querySelector(".posts");

// const loadAllData = async () => {
//     const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
//     posts.map((singlepost) => {
//         // console.log(singlepost);
//         const postBox = document.createElement("div");
//         postBox.classList.add("post");
//         postBox.innerHTML = `
        
//         <h4>${singlepost.title}</h4>
//         <p>${singlepost.body}</p>
        
//         `;
//         postElements.appendChild(postBox);
//     });
// };
// loadAllData();




//finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = document.querySelector("#resultText");
const lostWinMessage = document.createElement("p");
const remainingAttempts = document.querySelector("#remainingAttempts");


//initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalLost = 0;
let totalWons = 0;







form.addEventListener("submit", function(event){
    event.preventDefault();
    attempts++;
    if(attempts > 5){
     guessingNumber.disabled  ="true";
     checkButton.disabled  ="true";

    }else{
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts - attempts}`

    }

    guessingNumber.value = "";
});


function checkResult(guessingNumber){
console.log(guessingNumber);
const randomNumber = getRandomNumber(5)

if(guessingNumber == randomNumber){
    randomNumber.innerHTML = `you have won`;
    totalWons++;


}else{
resultText.innerHTML = `you have lost: random number was: ${randomNumber}`;
totalLost++;
}


lostWinMessage.innerHTML =`Won:${totalWons}. Lost:${totalLost}`;
lostWinMessage.classList.add("large-text");
cardBody.appendChild(lostWinMessage);

}


function getRandomNumber(limit){
  return Math.floor(Math.random() * limit) + 1;
}