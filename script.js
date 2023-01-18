// function sleep(y) {
//     var current_time=new Date().getTime();
//     while(current_time+y>=new Date().getTime()){
//         console.log(current_time+y);
//     }
// }
// var status=document.getElementById("start");
// start.addEventListener("click", function () {
    
//     var start =document.getElementById("start");
//    if (start.checked===true) {
    
//     x=30;//number of sites
//     y=200;   //delay
//     for(let i=0;i<x;i++){
//         window.open(`https://www.bing.com/search?black+car`, "_blank");
//         window.focus();
//         sleep(y);
//     }
    
   
//     }
// });
// function sleep(y) {
//     var current_time=new Date().getTime();
//     while(current_time+y>=new Date().getTime()){
//         console.log(current_time+y);
//     }
// }
// var status=document.getElementById("start");
// var current_time=new Date().getTime();
// if(current_time+200==new Date().getTime())
//     {
//     var start =document.getElementById("start");
//    if (start.checked===true) {
    
//     x=30;//number of sites
//     y=200;   //delay
//     for(let i=0;i<x;i++){
//         window.open(`https://www.bing.com/search?black+car`, "_blank");
//         window.focus();
//         sleep(y);
//     }
    
   
//     }
// }
// document.addEventListener("DOMContentLoaded",function(event){
//     let i=Math.random() * 20
//     window.open(`https://www.bing.com/search?q=${{i}}&go=Search&qs=ds&form=QBRE`, "_blank");
// });

window.onload=function(){
    let i=Math.floor(Math.random()*20);
    console.log(i);
    window.open(`https://www.bing.com/search?q=${{i}}&go=Search&qs=ds&form=QBRE`, "_blank");

}


// chrome.tabs.onUpdated.addListener(function(){
//     let i=Math.floor(Math.random()*20);
//     console.log(i);
//     window.open(`https://www.bing.com/search?q=${{i}}&go=Search&qs=ds&form=QBRE`, "_blank");

// })

// chrome.tabs.onUpdated=function(){
//         let i=Math.floor(Math.random()*20);
//         console.log(i);
//         window.open(`https://www.bing.com/search?q=${{i}}&go=Search&qs=ds&form=QBRE`, "_blank");
// }    