const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=58f3ede8a932ca945faf8e7bf4d71898&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //pass values to local var
    var t=parseFloat(jsObject.main.temp);
    var humidity=parseFloat(jsObject.main.humidity);
    const desc = jsObject.weather[0].description;
       
    document.getElementById('txtdescripcion').innerHTML = desc; 
    document.getElementById('txttemperatura').innerHTML = t;
    document.getElementById('txthumidity').textContent = humidity +"%"; 
  });

  const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=58f3ede8a932ca945faf8e7bf4d71898&units=imperial';
  fetch(apiURL2)
  .then((response) => response.json())
  .then((forecastObject) => {
      var forecast = forecastObject.list.filter(x => x.dt_txt.includes('12:00:00'));
      console.table(forecast)
      for (let day = 0; day < forecast.length; day++) {
        var cadena=forecast[day].dt_txt;
        var mydate=new Date(cadena.substring(0,10));
        var myday=mydate.getDay();
        if (day==0){
          document.getElementById('temp0').innerHTML = forecast[day].main.temp; 
          document.getElementById("dia1").innerHTML = inicialesdia(myday);
          const imagesrc0 = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
          const desc0 = forecast[day].weather[0].description;  // note how we reference the weather array
          document.getElementById('icon0').setAttribute('src', imagesrc0);  // focus on the setAttribute() method
          document.getElementById('icon0').setAttribute('alt', desc0);
        }
        if (day==1){
          document.getElementById('temp1').innerHTML = forecast[day].main.temp;
          const imagesrc1 = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
          const desc1 = forecast[day].weather[0].description;  // note how we reference the weather array
          document.getElementById('icon1').setAttribute('src', imagesrc1);  // focus on the setAttribute() method
          document.getElementById('icon1').setAttribute('alt', desc1); 
        }
        if (day==2){
          document.getElementById('temp2').innerHTML = forecast[day].main.temp;
          const imagesrc2 = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
          const desc2 = forecast[day].weather[0].description;  // note how we reference the weather array
          document.getElementById('icon2').setAttribute('src', imagesrc2);  // focus on the setAttribute() method
          document.getElementById('icon2').setAttribute('alt', desc2); 
        }
        if (day==3){
          document.getElementById('temp3').innerHTML = forecast[day].main.temp; 
          const imagesrc3 = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
          const desc3 = forecast[day].weather[0].description;  // note how we reference the weather array
          document.getElementById('icon3').setAttribute('src', imagesrc3);  // focus on the setAttribute() method
          document.getElementById('icon3').setAttribute('alt', desc3);
        }
        if (day==4){
          document.getElementById('temp4').innerHTML = forecast[day].main.temp;
          const imagesrc4 = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
          const desc4 = forecast[day].weather[0].description;  // note how we reference the weather array
          document.getElementById('icon4').setAttribute('src', imagesrc4);  // focus on the setAttribute() method
          document.getElementById('icon4').setAttribute('alt', desc4); 
        }
    }

});

function inicialesdia(pardia) {
  if (pardia=="0"){return "Sun"}
  if (pardia=="1"){return "Mon"}
  if (pardia=="2"){return "Tue"}
  if (pardia=="3"){return "Wed"}
  if (pardia=="4"){return "Thu"}
  if (pardia=="5"){return "Fri"}
  if (pardia=="6"){return "Sat"}
  if (pardia=="7"){return "Sun"}
};
