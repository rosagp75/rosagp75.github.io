var y= new Date();
document.getElementById("currentyear").innerHTML=y.getFullYear();
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject); 
        const towns = jsonObject['towns']; 
        for (let i = 0; i < towns.length; i++ ){
          if  (towns[i].name=="Preston"){
            let cardvent = document.createElement('section');
            let p1= document.createElement('p');
           
                     
            p1.textContent = towns[i].events;
            cardevent.appendChild(p1);
         
           
            document.querySelector('div.cardsevent').appendChild(cardevent);
          }
        }
      });
