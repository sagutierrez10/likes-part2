

// function addLike(btnElement){
//     var headerTextElement = btnElement.previousElementSibling;
//     if(headerTextElement.count == undefined)
//         headerTextElement.count = 0;
//     headerTextElement.count++;
//     console.log(headerTextElement.count); 
// }


var likesArray = [9, 12, 9]
var neilLikes = document.querySelector("#neil-likes")
neilLikes.innerHTML = likesArray[0]
var nicholeLikes = document.querySelector("#nichole-likes")
nicholeLikes.innerHTML = likesArray[1]
var jimLikes = document.querySelector("#jim-likes")
jimLikes.innerHTML = likesArray[2]

function addLike(element) {
    if (element == neilLikes) {
        likesArray[0]++
        element.innerHTML = likesArray[0]
    }
    else if (element == nicholeLikes) {
        likesArray[1]++
        element.innerHTML = likesArray[1]
    }
    else {
        likesArray[2]++
        element.innerHTML = likesArray[2]
    }
}


// function addLike(btnElement){
//     var headerTextElement = btnElement.previousElementSibling;
//     if(headerTextElement.count == undefined)
//         headerTextElement.count = 0;
//     var headerCount = Number(headerTextElement.innerText.split(' ')[0]);
//     headerTextElement.count++;
//     headerTextElement.innerText=  headerTextElement.count + ' likes' ;
//     console.log(headerTextElement.count); 
// }


// var count1 =9
    // var count2=12
// var count1 = document.querySelector('#count')
// 
// function addLike(){
//     count++;
//      
// countElement.innerText= count;
//     console.log(count);
// }