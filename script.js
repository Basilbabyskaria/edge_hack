
document.getElementById("toggleBtn").addEventListener("click",  function(){
   let temp = localStorage.getItem('buttonStatus')
   // alert(temp);
   if(temp!=true){
    localStorage.setItem('buttonStatus',true)
   }
   if(temp == true){
    localStorage.setItem('buttonStatus',false)
   }
   alert(localStorage.getItem('buttonStatus'));

})