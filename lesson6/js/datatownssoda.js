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
          if  (towns[i].name=="Soda Springs"){
            let cardevent = document.createElement('section');
            let p1= document.createElement('p');
            let p2= document.createElement('p');
            let p3= document.createElement('p'); 

            p1.textContent = towns[i].events[0];
            cardevent.appendChild(p1);
            p2.textContent = towns[i].events[1];
            cardevent.appendChild(p2);
            p3.textContent = towns[i].events[2];
            cardevent.appendChild(p3);
           
            document.querySelector('div.cardevent').appendChild(cardevent);
          }
        }
      });
