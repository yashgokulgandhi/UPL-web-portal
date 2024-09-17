
let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{

   var uname=document.getElementById("email").value;
   
   var password=document.getElementById("password").value;

   console.log(uname);
   if(uname===("30035951@upl-ltd.com") && password===("1234"))
      {
              
      window.location.href="homepage.html";
         
     }

});





