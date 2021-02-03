function toggleMenu(){
       document.getElementById("primaryNav").classList.toggle("hide");
}
function CalcularFactor() {
       var t = parseFloat(document.getElementById('dato1').value);
       var s = parseFloat(document.getElementById('dato2').value);
       if (t<=50 && s>3){
              f=35.74+(0.6215*t)-(35.75*Math.pow(s,0.16))+(0.4275*t*Math.pow(s,0.16));
       }
       else{
              f="N/A";
       }
       document.getElementById('outputDiv').innerHTML =f;
}

function adjustRating(rating) {
       document.getElementById("ratingvalue").innerHTML = rating;
   }
   
   function selectResponse() {
          const s = document.querySelector('#selected')
          const sel = document.querySelector('#selectbrowser');
          s.style.display = "block";
          s.textContent = sel.value;
          
   }